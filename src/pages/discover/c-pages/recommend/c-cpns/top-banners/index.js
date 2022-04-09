import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';


import { getTopBannerAction } from '../../store/actionCreators';

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

const TopBanners = memo(() => {

    // state
    const [currentIndex, setCurrentIndex] = useState(0);

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    // 其他的hooks
    const bannerRef = useRef();

    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to);
    }, [])

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight />
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanners