import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="relative z-10"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-14px font-workSans font-semibold">
          <div className="p-2 bg-white text-neutral-600 text-center h-47px rounded whitespace-nowrap">
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
