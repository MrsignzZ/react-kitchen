import React from 'react';
import { Tag, Divider } from 'antd';
import './index.less'

export default class NavRight extends React.Component {
  render() {
    return (
      <div className="aside">
        <h3 className="title">
          <span className="hot-tag">热门标签</span>
          <span className="link-more"><a href="">更多>></a></span>
        </h3>
        <ul className="tags">
          <li className="tags-content">
            <h4>小吃</h4>
            <div>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </li>
          <li>
            <h4>小吃</h4>
            <div>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </li>
          <li>
            <h4>小吃</h4>
            <div>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </li>
          <li>
            <h4>小吃</h4>
            <div>
              <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
