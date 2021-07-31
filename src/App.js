import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import Model from "./components/Model"
import Ground from "./components/Ground";
import Light from "./components/Light";
import Interface from "./components/Interface";

import Camera from "./components/Camera";

function App() {
  return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Canvas
            colorManagement
            style={{ background: '#191212' }}
            shadows
        >
          <Html style={{ height: '100vh', position: 'absolute', top: 0 }}>
            <Interface />
          </Html>
          <Camera />
          <Light position={[1.05, 1.86, 4.07]} />
          <Light position={[-1.25, 1.86, 4.07]} />
          <Light position={[1.33, 1.92, 3.8]} />
          <Light position={[-1.5, 1.92, 3.8]} />
          <ambientLight intensity={.25} color='white' />
          <group>
            <Suspense fallback={null}>
              <Ground />
            </Suspense>
          </group>
          {/*<LightEffects />*/}
          <Suspense fallback={null}>
            <Model
                path='/3d/KiaOptima3DModel.fbx'
                position={[0, .5, 0]}
                scale={new Array(3).fill(0.01)}
            />
          </Suspense>
        </Canvas>
      </div>
  );
}

export default App;
