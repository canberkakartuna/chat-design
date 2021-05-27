import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    margin: '2%',
    padding: '3px 0',
    borderRadius: '10px'
  },
  buttonLabel: {
    margin: '10px'
  },
  channelHeader: {
    marginBottom: '10px'
  },
  chosenButton: {
    color: '#fff',
    backgroundColor: '#027DFD'
  }
}));


const Channels = ({ addChatStatus }) => {
  const classes = useStyles();

  return(
    <div>
      <div className={classes.channelHeader}>
        Kanallar
      </div>
      <div className={classes.menuButton} style={{ border: addChatStatus ? '2px solid #DCDCDC' : '2px solid #F7F7F7' }}>
        <p className={classes.buttonLabel}>
          Buton
        </p>
      </div>
      <div className={classes.menuButton} style={{ border: addChatStatus ? '2px solid #DCDCDC' : '2px solid #F7F7F7' }}>
        <p className={classes.buttonLabel}>
          Buton
        </p>
      </div>
      <div className={`${classes.menuButton} ${classes.chosenButton}`} style={{ border: addChatStatus ? '2px solid #DCDCDC' : '2px solid #F7F7F7' }}>
        <p className={classes.buttonLabel}>
          Qpien Chat
        </p>
      </div>
    </div>
  )
}

export default Channels;
