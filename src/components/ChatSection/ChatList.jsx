import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo} from '../../assets/qpien1.svg';
import ChatTable from './ChatTable';

const useStyles = makeStyles((theme) => ({
  noChatContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  noChattitle: {
    fontWeight: 'bold',
    color: '#2D567C',
  },
  subTitle: {
    color: '#2D567C',
  },
  centerLogo: {
    display: 'flex',
    alignItems: 'center',
    margin: '20% 0'
  },
  text: {
    marginBottom: '200px'
  }
}));


const NoChat = () => {
  const classes = useStyles();

  const [liveSupport, setLiveSupport] = useState();

  useEffect(() => {
    var liveSupport = localStorage.getItem('liveSupport');
    console.log(liveSupport);
    setLiveSupport(JSON.parse(liveSupport));
  }, [])

  return(
    <div className={classes.noChatContainer}>
      {
        liveSupport ? (
         <ChatTable rows={liveSupport} />
        ) : (
          <div>
            <div className={classes.centerLogo}>
              <Logo style={{margin: 'auto'}}/>
            </div>
            <div className={classes.text}>
              <p className={classes.noChattitle}>Müşterilerinize çok hızlı bir destek ekibiniz olduğunu gösterin</p>
              <br/>
              <br/>
              <p className={classes.subTitle}>- Olası müşteri sorularına cevap verin.</p>
              <p className={classes.subTitle}>- Potansiyel müşterilerinizi ve siparişlerini kaçırmayın.</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default NoChat;


// (liveSupport || []).map(res => {
//   return(
//   <div>
//     {
//       JSON.stringify(res)
//     }
//     </div>
//   )
// })