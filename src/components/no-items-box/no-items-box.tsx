import React, {ReactNode} from 'react';
import './no-items-box.scss';

type Props = {
  children: ReactNode,
  className: string
};

export const NoItemsBox: React.FC<Props> = ({children, className}) => (
  <div className={`no-items-box ${className}`}>
    <h5 className='no-items-box__title'>{children}</h5>
  </div>
);
