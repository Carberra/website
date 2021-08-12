import React from 'react';

import '@styles/loader.scss';

export type SpinnerProps = {
  className?: string;
};

export const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className="">
      <div className="w-9 h-9 bg-brand-gradient rounded-sm loading-spinner"></div>
    </div>
  );
};
