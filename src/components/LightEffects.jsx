import { useEffect, useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

extend({
  UnrealBloomPass,
  FXAAShader,
  EffectComposer,
  ShaderPass,
  RenderPass
})


const LightEffects = () => {
  const composer = useRef();
  const { scene, gl, size, camera } = useThree()

  useEffect(() => void composer.current.setSize(size.width, size.height)
  , [ size ])

  useFrame(() => composer.current.render(), 4)

  return (
      <effectComposer ref={composer}  args={[gl]}>
        <renderPass attachArray='passes' scene={scene} camera={camera}>
          <unrealBloomPass attachArray="passes" args={[undefined, 1.6, 1, .5]} />
          <shaderPass
            attachArray='passes'
            args={[FXAAShader]}
            material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
          />
        </renderPass>
      </effectComposer>
  )
}

export default LightEffects