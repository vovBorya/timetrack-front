import React from 'react';

type Props = {
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  disabled?: boolean
  outline?: boolean
  // @ts-ignore
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  title?: string
}

const defaultProps: Props = {
  type: 'primary',
  disabled: false,
  outline: false,
  onClick: () => {},
  title: ''
};

export const Button: React.FC<Props> = ({
                                          type,
                                          disabled,
                                          outline,
                                          title,
                                          onClick
                                        }) => (
  <button
    className={`btn btn${outline ? '-outline' : ''}-${type}`}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </button>
);

Button.defaultProps = defaultProps;
