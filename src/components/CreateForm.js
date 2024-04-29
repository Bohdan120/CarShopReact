import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const categories = [
    { value: 1, label: "Diesel" },
    { value: 2, label: "Electricity" },
    { value: 3, label: "Petrol" }
]

export default function CreateForm({ product }) {

    useEffect(() => {
        if (product) {
            form.setFieldsValue(product);
        }
    }, []);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.file;
    };

    return (
        <>
            <h1>Add New Car</h1>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    margin: "auto"
                }}
                layout="vertical"
            >
                <div style={col2}>
                    <Form.Item
                        name="make"
                        label="Make"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}

                    >
                        <Input placeholder="Enter car make" />
                    </Form.Item>

                    <Form.Item
                        name="model"
                        label="Model"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}

                    >
                        <Input placeholder="Enter car model" />
                    </Form.Item>

                    <Form.Item
                        name="year"
                        label="Year"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}

                    >
                        <Input placeholder="Enter car year" />
                    </Form.Item>
                </div>             
             
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    style={{ flexGrow: 1 }}
                >
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        prefix="$"
                        placeholder="Enter car price"
                    />
                </Form.Item>


                <Form.Item
                    name="categoryId"
                    label="Category"
                    initialValue={1}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a product category"
                        options={categories}
                    >
                        {/* <Option value="1">Electronics</Option>
                        <Option value="2">Transport</Option>
                        <Option value="3">Sport</Option>
                        <Option value="4">other</Option> */}
                    </Select>
                </Form.Item>

                <Form.Item
                        name="image"
                        label="URL"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}

                    >
                        <Input placeholder="Enter image URL" />
                    </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea rows={4}
                        placeholder="Enter product description"
                        minLength={10} maxLength={3000} showCount />
                </Form.Item>        

                <Form.Item style={{
                    textAlign: "center"
                }}>

                    <Space>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};

const col2 = {
    display: "flex",
    gap: 10
}