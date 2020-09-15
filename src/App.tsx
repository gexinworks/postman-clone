import React from 'react';
import {Layout} from 'antd';
import './App.less';
import LeftNavComponent from './components/leftnav';
import MainContentComponent from './components/maincontent';
import HeaderComponent from './components/header';

const {Header,Footer} = Layout;

function App() {
  return (
    <Layout>
      <HeaderComponent />
      <Layout style={{position:'absolute',top:50,left:0,right:0,bottom:36}} >
        <LeftNavComponent />
        <MainContentComponent />
      </Layout>
      <Footer style={{position:'absolute',bottom:0,height:36,left:0,right:0,borderTop:'1px solid #ddd',padding:0}}>Footer</Footer>
    </Layout>
  );
}

export default App;
