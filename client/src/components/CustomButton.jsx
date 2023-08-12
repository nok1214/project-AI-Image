import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  // Retrieve the current color from the state
  const { color } = useSnapshot(state);

  // Calculate button styles based on its type ('filled' or 'outline')
  // and the current color, using the useMemo hook for optimization
  const buttonStyle = useMemo(() => {
    if (type === 'filled') {
      return {
        backgroundColor: color,
        // Use a contrasting color for text for better readability
        color: getContrastingColor(color),
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: color,
        color: color,
      };
    }
  }, [type, color]);

  return (
    // Render the button with computed styles and additional styles passed as props
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={buttonStyle}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

// Define prop types for the component
CustomButton.propTypes = {
  type: PropTypes.oneOf(['filled', 'outline']).isRequired,
  title: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

// Define default props in case they're not provided
CustomButton.defaultProps = {
  customStyles: '',
};

export default CustomButton;
