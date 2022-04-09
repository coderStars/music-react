import React, { memo } from 'react'

import { getSizeImage } from '@/utils/data-format';
import { TopRankingWrapper } from './style'

const HYTopRanking = memo((props) => {
    
    const { info } = props;
    const { tracks = [] } = info;
    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl)} alt="" />
                    <a href='/todo' className='image_cover'>ranking</a>
                </div>
                <div className='info'>
                    <a href='/todo'>{info.name}</a>
                    <div>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className='list-item'>
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    <div className='name text-nowrap'>{item.name}</div>
                                    <div className='operate'>
                                        <div className='btn sprite_02 play'></div>
                                        <div className='btn sprite_icon2 addto'></div>
                                        <div className='btn sprite_02 favor'></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <a href='/todo'>查看全部</a>
            </div>
        </TopRankingWrapper>
    )
})

export default HYTopRanking