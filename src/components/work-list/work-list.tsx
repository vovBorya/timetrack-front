import React, {ReactNode} from 'react';
import {
  Theme,
  makeStyles,
  createStyles
} from '@material-ui/core/styles';
import {List} from '@material-ui/core';
import './work-list.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

type Props = {
  list: IWork[]
  className: string
  children: (work: IWork) => ReactNode
};

export const WorkList: React.FC<Props> = ({list, className, children}) => {

  const classes = useStyles();

  return (
    <div className={`${className} col-lg-6 col-sm-12 ${classes.root}`}>
      <List component="nav" aria-label="main mailbox folders">
        {list.map((item) => children(item))}
      </List>
    </div>
  );
};
