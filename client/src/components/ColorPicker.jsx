import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  // Get the current color from the state using useSnapshot
  const { color } = useSnapshot(state);

  // Handle color change events from the SketchPicker
  const handleColorChange = (colorResult) => {
    // Update the state's color with the newly selected color's hex value
    state.color = colorResult.hex;
  };

  return (
    // Position the color picker to the right of its parent container
    <div className="absolute left-full ml-3">
      {/* Render the SketchPicker component with the current color, 
           disable alpha slider, and provide the handleColorChange 
           function for color updates */}
      <SketchPicker color={color} disableAlpha onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
