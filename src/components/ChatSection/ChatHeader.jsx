import React from 'react';
import { ReactComponent as Logo } from '../../assets/qpienico.svg';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  headerContainer: {
    borderRadius: '5px',
    display: 'flex',
  },
  chatHeaderFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0px 7px',
    padding: '10px'
  },
  headerIcon: {
    backgroundColor: '#AAAAAA'
  },
  headerTitle: {
    marginLeft: '10px',
    color: 'black'
  },
  chatHeaderButton: {
    color: '#fff',
    backgroundColor: '#027DFD',
    margin: '15px',
    borderRadius: '8px',
    '&:hover':{
      cursor: 'pointer'
    }
  }
}));


const ChatHeader = ({ setAddChatStatus, addChatStatus }) => {
  const classes = useStyles();

  return(
    <div className={classes.headerContainer} style={{backgroundColor: addChatStatus ? '#fff' : '#f7f7f7'}}>
      <div className={classes.chatHeaderFlex}>
        <Logo />
        <p className={classes.headerTitle}>
          Qpien Chat
        </p>
      </div>
      <span style={{flexGrow: 1}}></span>
      <div className={`${classes.chatHeaderFlex} ${classes.chatHeaderButton}`} onClick={() => setAddChatStatus(true)}>
        <p style={{margin: 0, paddingLeft: '6px'}}>
          Qpien Chat Ekle
        </p>
        <AddIcon style={{paddingLeft: '15px'}} />
      </div>
    </div>
  )
}


export default ChatHeader;
