import React from 'react';
import './work-details.scss';
import NoItemsBox from "../no-items-box";

type Props = {
  work: IWork | undefined
};

export const WorkDetails: React.FC<Props> = ({work}) => {
  if(work === undefined) {
    return (
      <NoItemsBox className='col-lg-6 col-sm-12'>
        No work selected
      </NoItemsBox>
    );
  }
  return (
    <div className='work-details col-lg-6 col-sm-12'>
      <p>id: {work.id}</p>
      <p>hours: {work.hours}</p>
      <p>date: {work.date.toLocaleDateString()}</p>
      <p>description: {work.description}</p>
      <p>archived: {work.archived}</p>
    </div>
  );
};
