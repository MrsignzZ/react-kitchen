import React from 'react'
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import { connect } from "react-redux";
import './index.less'
import Axios from "../../api"
const { Meta } = Card;
class Search extends React.Component{

  state = {
    cardList: []
  }

  componentDidMount() {
    this.getMenuAPIList(this.props.keyword)
  }
  componentWillReceiveProps(nextProps) {
    this.getMenuAPIList(nextProps.keyword)
  }

  // 渲染卡片列表
  renderCardList = (data) => {
    return data.map((item) => {
      return (
        <NavLink key={item.id} to={{
          pathname: `/common/detail/${item.id}`,
          state: item
        }} >
          <Card
            hoverable
            className="home-content-card"
            cover={<img alt="example" src={item.pic} />}
            onClick={this.openMenuDetail}
            id={item.id}
          >
            <Meta
              style={{ whiteSpace: 'nowrap' }}
              title={item.name}
              description={item.tag}
            />
          </Card>
        </NavLink>
      )
    })
  }
  // 从接口获取菜单列表数据
  getMenuAPIList = (keyword) => {
    const num = 12
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`
      })
      .then(res => {
        console.log(res.result.list);

        if (res.status === '0') {
          let cardList = this.renderCardList(res.result.list)
          this.setState({
            cardList: cardList
          })
        }
      })
  }
  render() {
    return(
      <div className="home-wrap">
        <div className="home-content">
          {this.state.cardList}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({keyword : state}),
  {}
)(Search)