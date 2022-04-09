import React, { useEffect } from 'react';

import { dicoverMenu } from '@/common/local-data';
import { renderRoutes } from 'react-router-config';

import {
  DiscoverWrapper,
  TopMenu
} from './style';
import { NavLink } from 'react-router-dom';

export default function HYDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <div className='bottom'>
        {renderRoutes(props.route.children)}
      </div>
    </DiscoverWrapper>
  )
}
