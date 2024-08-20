
import React, { useState } from 'react';

const CheckBox = ({ setMode }) => {
  const [checkedItems, setCheckedItems] = useState({
    peachTherapy: false,
    occupationalTherapy: false,
    behaviouralTherapy: false,
    sensoryIntegrationTherapy: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
    if (checked) {
      setMode(name); // Set the mode to the checked item
    }
  };

  return (
    <div className='flex flex-col gap-1 mt-14 '>
      {["SpeechTherapy", "occupationalTherapy", "behaviouralTherapy", "sensoryIntegrationTherapy"].map((therapy) => (
        <label key={therapy}>
          <input
            type="checkbox"
            name={therapy}
            checked={checkedItems[therapy]}
            onChange={handleCheckboxChange}
            className='m-2'
          />
          {therapy.split(/(?=[A-Z])/).join(' ')} {/* Split camel case to space-separated */}
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
