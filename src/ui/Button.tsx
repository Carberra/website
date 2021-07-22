import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { loading?: boolean };

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  className = '',
  type = 'button',
}) => {
  return (
    <ButtonBase
      disabled={disabled || loading}
      className={`bg-brand-gradient text-white px-8 py-3 rounded-sm font-sans ${className}`}
      type={type}
    >
      {children}
    </ButtonBase>
  );
};
