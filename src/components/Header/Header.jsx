import React from 'react';
import { ReactComponent as Logo} from '../../assets/qpien.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  container: {
    width: '83%',
    margin: 'auto',
    padding: '10px'
  }

}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#1992FD'}}>
        <div className={classes.container}>
          <Toolbar className={classes.appBar}>
            <div className={classes.logo}>
              <Logo fill="blue" width="70%"  />
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
