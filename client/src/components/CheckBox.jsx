import React, { useState } from 'react';

const CheckBox = ({ setMode }) => {
  const [checkedItems, setCheckedItems] = useState({
    speechTherapy: false,
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
    <div className="flex flex-wrap gap-6 mt-14">
      {["speechTherapy", "occupationalTherapy", "behaviouralTherapy", "sensoryIntegrationTherapy"].map((therapy) => (
        <div key={therapy} className="flex-1 min-w-[200px]">
          <input
            type="checkbox"
            id={therapy}
            name={therapy}
            checked={checkedItems[therapy]}
            onChange={handleCheckboxChange}
            className="hidden peer"
          />
          <label
            htmlFor={therapy}
            className={`inline-flex items-center justify-between p-5 w-full bg-white border-2 border-gray-200 rounded-lg cursor-pointer shadow-md
            peer-hover:border-green-500 peer-hover:bg-green-50
            peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:text-white
            transition-all duration-200`}
          >
            <div className="block w-full text-lg font-semibold capitalize">
              {therapy.split(/(?=[A-Z])/).join(' ')} {/* Split camel case to space-separated */}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
