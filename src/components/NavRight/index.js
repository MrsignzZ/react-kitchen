import React from 'react';
import { Tag, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less'
import Axios from '../../api'
import Utils from '../../utils'
export default class NavRight extends React.Component {

  state = {
    tagList: []
  }

  componentWillMount(){
    this.getTagAPIList()
  }
  // 渲染标签列表
  renderTagList = (data) => {
    return data.map((item) => {
      // console.log(item.list.slice(0, 10));
      return (
        <li className="tags-content">
          <h4>{item.name}</h4>
          <div>
            {Utils.getRandomArrayElements(item.list, 8).map((tag) => (
                <Tag color="magenta">{tag.name}</Tag>
            ))}
          </div>
        </li>
      )
    })
  }

  // 从接口获取标签列表数据
  getTagAPIList = () => {
    // let classid = 2 // 标签序号
    // let start = 0   // 其实条数
    // let num = 12    // 获取数量

    Axios
      .jsonp({
        url: 'http://api.jisuapi.com/recipe/class?appkey=9d1f6ec2fd2463f7'
      })
      .then((res) => {
        if (res.status === '0') {
          let tagList = this.renderTagList(res.result)
          // console.log(tagList);
          this.setState({
            tagList: tagList
          })
        }
      })
  }

  render() {
    return (
      <div className="aside">
        <h3 className="title">
          <span className="hot-tag">热门标签</span>
          <span className="link-more"><a href="">更多>></a></span>
        </h3>
        <ul className="tags">
          {this.state.tagList}
        </ul>
      </div>
    );
  }
}
