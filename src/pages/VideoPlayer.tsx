import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import trailer from '../assets/trailer.mp4';
import arrowBack from '../assets/arrowBack.svg';
import replay from '../assets/replay10.svg';
import pause from '../assets/pause.svg';
import playIcon from '../assets/play.png';
import forward from '../assets/forward10.svg';
import volumeIcon from '../assets/volume.svg';
import helpIcon from '../assets/help.svg';
import nextEp from '../assets/next.svg';
import episodes from '../assets/episodes.svg';
import subs from '../assets/subtitles.svg';
import fullScreen from '../assets/expand.svg';
import Tooltip from '../components/Tooltip';

const VideoPlayer: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolume, setShowVolume] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value);
    setVolumeLevel(volume);
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTime = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
      setCurrentTime(currentTime);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        videoRef.current.style.height = `${window.innerHeight}px`;
        videoRef.current.style.width = `${window.innerWidth}px`;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleVolume = () => {
    setShowVolume(!showVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div className='relative flex flex-col h-screen w-screen overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <div className={`absolute top-0 left-0 right-0 flex justify-between items-center p-4 h-982px bg-gradient-to-b from-black/70 to-transparent text-white z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex items-center'>
          <button className='mr-4' onClick={() => navigate(-1)}>
            <img src={arrowBack} alt='Voltar' className='h-12 w-12' />
          </button>
          <h1 className='text-xl font-lato font-bold'>O Menino e a Garça</h1>
        </div>
        <div></div>
      </div>

      <div className='relative flex-grow bg-transparent'>
        <video ref={videoRef} className='w-full h-full object-cover bg-transparent'
          onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}
          controls={false} muted={false}>
          <source src={trailer} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className={`absolute bottom-0 left-0 right-0 flex justify-between items-center bg-gradient-to-t from-black/70 to-transparent text-white p-4 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className='flex items-center'>
            <button className='mr-4'>
              <img src={replay} alt='Replay' className='w-8 h-8' />
            </button>
            <button onClick={handlePlayPause} className='mx-4 w-8 h-8'>
              {isPlaying ? (
                <img src={pause} alt='Pause' className='w-8 h-8' />
              ) : (
                <img src={playIcon} alt='Play' className='w-6 h-6' />
              )}
            </button>
            <button className='mr-4'>
              <img src={forward} alt="Avançar" className='w-8 h-8' />
            </button>
            <div className='flex items-center'>
              <button onClick={toggleVolume} className='mr-2'>
                <img src={volumeIcon} alt='Volume' className='h-8 w-8' />
              </button>
              {showVolume && (
                <input type='range' min='0' max='1' step='0.1'
                  value={volumeLevel} onChange={handleVolumeChange}
                  className='w-1/3' />
              )}
              <span className='text-xs font-lato'>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Tooltip text='Ajuda'>
              <button>
                <img src={helpIcon} alt='Ajuda' className='w-8 h-8' />
              </button>
            </Tooltip>
            <button>
              <img src={nextEp} alt='Próximo episódio' className='w-8 h-8' />
            </button>
            <Tooltip text='Episódios'>
              <button>
                <img src={episodes} alt='Episódios' className='w-8 h-8' />
              </button>
            </Tooltip>
            <Tooltip text='Legendas'>
              <button>
                <img src={subs} alt='Legendas' className='w-8 h-8' />
              </button>
            </Tooltip>
            <Tooltip text='Tela cheia'>
              <button>
                <img src={fullScreen} alt='Tela cheia' className='w-8 h-8' />
              </button>
            </Tooltip>
          </div>
        </div>

        <input ref={progressRef} type='range' min='0' max={duration}
          value={currentTime} onChange={handleProgressChange}
          className={`absolute bottom-20 left-0 right-0 mx-12 h-12px z-20 transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

export default VideoPlayer;
