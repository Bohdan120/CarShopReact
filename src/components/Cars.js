import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Rate, Space, Table, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';



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
        dataIndex: 'image',
        key: 'image',
        render: (text) => <img style={imageStyles} src={text} alt='Car Image' />
    },
    {
        title: 'Name',
        dataIndex: 'make',
        key: 'make'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}$</span>
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show</a>
                <Popconfirm
                    title="Delete the car"
                    description={`Are you sure to delete ${record.title}?`}
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

const api = "http://localhost:3000/cars";

export default function Cars() {

    const [cars, setCars] = useState([]);

    const loadCars = async () => {
        const response = await fetch(api);
        const data = await response.json();

        setCars(data);
    }

    useEffect(() => {
        loadCars();
    }, []);

    return (
        <Table columns={columns} dataSource={cars} pagination={{ pageSize: 5 }} rowKey="id" />
    );
}

const imageStyles = {
    width: 200,
    height: 100,
    objectFit: "cover",
    borderRadius: 6
}