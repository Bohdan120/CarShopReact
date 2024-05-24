import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { carsService } from '../server/cars';

const confirm = (id) => {
    console.log("Deleting car: ", id);
    message.success('Deleting car...');
};

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: (text, record) => <img style={imageStyles} src={text} alt={record.name} />
    },
    {
        title: 'Make',
        dataIndex: 'make',
        key: 'make'
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model'
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}$</span>
    },
    {
        title: 'Mileage',
        dataIndex: 'mileage',
        key: 'mileage'
    },
    {
        title: 'Engine',
        dataIndex: 'engine',
        key: 'engine'
    },
    {
        title: 'Horsepower',
        dataIndex: 'horsepower',
        key: 'horsepower'
    },
    {
        title: 'Category',
        dataIndex: 'categoryName',
        key: 'categoryName'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'In Stock',
        dataIndex: 'inStock',
        key: 'inStock',
        render: (text) => <span>{text ? 'Yes' : 'No'}</span>
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show</a>
                <Popconfirm
                    title="Delete the car"
                    description={`Are you sure to delete ${record.make} ${record.model}?`}
                    onConfirm={() => confirm(record.id)}
                    okText="Yes"
                    cancelText="No"
                    placement="left"
                >
                    <Button danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
            </Space>
        ),
    },
];

export default function Cars() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

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
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        loadCars();
    }, []);

    return (
        <>
            <Space>
                <Button style={{ marginBottom: 10 }} type="primary">
                    <Link to="create">Create New Car</Link>
                </Button>               
            </Space>
            <Table columns={columns} dataSource={cars} pagination={{ pageSize: 5 }} rowKey="id" />
        </>
    );
}

const imageStyles = {
    width: 200,
    height: 100,
    objectFit: "cover",
    borderRadius: 6
};
