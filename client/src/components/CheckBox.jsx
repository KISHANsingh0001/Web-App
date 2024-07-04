import React, { useState } from 'react';

const CheckBox = () => {
  const [checkedItems, setCheckedItems] = useState({
    peachTherapy: false,
    occupationalTherapy: false,
    behaviouralTherapy: false,
    sensoryIntegrationTherapy: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  return (
    <div className='flex  flex-col gap-1 mt-14 '>
      <label>
        <input
          type="checkbox"
          name="peachTherapy"
          checked={checkedItems.peachTherapy}
          onChange={handleCheckboxChange}
          className='m-2'
        />
        Peach Therapy
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="occupationalTherapy"
          checked={checkedItems.occupationalTherapy}
          onChange={handleCheckboxChange}
           className='m-2'
        />
        Occupational Therapy
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="behaviouralTherapy"
          checked={checkedItems.behaviouralTherapy}
          onChange={handleCheckboxChange}
           className='m-2'
        />
        Behavioural Therapy
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="sensoryIntegrationTherapy"
          checked={checkedItems.sensoryIntegrationTherapy}
          onChange={handleCheckboxChange}
           className='m-2'
        />
        Sensory Integration Therapy
      </label>
    </div>
  );
};



export default CheckBox;
