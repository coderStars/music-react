import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data';


import { SearchOutlined } from '@ant-design/icons';
import {Input} from 'antd';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

const HYAppHeader = memo(() => {

  // 页面代码
  const showSelectItem = (item, index) => {
    if(index < 3) {
      return (
        <NavLink key={item.title} to={item.link}>
          {item.title}
          <i className='sprite_01 icon' />
        </NavLink>
      )
    }
    else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'></a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (<div key={item.title} className='select-item'>{showSelectItem(item, index)}</div>)
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' suffix={<SearchOutlined />}/>
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default HYAppHeader