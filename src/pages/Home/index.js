import React from 'react';
import { Carousel, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
import Axios from '../../api/index';

const { Meta } = Card;
export default class Home extends React.Component {
  state = {
    cardList: []
  };

  componentWillMount() {
    this.getMenuAPIList();
  }

  // 渲染卡片列表
  renderCardList = data => {
    return data.map(item => {
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
            className="home-content-card"
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
    });
  };
  // 从接口获取菜单列表数据
  getMenuAPIList = () => {
    let keyword = '春季';
    const num = 12;
    Axios.jsonp({
      url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`
    }).then(res => {
      if (res.status === '0') {
        let cardList = this.renderCardList(res.result.list);

        this.setState({
          cardList: cardList
        });
      }
    });
  };
  render() {
    return (
      <div className="home-wrap">
        <Carousel effect="fade" className="home-swiper" autoplay>
          <div>
            <img
              src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i3.meishichina.com/attachment/mofang/2019/03/01/20190301155142852315710138013.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i3.meishichina.com/attachment/mofang/2019/02/21/2019022115507147387858197577.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i3.meishichina.com/attachment/mofang/2019/01/08/2019010815469160847868197577.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home-content">
          {this.state.cardList}
        </div>
      </div>
    );
  }
}
