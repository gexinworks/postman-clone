import React from 'react';
import {Layout, Row, Col, Button, Space} from 'antd'
import {FolderAddOutlined,PlusCircleOutlined, HeartOutlined, SettingOutlined, ReloadOutlined, UserAddOutlined, DownOutlined, AppstoreOutlined} from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = ()=>{

    return(
        <Header style={{height:50,background:'#CCCCCC'}}>
            <Row justify='space-between' align='middle' style={{height:50}}>
                <Col span={8}>
                    <Row align="middle" justify='start'>
                        <Space style={{height:50}}>
                            <Button icon={<PlusCircleOutlined />} type='primary'>New</Button>
                            <Button >Import</Button>
                            <Button >Runner</Button>
                            <Button icon={<FolderAddOutlined />}></Button>
                    </Space>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row align='middle' justify='center'>
                    <Space style={{height:50}}>
                            <Button type='text' icon={<AppstoreOutlined />}>My WorkSpace <DownOutlined />
                            </Button>
                        <Button icon={<UserAddOutlined />}>invate</Button>
                    </Space>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row align='middle' justify='end'>
                        <Space style={{height:50}}>
                            <Button shape='circle-outline' icon={<HeartOutlined />}></Button>
                            <Button shape='circle-outline' icon={<ReloadOutlined />}></Button>
                            <Button shape='circle-outline' icon={<SettingOutlined />}></Button>
                            <Button shape='circle-outline' icon={<HeartOutlined />}></Button>
                            
                        </Space>
                    </Row>
                    
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent;