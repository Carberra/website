import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { loading?: boolean; component?: string };

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  id = '',
  className = '',
  type = 'button',
  component = 'button',
}) => {
  return (
    <ButtonBase
      disabled={disabled || loading}
      className={`bg-brand-gradient-hover text-white px-8 py-3 rounded-sm font-sans ${className}`}
      type={type}
      id={id}
      component={component}
    >
      {children}
    </ButtonBase>
  );
};
