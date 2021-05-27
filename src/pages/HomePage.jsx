import React, {useState} from 'react';
import Channels from '../components/Channels/Channels';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChatSection from '../components/ChatSection/ChatSection';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    marginTop: '30px'
  },
  paper: {
    height: '80vh',
    borderRadius: '5px'
  },
}));

export default function HomePage() {
  
  const classes = useStyles();

  const [addChatStatus, setAddChatStatus] = useState(false);

  document.body.style.backgroundColor =  addChatStatus ? '#ECECEC' : '';

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Channels addChatStatus={addChatStatus} />
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{backgroundColor: addChatStatus ? '#ECECEC' : '#fff'}}>
            <ChatSection setAddChatStatus={setAddChatStatus} addChatStatus={addChatStatus}  />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}