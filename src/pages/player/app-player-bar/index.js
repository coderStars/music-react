import { Slider } from 'antd';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { getSongDetailAction } from '../store/actionCreators';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/data-format';

import { Control, PlaybarWrapper, PlayInfo, Operator } from './style';
import { useDispatch, useSelector } from 'react-redux';
const HYAppPlayerBar = memo(() => {

    // props and state
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChange, setIsChange] = useState(false);
    const [isPlay, setIsPlay] = useState(false);

    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }))

    const dispatch = useDispatch();
    const audioRef = useRef();

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong])

    // other handle
    const picUrl = currentSong.al && currentSong.al.picUrl
    const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
    const duration = currentSong.dt || 0
    const showDuration = formatDate(duration, 'mm:ss');
    const showCurrentTime = formatDate(currentTime, 'mm:ss');
    // const progress = currentTime / duration * 100

    // handle function

    const playMusic = () => {
        isPlay ? audioRef.current.pause(): audioRef.current.play();
        setIsPlay(!isPlay);
        
    }

    const timeUpdate = (e) => {
        if (!isChange)  {
            setCurrentTime(e.target.currentTime * 1000);
            setProgress(e.target.currentTime * 1000 / duration * 100);
        }
    }
    
    const sliderChange = useCallback((value) => {
        setIsChange(true);
        setCurrentTime(value / 100 * duration);
        setProgress(value);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        audioRef.current.currentTime = value / 100 * duration / 1000;
        setIsChange(false);
    }, [duration])

    return (
        <PlaybarWrapper className='sprite_player'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlay}>
                    <button className='sprite_player prev'></button>
                    <button className='sprite_player play' onClick={e => playMusic()}></button>
                    <button className='sprite_player next'></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <a href='/todo'>
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </a>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='singer-name'>{currentSong.name}</span>
                            <a href='#/' className='singer-name'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider
                                defaultValue={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange} />
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
                                <span className='divider'>/</span>
                                <span className='duration'>{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} />
        </PlaybarWrapper>
    )
})

export default HYAppPlayerBar