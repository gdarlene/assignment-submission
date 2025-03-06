import React, { useState } from 'react';
import GenderSelector from '../components/GenderSelector';

const ExampleUsage = () => {
  const [gender, setGender] = useState('female'); // Default to female selected

  const handleGenderChange = (value) => {
    setGender(value);
    console.log('Selected gender:', value);
  };

  return (
    <div className="p-6">
      <GenderSelector 
        selectedGender={gender} 
        onChange={handleGenderChange} 
      />
    </div>
  );
};

export default ExampleUsage; 