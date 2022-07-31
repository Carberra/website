import Link from 'next/link';
import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  Fragment,
} from 'react';

import ButtonBase from '@mui/material/ButtonBase';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { loading?: boolean; href?: string };

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  id = '',
  className = '',
  type = 'button',
  href = '',
}) => {
  return (
    <Fragment>
      {href ? (
        <Link href="/" passHref>
          <ButtonBase
            disabled={disabled || loading}
            className={`bg-brand-gradient-hover text-white px-8 py-3 rounded-sm font-sans ${className}`}
            type={type}
            id={id}
            component="a"
          >
            {children}
          </ButtonBase>
        </Link>
      ) : (
        <ButtonBase
          disabled={disabled || loading}
          className={`bg-brand-gradient-hover text-white px-8 py-3 rounded-sm font-sans ${className}`}
          type={type}
          id={id}
        >
          {children}
        </ButtonBase>
      )}
    </Fragment>
  );
};
