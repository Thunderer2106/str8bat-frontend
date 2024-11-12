import React from 'react';
import { Button } from 'antd'; 

const Buttons = ({ func }) => {
  return (
    <Button
      onClick={func}
      type="default"
      className="flex items-center justify-center py-2 px-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold shadow-md transform transition-all duration-200 ease-in-out hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus:outline-none"
    >
      <i className="fas fa-sign-out-alt "></i> Sign Out
    </Button>
  );
};

export default Buttons;
