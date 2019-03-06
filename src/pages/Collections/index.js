import React from 'react';
import { NavLink } from "react-router-dom";
import { Card, Tabs, Avatar, Statistic, Icon } from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;
const { Meta } = Card;
export default class Collections extends React.Component {

  state = {
    menuList: []
  }
  componentWillMount() {
    this.getCollectionList()
  }

  getCollectionList = () => {
    if (localStorage.length > 0) {
      let menuList = []
      for (let index = 0; index < localStorage.length; index++) {
        const menuName = localStorage.key(index)
        console.log(menuName);

        let menu = JSON.parse(localStorage.getItem(menuName))
        console.log(typeof menu);
        menuList.push(this.renderMenuList(menu))
      }
      this.setState({
        menuList
      })

    }
  }

  renderMenuList = item => {
      return (
        <NavLink
          key={item.id}
          to={{
            pathname: `/common/detail/${item.id}`,
            state: item
          }}
        >
          <Card
            hoverable
            className="card"
            cover={<img alt="example" src={item.pic} />}
            id={item.id}
          >
            <Meta
              title={item.name}
              description={item.tag}
            />
          </Card>
        </NavLink>
      );
  };
  render() {
    return (
      <div className="wrap">
        <div className="user-header">
          <Avatar
            className="avatar"
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              width: 100,
              height: 100
            }}
          >
            U
          </Avatar>
          <div className="info">
            <h1>小榕同学的厨房</h1>
            <div className="statistic">
              <Statistic
                className="statistic-item"
                title="我的点赞"
                value={101}
              />
              <Statistic
                className="statistic-item"
                title="我的关注"
                value={11}
              />
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="apple" />
                我的收藏
              </span>
            }
            key="1"
          >
            <div className="collection-content">
              {this.state.menuList}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="android" />
                我的点赞
              </span>
            }
            key="2"
          />
        </Tabs>
      </div>
    );
  }
}
