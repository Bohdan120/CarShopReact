import React from 'react'
import { Layout as AntdLayout } from 'antd';

const { Footer: AntdFooter } = AntdLayout;

export default function Footer() {
    return (
        <AntdFooter
            style={{
                textAlign: 'center',
            }}
        >
            Car Shop ©{new Date().getFullYear()} Created by Bohdan
        </AntdFooter>
    )
}