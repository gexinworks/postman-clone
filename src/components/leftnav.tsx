import React from 'react';
import { Layout } from 'antd';

const {Sider} = Layout;

const LeftNavComponent =()=>{
    return(
        <Sider width={280} style={{borderRight:'1px solid #ddd',background:'#fff'}}>

        </Sider>
    )
}

export default LeftNavComponent;