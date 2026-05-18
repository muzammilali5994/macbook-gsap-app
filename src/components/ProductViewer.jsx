import React from 'react'
import UseMacbookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

const Productviewer = () => {

    const { color,scale,setColor,setScale} = UseMacbookStore();
  return (
    <section id="product-viewer">
        <h2>Take A Close Look</h2>

        <div className='controls'>
            <p className='info'>Macbook {scale} in Space {color}</p>
            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div 
                    onClick={() =>setColor('#abd5bd')}
                    className={clsx('bg-neutral-300', color === '#abd5bd' && 'active')}/>
                    <div 
                    onClick={() =>setColor('#2e2c2e')}
                    className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}/>
                    
                </div>
                <div className="size-control">
                    <div 
                        onClick={()=>setScale(0.06)}
                        className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >
                        <p>14"</p>
                    </div>
                    <div 
                        onClick={()=>setScale(0.08)}
                        className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >
                        <p>16"</p>
                    </div>
                </div>
            </div>
        </div>
        <Canvas
            id='canvas'
            camera={{ position: [2,1, 2], fov: 50 }}
            >
            <Macbook-14 scale={0.06} position={[-1,0,0]} />
            <OrbitControls enableZoom={false}/>
        </Canvas>
    </section>
  )
}

export default Productviewer