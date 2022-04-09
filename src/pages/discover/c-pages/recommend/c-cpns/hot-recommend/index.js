import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {HOT_REACOMMEND_LIMIT} from '@/common/constants';
import HYThemeHeader from '@/components/theme-header';
import SongsCoverWrapper from '@/components/songs-cover';

import { getHotRecommendsAction } from '../../store/actionCreators';

import {
    HotRecommendWrapper
} from './style';

const HYHotRecommend = memo(() => {

    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotRecommendsAction(HOT_REACOMMEND_LIMIT))
    }, [dispatch])
    return (
        <HotRecommendWrapper>
            <HYThemeHeader title="推荐" keywords={['华语', '流行', '摇滚', '民谣',]} />
            <div className="recommend-list">

                {
                    hotRecommends.map((item, index) => {
                        return (
                            <SongsCoverWrapper key={item.id} info={item} />
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default HYHotRecommend