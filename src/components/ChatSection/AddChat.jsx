import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const useStyles = makeStyles(() => ({
  container: {
    width: '30%',
    margin: 'auto',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -55%)',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  stages: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#F7F7F7'
  },
  addChatTitle: {
    textAlign: 'center',
    color: '#027DFD',
    padding: '15px',
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0'
  },
  content: {
    padding: '25px',
  },
  contentSection: {
    marginBottom: '20px'
  },
  dot: {
    height: '22px',
    width: '22px',
    backgroundColor: '#fff',
    border: '1px solid #275279',
    borderRadius: '50%',
    margin: '0 10px',
    position: 'relative',
  },
  checkedDot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '15px',
    width: '15px',
    backgroundColor: '#027DFD',
    borderRadius: '50%',
  },
  code: {
    border: '2px solid #F7F7F7',
  },
  copyButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'gray',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    marginBottom: '10px',
  },
  copyLabel: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  backButton: {
    position: 'absolute',
    top: '17px',
    left: '17px',
    color: 'gray',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

function makeid(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
 }
 return result.join('');
}

function isUrlValid(userInput) {
  var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  var url = new RegExp(regexQuery,"i");
  return url.test(userInput);
}

const AddChat = ({ setAddChatStatus }) => {
  const classes = useStyles();
  
  const [secondStage, setSecondStage] = useState(false);
  const reference = useRef();
  const [textCopyied, setTextCopied] = useState(false);
  const [code] = useState(makeid(30));

  const [brandName, setBrandName] = useState('');
  const [brandWebsite, setBrandWebsite] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyCodeToClipboard = () => {
    var text = reference.current.innerHTML;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    setTextCopied(true);
  }

  const validateLiveSupport = () => {
    setSubmitted(true);
    if(brandName !== '' && isUrlValid(brandWebsite)){
      setSecondStage(true);
    }
  }

  const addLiveSupport = () => {
    var liveSupport = JSON.parse(localStorage.getItem('liveSupport'));

    if (!liveSupport){
      localStorage.setItem('liveSupport', JSON.stringify([{
        'brandName': brandName,
        'brandWebsite': brandWebsite,
        'code': code
      }]));
    } else {
      localStorage.setItem('liveSupport', JSON.stringify([...liveSupport, {
        'brandName': brandName,
        'brandWebsite': brandWebsite,
        'code': code
      }]));
    }

    setBrandName('');
    setBrandWebsite('');
    setAddChatStatus(false);
  }

  return (
    <div className={classes.container}>
      {
        secondStage ? (
          <div>
            <ArrowBackIosOutlinedIcon className={classes.backButton} onClick={() => setSecondStage(false)}/>
            <Typography component="h4" variant="h6" className={classes.addChatTitle}>
              Canl?? destek kodunu websitenize ekleyin
            </Typography>
          </div>
        ) : (
          <Typography component="h4" variant="h6" className={classes.addChatTitle}>Websitenize canl?? destek ekleyin</Typography>
        )
      }
      <div className={classes.stages}>
        <div className={classes.flexBox}>
          <p style={{color: '#027DFD'}}>1</p>
          <span className={classes.dot}>
            <span className={classes.checkedDot}></span>
          </span>
          <p style={{color: '#027DFD'}}>Website detaylar??</p>
        </div>
        <div className={classes.flexBox}>
          <p style={{color: secondStage ? '#027DFD' : ''}}>2</p>
          <span className={classes.dot}>
            {
              secondStage ? (
                <span className={classes.checkedDot}></span>
              ) : (
                null
              )
            }
          </span>
          <p style={{color: secondStage ? '#027DFD' : ''}}>Canl?? destek kod</p>
        </div>
      </div>
      <div className={classes.content}>
        {
          secondStage ? (
            <div className={classes.contentSection}>
              <Typography style={{color: '#275279', marginBottom: '10px'}}>Canl?? Destek Ad??</Typography>
              <div className={classes.code}>
                <p style={{marginLeft: '10px', fontSize: '0.9rem'}} ref={reference}>
                  code.qpien.com/{code}
                </p>
                <div>
                  <div className={classes.copyButton} onClick={copyCodeToClipboard}>
                    {
                      textCopyied ? (
                        <div style={{marginRight: '10px', color: '#275279'}}>Kopyaland??!</div>
                      ) : null
                    }
                    <div className={classes.copyLabel}>
                      <p style={{margin: '10px 40px'}}>
                        Kopyala
                      </p>
                      <FileCopyOutlinedIcon style={{marginRight: '10px'}} />
                    </div>
                  </div>
                </div>
              </div>
              <Typography variant='subtitle1' style={{color: '#275279', fontSize: '0.8rem'}}>Canl?? Destek kodunu websitenizin head ve body alan??na ekleyin.</Typography>
              <Typography variant='subtitle1' style={{color: '#275279', fontSize: '0.8rem'}}>kodu websitenize ekledikten sonra B??T??R diyip i??lemi sonland??rabilirsiniz.</Typography>
            </div>
          ) : (
            <>
            <div className={classes.contentSection}>
              <Typography style={{color: '#275279'}}>Canl?? Destek Ad??</Typography>
              <TextField variant="outlined" margin="dense" value={brandName} error={!brandName && submitted} helperText={(submitted && !brandName) ? "L??tfen Ge??erli Canl?? Destek Ad?? Giriniz." : ""} onChange={(e) => setBrandName(e.target.value)} fullWidth  placeholder="( ??rn: Apple, Apple Chat, Apple Web )"/>
              <Typography variant='subtitle1' style={{color: '#275279', fontSize: '0.8rem'}}>Canl?? Destek i??in bir isim verebilirsiniz</Typography>
            </div>
            <div>
              <Typography style={{color: '#275279'}}>Website</Typography>
              <TextField variant="outlined" margin="dense" value={brandWebsite} error={!isUrlValid(brandWebsite) && submitted}  helperText={(!isUrlValid(brandWebsite) && submitted) ? "L??tfen Ge??erli Website Ad?? Giriniz." : ""}  onChange={(e) => setBrandWebsite(e.target.value)} fullWidth placeholder="( ??rn: www.apple.com )"/>
              <Typography variant='subtitle1' style={{color: '#275279', fontSize: '0.8rem'}}>Canl?? Destek eklemek istedi??iniz websitesi</Typography>
            </div>
          </>
          )
        }
        <div className={classes.flexBox}>
          {
            secondStage ? (
              <Button fullWidth variant="contained"  color="secondary"  style={{color: '#fff', textTransform: 'none'}}  onClick={() => setSecondStage(false)}>
                Geri
              </Button>
            ) : (
              <Button fullWidth variant="contained" color="secondary" style={{textTransform: 'none'}} onClick={() => setAddChatStatus(false)}>
                ??ptal
              </Button>
            )
          }
          <span style={{width: '50px'}}></span>
          {
            secondStage ? (
              <Button onClick={addLiveSupport} fullWidth variant="contained" style={{backgroundColor: '#027DFD', color: '#fff', textTransform: 'none'}}>
                Bitir
              </Button>
            ) : (
              <Button fullWidth variant="contained" style={{backgroundColor: '#027DFD', color: '#fff', textTransform: 'none'}} onClick={validateLiveSupport}>
                ??leri
              </Button>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default AddChat;