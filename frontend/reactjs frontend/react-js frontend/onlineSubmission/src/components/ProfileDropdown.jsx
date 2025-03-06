import React, { useState, useRef, useEffect } from 'react';

const ProfileDropdown = ({ username = 'Louis Calton' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {/* Language indicator */}
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="ml-1 text-sm text-gray-600">ENG</span>
            </div>
            
            {/* Profile Avatar */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-200 rounded-md flex items-center justify-center">
                <span className="text-blue-600 font-medium">
                  {username.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="font-medium">{username}</span>
            </div>
          </div>
          
          {/* Dropdown Arrow */}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="font-medium">{username}</p>
          </div>
          
          <a
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Profile
          </a>
          
          <a
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Settings
          </a>
          
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown; 