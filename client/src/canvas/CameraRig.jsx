import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import PropTypes from 'prop-types';

import state from '../store';

// Define screen width breakpoints for layout adjustments
const BREAKPOINT = 1260;
const MOBILE_BREAKPOINT = 600;

const CameraRig = ({ children }) => {
  // Create a reference to the group element
  const group = useRef();
  // Get the current state using Valtio's snapshot feature
  const snap = useSnapshot(state);

  // Check if current window width is less than or equal to the defined breakpoints
  const isBreakpoint = window.innerWidth <= BREAKPOINT;
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  // Use `useFrame` hook from @react-three/fiber to apply logic on each frame render
  useFrame((state, delta) => {
    let targetPosition;

    // Determine camera position based on the app state and screen size
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      else if (isMobile) targetPosition = [0, 0.2, 2.5];
      else targetPosition = [-0.4, 0, 2];
    } else {
      targetPosition = isMobile ? [0, 0, 2.5] : [0, 0, 2];
    }

    // Smoothly adjust the camera position using easing function
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    // Smoothly adjust the model's rotation based on pointer position
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  // Return the group element with the provided children
  return <group ref={group}>{children}</group>;
};

// PropTypes validation for the CameraRig component
CameraRig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CameraRig;
