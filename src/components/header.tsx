import React from 'react';
import {Layout, Row, Col, Button, Space} from 'antd'
import {FolderAddOutlined,PlusCircleOutlined} from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = ()=>{

    return(
        <Header style={{height:50,background:'#CCCCCC'}}>
            <Row justify='space-around' align='middle' style={{height:50}}>
                <Col span={8}>
                    <Row align="middle">
                        <Space style={{height:50}}>
                            <Button icon={<PlusCircleOutlined />}>New</Button>
                            <Button >Import</Button>
                            <Button >Runner</Button>
                            <Button icon={<FolderAddOutlined />}></Button>
                    </Space>
                    </Row>
                    
                </Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent;