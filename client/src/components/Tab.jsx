import PropTypes from 'prop-types';
import { useSnapshot } from 'valtio';
import state from '../store';

const Tab = ({
  tab: { name, icon },
  isFilterTab,
  isActiveTab,
  handleClick,
}) => {
  // Get the current snapshot of the application's state
  const snap = useSnapshot(state);

  // Default styles for the tab
  const baseStyles = {
    backgroundColor: 'transparent',
    opacity: 1,
  };

  // Styles to be applied when the tab is active
  const activeStyles = {
    backgroundColor: snap.color,
    opacity: 0.5,
  };

  // Determine the appropriate styles based on whether the tab is a filter and if it's active
  const styles = isFilterTab && isActiveTab ? activeStyles : baseStyles;

  // Dynamically determine container classes based on whether the tab is a filter
  const containerClass = isFilterTab
    ? 'tab-btn rounded-full glassmorhism'
    : 'tab-btn rounded-4';

  // Dynamically determine image classes based on whether the tab is a filter
  const imageClass = isFilterTab
    ? 'w-2/3 h-2/3'
    : 'w-11/12 h-11/12 object-contain';

  return (
    // Render the tab container with the appropriate styles and classes
    <div className={containerClass} onClick={handleClick} style={styles}>
      {/* Display the tab's icon */}
      <img src={icon} alt={name} className={imageClass} />
    </div>
  );
};

// Define prop types to ensure correct usage of the component
Tab.propTypes = {
  tab: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isFilterTab: PropTypes.bool, // Flag to indicate if the tab acts as a filter
  isActiveTab: PropTypes.bool, // Flag to indicate if the tab is currently active
  handleClick: PropTypes.func.isRequired, // Callback function when the tab is clicked
};

// Set default values for optional props
Tab.defaultProps = {
  isFilterTab: false,
  isActiveTab: false,
};

export default Tab;
