import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Carousel } from 'antd';

import HYThemeHeader from '@/components/theme-header'
import HYAlbumCover from '@/components/album-cover';
import { getNewAlbumAction } from '../../store/actionCreators';
import {
  AlbumWrapper
} from './style';

const HYNewAlbum = memo(() => {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch])

  const pageRef = useRef();

  return (
    <AlbumWrapper>
      <HYThemeHeader title="新碟上架"></HYThemeHeader>
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5 ).map((iten, indexs) => {
                        return (
                          <HYAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px"/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

export default HYNewAlbum