import React, { memo } from 'react'

import { getCount } from '@/utils/data-format';
import { SongsCoverWrapper } from './style';

const HYSongsCover = memo((props) => {
    const { info } = props;
    return (
        <SongsCoverWrapper>
            <div className='cover-top'>
                <img src={info.picUrl} alt=" " />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter}
            </div>
        </SongsCoverWrapper>
    )
})

export default HYSongsCover