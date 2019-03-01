import React from 'react';
import { Input, Menu, Avatar, Divider, Icon  } from 'antd';
import './index.less';

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="topbar-container">
          <div className="logo">
            <a href="#">小帮厨</a>
          </div>
          <Search
            style={{ width: '25%' }}
            placeholder="搜索菜谱、食材"
            enterButton="搜菜谱"
            size="large"
            onSearch={value => console.log(value)}
          />
          <div className="topbar-menu">
            <Menu mode="horizontal">
              <Menu.Item key="mail">
                首页
              </Menu.Item>
              <Menu.Item key="app">
                菜单
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    菜谱分类
                  </span>
                }
              >
                <MenuItemGroup title="常用主题" />
                <MenuItemGroup title="常见食材" />
                <MenuItemGroup title="时令食材" />
              </SubMenu>
              <Menu.Item key="alipay">
                <a
                  href="https://ant.design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  作品动态
                </a>
              </Menu.Item>
            </Menu>
          </div>
          <div className="avatar">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
            <Divider type="vertical"></Divider>
            <a href="#"><Icon type="book" style={{fontSize: 25}}/></a>
          </div>
        </div>
      </div>
    );
  }
}
