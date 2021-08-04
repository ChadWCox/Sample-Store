import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './App.css';

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;



function App() {
  const [ state, setState ] = useState(
    {
    current: 'mail'
    });
  
  const handleClick = (e) => {
    console.log('click', e);
    setState({ current: e.key });
  }

  const { current } = state;
  return (
    <div className="App">
      <Layout className='layout'>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <SubMenu key = {11} title="Login" >
              <Menu.ItemGroup key="login">
                <Button>Login</Button>
              </Menu.ItemGroup>
              <Menu.ItemGroup>
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          Navigation Three
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
        </Header>
        <Content style={{ padding: '70px 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
