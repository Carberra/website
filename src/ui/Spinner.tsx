import React from 'react';

import styles from '@styles/modules/Spinner.module.scss';

export type SpinnerProps = {
  className?: string;
  spinnerClassName?: string;
};

export const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div
      className={`flex justify-center items-center ${
        styles.loadingSpinnerContainer
      } rounded-sm ${props.className || ''}`}
    >
      <div className={`${props.spinnerClassName || ''}`}>
        <div
          className={`w-9 h-9 bg-brand-gradient rounded-sm ${styles.loadingSpinner}`}
        ></div>
      </div>
    </div>
  );
};
