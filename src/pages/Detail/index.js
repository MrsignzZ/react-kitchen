import React from 'react';
import { Table, Statistic, Row, Col, Icon, Tag } from 'antd';
import './index.less';
import Utils from "../../utils";

const CheckableTag = Tag.CheckableTag;

const columns = [
  {
    title: '用料',
    dataIndex: 'mname'
  },
  {
    title: '用量',
    dataIndex: 'amount'
  },
  {
    title: '类型',
    dataIndex: 'type'
  }
];
export default class Detail extends React.Component {
  state = {
    selectedTags: [],
  };

  renderMenuStep = (data) => {
    return (data.map((step, index) => (
      <div className="process-item">
        <img className="process-item_img" src={step.pic} alt="" />
        <div className="process-item_des">
          <div className="step">{index+1}</div>
          <p className="describe">{step.pcontent}</p>
        </div>
      </div>
    )))
  }

  render() {
    console.log(this.props.location.state);
    const menu  = this.props.location.state
    const tags = Utils.toArray(menu.tag)
    const data = Utils.getRealType(menu.material)
    const process = menu.process

    return (
      <div className="wrapper">
        {/* <h2>翡翠彩蔬卷</h2> */}
        {/* <img src="http://api.jisuapi.com/recipe/upload/20160719/115138_19423.jpg" alt=""/> */}
        <div className="info">
          <img
            className="img"
            src="http://api.jisuapi.com/recipe/upload/20160719/115138_19423.jpg"
            alt=""
          />
          <div className="introduce">
            <h2 className="menu-name">
              <span>{menu.name}</span>
            </h2>
            <h4>准备时间：{menu.preparetime}</h4>
            <h4>制作时间：{menu.cookingtime}</h4>
            <h4>用餐人数：{menu.peoplenum}</h4>
            <div className="tags">
              <h5 style={{ marginRight: 8, display: 'inline' }}>所属标签:</h5>
              {tags.map(tag => (
                <CheckableTag
                  key={tag}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <div className="statistic">
              <Statistic title="尝试人数" value={112893} className="statistic-item"/>
              <Statistic
                className="statistic-item"
                title="支持一下"
                value={1128}
                prefix={<Icon type="like" />}
              />
            </div>
          </div>
        </div>
        <p className="describe">
          <span>“</span>
          {menu.content}
          <span>”</span>
        </p>

        <div className="ingredients">
          <h3><Icon className="icon" type="shopping" theme="twoTone" twoToneColor="#52c41a"/>食材准备</h3>
          <Table columns={columns} dataSource={data} size="small" pagination={false}/>
        </div>
        <div className="process">
          <h3><Icon className="icon" type="shopping" theme="twoTone" twoToneColor="#52c41a" />{menu.name}的做法</h3>
          {/* <div className="process-item">
						<img className="process-item_img" src="http://api.jisuapi.com/recipe/upload/20160719/162546_72503.jpg" alt=""/>
            <div className="process-item_des">
							<div className="step">1</div>
							<p className="describe"></p>
            </div>
          </div> */}
          {this.renderMenuStep(process)}
        </div>
      </div>
    );
  }
}
