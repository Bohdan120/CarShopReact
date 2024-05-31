import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Card, Row, Col, Pagination, Select } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { carsService } from '../server/cars';
import '../styles/car.css';
import Title from 'antd/es/typography/Title';

const { Option } = Select;

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const uniqueMakes = Array.from(new Set(cars.map(car => car.make)));
    const uniqueCategories = Array.from(new Set(cars.map(car => car.categoryName)));

    const loadCars = async () => {
        try {
            const response = await carsService.get();
            const items = response.data;
            console.log(response);
            for (const i of items) {
                if (!i.imageUrl.includes("://"))
                    i.imageUrl = process.env.REACT_APP_API_HOST + i.imageUrl;
            }
            setCars(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadCars();
    }, []);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (size) => {
        setPageSize(size);
        setCurrentPage(1); 
    };

    const handleDirectionChange = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection); 
        const sortedCars = [...cars];
        sortedCars.sort((a, b) => {
            if (newDirection === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setCars(sortedCars);
    };

    const handleMakeChange = (value) => {
        setSelectedMake(value);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const addToCart = (car) => {
        setCart([...cart, car]);
        message.success(`${car.make} ${car.model} added to cart`);
    };

    const deleteCar = async (id) => {
        try {
            console.log("Deleting car: ", id);
            const res = await carsService.delete(id);
            if (res.status === 200) {
                setCars(cars.filter(x => x.id !== id));
                message.success('Car deleted successfully!');
            }
        } catch (error) {
            console.error("Failed to delete car:", error);
            message.error('Failed to delete car.');
        }
    };

    const confirm = (id) => {
        deleteCar(id);
    };

    let sortedAndFilteredCars = [...cars];

    if (selectedMake) {
        sortedAndFilteredCars = sortedAndFilteredCars.filter(car =>
            car.make.toLowerCase() === selectedMake.toLowerCase()
        );
    }

    if (selectedCategory) {
        sortedAndFilteredCars = sortedAndFilteredCars.filter(car =>
            car.categoryName.toLowerCase() === selectedCategory.toLowerCase()
        );
    }

    const totalCars = sortedAndFilteredCars.length;
    const totalPages = Math.ceil(totalCars / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalCars);
    const displayedCars = sortedAndFilteredCars.slice(startIndex, endIndex);

    return (
        <>          
            <Title style={{textAlign: 'center'}} level={1}>List of Cars</Title>              
            <Space>                
                <Button className="create-car-button" type="primary">
                    <Link to="create">Create New Car</Link>
                </Button>      
                              
                <Button onClick={handleDirectionChange}>
                    {sortDirection === 'asc' ? 'Ascending' : 'Descending'} Price
                </Button>
                <Select 
                    placeholder="Search by category" 
                    onChange={handleCategoryChange}
                    style={{ width: 200 }}
                    allowClear
                >
                    {uniqueCategories.map(category => (
                        <Option key={category} value={category}>{category}</Option>
                    ))}
                </Select>
                <Select 
                    placeholder="Search by make" 
                    onChange={handleMakeChange}
                    style={{ width: 200 }}
                    allowClear
                >
                    {uniqueMakes.map(make => (
                        <Option key={make} value={make}>{make}</Option>
                    ))}
                </Select>
            </Space>
            <Row gutter={[16, 16]} className="car-grid">
                {displayedCars.map((car) => (
                    <Col key={car.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            className="car-card"
                            cover={<img className="car-image" src={car.imageUrl} alt={car.name} />}
                            actions={[
                                <Button type="primary" size={'large'} onClick={() => addToCart(car)}>Buy</Button>,
                                <Link to={`edit/${car.id}`}>
                                    <Button icon={<EditOutlined />} />
                                </Link>, 
                                <Popconfirm
                                    key="delete"
                                    title="Delete the car"
                                    description={`Are you sure to delete ${car.make} ${car.model}?`}
                                    onConfirm={() => confirm(car.id)}
                                    okText="Yes"
                                    cancelText="No"
                                    placement="left"
                                >
                                    <Button danger icon={<DeleteOutlined />}></Button>
                                </Popconfirm>
                            ]}
                        >
                            <Card.Meta
                                title={`${car.make} ${car.model}`}
                                description={(
                                    <>
                                        <p><strong>Year:</strong> {car.year}</p>
                                        <p><strong>Price:</strong> {car.price}$</p>
                                        <p><strong>Mileage:</strong> {car.mileage}</p>
                                        <p><strong>Engine:</strong> {car.engine}</p>
                                        <p><strong>Horsepower:</strong> {car.horsepower}</p>
                                        <p><strong>Category:</strong> {car.categoryName}</p>
                                        <p><strong>Description:</strong> {car.description}</p>
                                        <p><strong>In Stock:</strong> {car.inStock ? 'Yes' : 'No'}</p>
                                    </>
                                )}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={totalCars}
                onChange={onPageChange}
                onShowSizeChange={handlePageSizeChange}
                style={{ marginTop: '20px', textAlign: 'center' }}               
            />
        </>
    );
};

export default Cars;
