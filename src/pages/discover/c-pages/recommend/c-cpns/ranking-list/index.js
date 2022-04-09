import React, { memo, useEffect } from 'react'

import { getTopListAction } from '../../store/actionCreators';
import HYTopRanking from '@/components/top-ranking';

import { RankingWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
const HYRankingList = memo(() => {

    const {upRanking, newRanking, originRanking} = useSelector(state => ({
        upRanking: state.getIn(['recommend', 'upRanking']),
        newRanking: state.getIn(['recommend', 'newRanking']),
        originRanking: state.getIn(['recommend', 'originRanking'])
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        // getTopList(0);
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [])
    return (
        <RankingWrapper>
            <div className='tops'>
                <HYTopRanking info={upRanking} />
                <HYTopRanking info={newRanking} />
                <HYTopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})

export default HYRankingList