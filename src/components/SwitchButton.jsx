import { useState } from 'react';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-2 ">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggle" className="sr-only" checked={isChecked} onChange={toggleSwitch} />
          <div className="block bg-gray-600 w-14 h-7 rounded-full"></div>
          <div className={`absolute left-1 top-1 bg-white w-6 h-5 rounded-full transition ${isChecked ? 'translate-x-full' : 'translate-x-0'}`}></div>
        </div>
      </label>
    </div>
  );
};

export default SwitchButton;