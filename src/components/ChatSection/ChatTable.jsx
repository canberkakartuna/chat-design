import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  copyLabel: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
});

export default function ChatTable({rows, setLiveSupport}) {
  const classes = useStyles();

  const removeChat = (code) => {
    var links = JSON.parse(localStorage.getItem('liveSupport'));

    var foundIndex = links.findIndex(link => link.code === code);

    links.splice(foundIndex, 1);

    localStorage.setItem('liveSupport', JSON.stringify(links));

    setLiveSupport(links);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Canlı Destek</b></TableCell>
            <TableCell align="left"><b>Website</b></TableCell>
            <TableCell align="left"><b>Canlı Destek Kodu</b></TableCell>
            <TableCell align="left"><b>İşlem</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows || []).map((row) => (
            <TableRow key={row.code}>
              <TableCell component="th" scope="row">
                {row.brandName}
              </TableCell>
              <TableCell align="left">{row.brandWebsite}</TableCell>
              <TableCell align="left">code.qpien.com/{row.code}</TableCell>
              <TableCell align="left">
              <div className={classes.copyLabel}>
                <FileCopyOutlinedIcon style={{
                  color: '#037DFD'
                }}/>
                <p style={{
                  margin: '0 30px 0 5px',
                  color: '#037DFD'
                }}> 
                  Kopyala
                </p>
                <Button variant="contained" color="secondary" style={{
                  textTransform: 'none'
                }}>
                  Düzenle
                </Button>
                <Button variant="contained" style={{
                  backgroundColor: '#037DFD',
                  color: '#fff',
                  marginLeft: '20px',
                  textTransform: 'none'
                }} onClick={(e) => removeChat(row.code)}>
                  Kaldır
                </Button>
              </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}