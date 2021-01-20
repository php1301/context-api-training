import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeContext } from '../context/change-theme';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ children }) {
  const {state, dispatch} = useContext(ThemeContext)
  const classes = useStyles();
  const changeColor = () =>{
    dispatch({
      type: 'CHANGE',
      payload: {
        color: 'purple'
      }
    })
  }
  return (
      <>
    <div className={classes.root}>
      <AppBar style={{ background: state.color }} position="static">
        <Toolbar>
          <IconButton onClick={changeColor} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    {children}
    </>
  );
}
