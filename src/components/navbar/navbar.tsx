import React, {useState} from 'react';
import './navbar.scss';
import {makeStyles, Theme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink} from "react-router-dom";
import {
  Menu,
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

type Props = {

}

const Navbar: React.FC<Props> = () => {

  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setMenuIsOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
            <Menu
              id="simple-menu"
              keepMounted
              open={Boolean(menuIsOpen)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to='/works'>
                  My works
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to='/archive'>
                  My archive
                </NavLink>
              </MenuItem>
            </Menu>

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Timetracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;