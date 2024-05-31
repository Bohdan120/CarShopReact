import React, { useEffect, useState } from 'react'
import { Layout as AntdLayout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, LoginOutlined, CarOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = AntdLayout;

const menuItems = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: "/cars",
        label: <Link to="/cars">Cars</Link>,
        icon: <CarOutlined /> 
    },
    {
        key: "/cart",
        label: <Link to="/cart">Cart</Link>,
        icon: <ShoppingCartOutlined />
    },    
    {
        key: "/login",
        label: <Link to="/login">Login</Link>,
        icon: <LoginOutlined />
    }
]

export default function Header() {

    let location = useLocation();

    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    return (
        <AntdHeader
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[current]}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
            </Menu>
        </AntdHeader>
    )
}

