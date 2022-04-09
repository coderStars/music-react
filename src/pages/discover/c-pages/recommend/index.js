import React, { memo, useEffect } from 'react';

import TopBanners from './c-cpns/top-banners';
import HYHotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';

import HYRankingList from './c-cpns/ranking-list';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
import HYUserLogin from './c-cpns/user-login';
import HYHotAnchor from './c-cpns/hot-anchor';
import HYSettleSinger from './c-cpns/settle-singer';

const HYRecommend = (props) => {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HYHotRecommend />
          <HYNewAlbum />
          <HYRankingList />
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin />
          <HYSettleSinger />
          <HYHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default HYRecommend;

// const HYRecommend = (props) => {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners])
//   return (
//     <div>HYRecommend: {topBanners.length}</div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommend.topBanners
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction());
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));