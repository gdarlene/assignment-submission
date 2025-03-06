import React from 'react';

const GenderSelector = ({ selectedGender, onChange }) => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'prefer_not_say', label: 'Rather not say' }
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Gender</label>
      <div className="flex space-x-6">
        {genderOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center group cursor-pointer"
          >
            <div className="relative">
              <input
                type="radio"
                name="gender"
                value={option.value}
                checked={selectedGender === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only" // Hide default radio button
              />
              <div
                className={`w-5 h-5 rounded-full border-2 transition-colors duration-200
                  ${
                    selectedGender === option.value
                      ? 'border-yellow-400 bg-white'
                      : 'border-gray-300 bg-white group-hover:border-gray-400'
                  }
                `}
              >
                {selectedGender === option.value && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-yellow-400" />
                )}
              </div>
            </div>
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderSelector; 