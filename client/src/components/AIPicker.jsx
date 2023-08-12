import CustomButton from './CustomButton';
import PropTypes from 'prop-types';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  // Handler function to update the prompt text in the parent component
  const handleTextChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="aipicker-container">
      {/* Textarea for the user to input their query for the AI */}
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={handleTextChange}
      />

      <div className="flex flex-wrap gap-3">
        {/* If generatingImg is true, show a disabled button indicating the AI is processing */}
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            {/* Button to request the AI to generate a logo */}
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            {/* Button to request the AI to generate a full image */}
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

// Define propTypes to enforce the component's contract
AIPicker.propTypes = {
  prompt: PropTypes.string.isRequired,
  setPrompt: PropTypes.func.isRequired,
  generatingImg: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AIPicker;
