import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface Props {
  children: ReactNode;
  addedToCart: boolean;
}

export const Button: FC<Props> = ({ children, addedToCart }) => {
  const classes = classNames('button', {
    'button--added-to-cart': true || addedToCart,
  });

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
};
