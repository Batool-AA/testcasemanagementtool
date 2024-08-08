
import React, { useState } from 'react';
import '../styles/selectSuite.css'; // Import your CSS for the popup

const Popup = ({ onConfirm, onCancel, actionType }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleConfirm = () => {
    if (selectedOption) {
      onConfirm(selectedOption, actionType);
    }
  };
 
  return (
    <div className="popup-overlay">
      <div className="popup"> 
        <h3>Select an Option</h3>
        <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <div className="popup-buttons">
          <button onClick={handleConfirm} className='select-suite-confirm'>Confirm</button>
          <button onClick={onCancel} className='select-suite-cancel'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
