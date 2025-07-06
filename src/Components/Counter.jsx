import React, { useEffect, useRef, useState } from 'react';
import MusicToggle from '../functions/MusicToggle';
import bgMusic from'../Music/audio.mp3'

function Counter() {
    const [time,setTime] = useState(0)
    const [start,setStart] = useState(false)
    const [pause,setPause] = useState(false)
    const [musicOn, setMusicOn] = useState(false);
    const audioRef = useRef(null);
    const intervalRef = useRef(null)
    const PRESET_TIMES = [5, 10, 15, 25];

    useEffect(() => {
        audioRef.current = new Audio(bgMusic);
        audioRef.current.loop = true;
        return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    };
    }, []);

    useEffect(() => {
        if (start && !pause && time > 0 || musicOn ) {

            if(start && !pause && time > 0){
                intervalRef.current = setInterval(() => {
                    setTime((prev) => prev - 1);
                }, 1000);
            }
        
            if (start && !pause && time > 0 && musicOn && audioRef.current) {
                audioRef.current.play().catch(() => {});
            } else if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }

        if (time === 0) {
            setStart(false);
        }

        return () => clearInterval(intervalRef.current);
    }, [start, pause, time, musicOn]);


    const formatTime = ()=>{
        const min = String(Math.floor(time/60)).padStart(2,'0');
        const sec = String(time%60).padStart(2,'0')
        return `${min}:${sec}`
    }
     const handlePresetClick = (minutes) => {
        setTime(minutes * 60);
        setStart(true);
        setPause(false);
    };
    const handleStart =()=>{
        setStart(true)
        setPause(false)
    }

    const handlePause = ()=>{
        setPause(!pause)
    }

    const handleReset = ()=>{
        clearInterval(intervalRef.current)
        setStart(false)
        setPause(false)
        setTime(0);
    }
  return (
    <>
    <div>
        <div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
            {PRESET_TIMES.map((min) => (
            <div
                key={min}
                onClick={() => handlePresetClick(min)}
                className={`
                    px-5 py-3 bg-orange-500 text-white rounded-lg shadow-md font-semibold text-lg transition
                    hover:bg-orange-600 active:scale-95
                    ${start && !pause ? 'pointer-events-none opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                `}
            >
                {min} min
            </div>
            ))}
        </div>
            <div className="text-6xl font-mono font-extrabold text-amber-50 drop-shadow-lg mb-6">
                {formatTime()}
            </div>
            
        </div>
        <div className='flex justify-center gap-4 mb-8'>
            <button onClick={handleStart} disabled ={start && !pause} className="px-6 py-2  bg-yellow-300 text-pink-700  font-semibold rounded-full shadow-md  hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50" >Start</button>
            <button onClick={handlePause} disabled ={!start && pause} className="px-6 py-2 bg-yellow-300 text-pink-700  font-semibold rounded-full shadow-md  hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50">{pause? 'Resume':'Pause'}</button>
            <button onClick={handleReset} className="px-6 py-2 bg-yellow-300 text-pink-700 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all duration-200">Restart</button>
        </div>
        <div className="flex justify-center mb-4">
            <MusicToggle enabled={musicOn} onToggle={setMusicOn} />
        </div>
    </div>
      
      
    </>
    
  );
}

export default Counter;
