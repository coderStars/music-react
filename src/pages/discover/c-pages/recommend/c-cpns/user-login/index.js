import React, { memo } from 'react'

import { UserLoginWrapper } from './style';

const HYUserLogin = memo(() => {
  return (
    <UserLoginWrapper>
        <p className='title'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href='/todo' className='loginBtn'>用户登录</a>
    </UserLoginWrapper>
  )
})

export default HYUserLogin