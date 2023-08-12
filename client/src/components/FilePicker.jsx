import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  // Handler function for when a file is selected
  const handleFileChange = (e) => {
    // Store the selected file in the component's state
    setFile(e.target.files[0]);
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        {/* Input field for selecting files */}
        <input
          id="file-upload"
          type="file"
          accept="image/*" // Accept only image files
          onChange={handleFileChange}
        />
        {/* Label for the file input field */}
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        {/* Display the selected file's name, or a default message if no file is selected */}
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file ? file.name : 'No file selected'}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {/* Two buttons to trigger different actions on the selected file */}
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')} // Trigger the readFile function with 'logo' as an argument
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile('full')} // Trigger the readFile function with 'full' as an argument
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

// Define prop types for the component
FilePicker.propTypes = {
  file: PropTypes.object,
  setFile: PropTypes.func.isRequired,
  readFile: PropTypes.func.isRequired,
};

// Define default props in case they're not provided
FilePicker.defaultProps = {
  file: null,
};

export default FilePicker;
