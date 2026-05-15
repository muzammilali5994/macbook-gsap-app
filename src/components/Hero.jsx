import React, { useEffect , useRef} from 'react'

const Hero = () => {
 const videoRef = useRef();
 
 useEffect(()=>{
    if(videoRef.current)
    {
        videoRef.current.playbackRate = 2;
    }
 },[]);

  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="./title.png" alt="" />
        </div>
        <video ref={videoRef} src="./videos/hero.mp4" autoPlay muted loop />

        <button>Buy Now </button>
        <p>Price Start From 1500$ </p>
    </section>
  )
}

export default Hero