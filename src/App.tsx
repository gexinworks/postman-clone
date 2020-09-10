import React from 'react';
import {Layout} from 'antd';
import './App.less';

const {Header,Footer} = Layout;

function App() {
  return (
    <Layout>
      <Header style={{height:50,background:'#CCCCCC'}}></Header>
      <Layout style={{position:'absolute',top:50,left:0,right:0,bottom:36}} ></Layout>
      <Footer style={{position:'absolute',bottom:0,height:36,left:0,right:0,borderTop:'1px solid #ddd',padding:0}}>Footer</Footer>
    </Layout>
  );
}

export default App;
