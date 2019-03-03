import React from 'react';
import { Input, Menu, Avatar, Divider, Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './index.less';
import { transmit } from "../../redux/actions";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Header extends React.Component {
  state = {
    value: ''
  }

  static propTypes = {
    transmit: PropTypes.func.isRequired
  }

  getInputValue = event => {
    let value = event.target.value;
    this.setState({
      value
    });
  };

  menuSearch = () => {
    let value = this.state.value;
    // store.dispatch(actions.transmit(value))
    this.props.transmit(value)

  };

  render() {
    return (
      <div className="container">
        <div className="topbar-container">
          <div className="logo">
            <NavLink to="/home">
              <span>小帮厨</span>
            </NavLink>
          </div>
          {/* <Search
            style={{ width: '25%' }}
            placeholder="搜索菜谱、食材"
            enterButton="搜菜谱"
            size="large"
            onSearch={this.menuSearch}
          /> */}
          <Input
            style={{ width: '22%' }}
            placeholder="搜索菜谱、食材"
            onChange={event => this.getInputValue(event)}
            allowClear
            size="large"
          />
          <NavLink to="/search">
            <Button
              type="primary"
              icon="search"
              size="large"
              onClick={this.menuSearch}
            >
              搜菜谱
            </Button>
          </NavLink>

          <div className="topbar-menu">
            <Menu mode="horizontal">
              <Menu.Item key="mail">首页</Menu.Item>
              <Menu.Item key="app">菜单</Menu.Item>
              <SubMenu
                title={<span className="submenu-title-wrapper">菜谱分类</span>}
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
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              U
            </Avatar>
            <Divider type="vertical" />
            <a href="#">
              <Icon type="book" style={{ fontSize: 25 }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({keyword: state}),
  {transmit}
)(Header)