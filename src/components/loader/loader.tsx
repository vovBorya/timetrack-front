import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20,
      display: 'flex',
      justifyContent: 'center'
    },
  }),
);

export const Loader = () => (
  <div className={useStyles().root}>
    <CircularProgress/>
  </div>
);
