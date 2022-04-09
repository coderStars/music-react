import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMENDS, CHANGE_NEW_ALBUMS, CHANGE_UP_RANKING, CHANGE_NEW_RANKING, CHANGE_ORIGIN_RANKING } from './constants';

import { getTopBanners, getHotRecommends } from '@/services/recommend';
import { getNewAlbum } from '@/services/recommend';
import { getTopList } from '../../../../../services/recommend';

export const changeBannersAction = (res) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners: res.banners
})


export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeBannersAction(res))
        })
    }
}

export const changeHotRecommendAction = (res) => ({
    type: CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

export const getHotRecommendsAction = (limit) => {
    return dispathch => {
        getHotRecommends(limit).then(res => {
            dispathch(changeHotRecommendAction(res));
        })
    }
}

export const changeNewAlbumAction = (res) => ({
    type: CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
})


export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const changeUpRankingAction = (res) => ({
    type: CHANGE_UP_RANKING,
    upRanking: res.playlist
})

export const changeNewRankingAction = (res) => ({
    type: CHANGE_NEW_RANKING,
    newRanking: res.playlist
})

export const changeOriginRankingAction = (res) => ({
    type: CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            // dispatch()
            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(res))
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res))
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res))
                    break;
                default:
                    break;
            }
        })
    }
}