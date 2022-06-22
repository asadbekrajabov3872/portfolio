import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'
import App from './App'
import './App.css'

import './index.css'
import { Box, OrbitControls, Sky } from '@react-three/drei'

function Scene() {
  const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
  const cubeCamera = useRef()

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene)
  })

  return (
    <>
      <Sky layers={[11]} sunPosition={[Math.PI, 0, Math.PI / 2]} turbidity={8} rayleigh={6} mieCoefficient={0.0005} mieDirectionalG={0.8} />
      <cubeCamera layers={[11]} name="cubeCamera" ref={cubeCamera} position={[0, 0, 0]} args={[0.1, 100, renderTarget]} />
      
      <Box args={[2, 2, 2]}>
        <meshPhysicalMaterial color="#f51d63" envMap={renderTarget.texture} metalness={1} roughness={0} />
      </Box>

      <OrbitControls />
      <ambientLight />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Canvas camera={{ position: [0, 0, 10], fov: 20 }}>
      <Scene />
    </Canvas>,
    <App />,
  </React.StrictMode>,
  
  document.getElementById('root')
)