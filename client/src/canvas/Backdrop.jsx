import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

// Define constants (if needed for clarity and manageability)
const SHADOW_SCALE = 10;
const SHADOW_ROTATION = [Math.PI / 2, 0, 0];
const SHADOW_POSITION = [0, 0, -0.14];

const Backdrop = () => {
  return (
    <AccumulativeShadows 
      temporal
      frames={60} 
      alphaTest={0.85} 
      scale={SHADOW_SCALE}
      rotation={SHADOW_ROTATION}
      position={SHADOW_POSITION}
    >
      <RandomizedLight 
        amount={4} 
        radius={9} 
        intensity={0.55} 
        ambient={0.25} 
        position={[5, 5, -10]} 
      />
      <RandomizedLight 
        amount={4} 
        radius={5} 
        intensity={0.25} 
        ambient={0.55} 
        position={[-5, 5, -9]} 
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
