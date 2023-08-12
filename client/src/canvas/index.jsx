import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';

// Constants for configuration values
const CAMERA_CONFIG = {
  position: [0, 0, 0],
  fov: 28
};

const GL_CONFIG = {
  preserveDrawingBuffer: true
};

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={CAMERA_CONFIG}
      gl={GL_CONFIG}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {/* Ambient lighting for the scene */}
      <ambientLight intensity={0.5} />

      {/* Environment preset */}
      <Environment preset="city" />

      {/* Main camera rig for the scene */}
      <CameraRig>
        {/* Backdrop for added depth */}
        <Backdrop />

        {/* Centered shirt model */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
