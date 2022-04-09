import React from 'react';
import { Redirect } from 'react-router-dom';
import HYRecommend from '../pages/discover/c-pages/recommend';
import HYRanking from '../pages/discover/c-pages/ranking';
import HYSongs  from '../pages/discover/c-pages/songs';
import HYDjradio from '../pages/discover/c-pages/djradio';
import HYArtist from '../pages/discover/c-pages/artist';
import HYAlbum from '../pages/discover/c-pages/album';
import HYPlayer from '../pages/discover/c-pages/player';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';
const HYDiscover = React.lazy(() => import('@/pages/discover'));

// import HYDiscover from '@/pages/discover';


const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
            return <Redirect to="/discover" />
        }
    },
    {
        path: '/discover',
        component: HYDiscover,
        children: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: HYRecommend
            },
            {
                path: "/discover/ranking",
                component: HYRanking
            },
            {
                path: "/discover/songs",
                component: HYSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: HYDjradio
            },
            {
                path: "/discover/artist",
                component: HYArtist
            },
            {
                path: "/discover/album",
                component: HYAlbum
            },
            {
                path: "/discover/player",
                component: HYPlayer
            }

        ]
    },
    {
        path: '/mine',
        exact: true,
        component: HYMine
    },
    {
        path: '/friend',
        exact: true,
        component: HYFriend
    }
];

export default routes