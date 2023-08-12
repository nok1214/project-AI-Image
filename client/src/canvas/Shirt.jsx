import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  // Get the current state of the store using Valtio's snapshot feature
  const snap = useSnapshot(state);

  // Destructure relevant properties from the state snapshot
  const { logoDecal, fullDecal, isFullTexture, isLogoTexture, color } = snap;

  // Load the 3D model and its associated materials from a GLTF file
  const { nodes, materials } = useGLTF('./shirt_baked.glb');

  // Load textures for decals from the state
  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  // Use `useFrame` hook to smoothly transition shirt color using easing function on each frame render
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, color, 0.25, delta)
  );

  // Generate a unique key for the group based on the state snapshot to trigger a re-render when the state changes
  const stateString = React.useMemo(() => JSON.stringify(snap), [snap]);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {/* Render full shirt texture if `isFullTexture` is true */}
        {isFullTexture && (
          <Decal position={[0, 0, 0]} scale={1} map={fullTexture} />
        )}

        {/* Render logo on shirt if `isLogoTexture` is true */}
        {isLogoTexture && (
          <Decal
            position={[-0.02, 0.02, 0.12]}
            scale={0.2}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
