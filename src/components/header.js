import React, { useState, useContext, useEffect } from 'react';
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

  const [demo, setDemo] = useState(true)
  const classes = useStyles();
  const changeColor = () => {
    dispatch({
      type: 'CHANGE',
      payload: {
        color: 'purple'
      }
    })
  }
  // componentDidUpdate
  // Tại vì state đã đổi
  // chạy khi mỗi lần component đó bị tác động đến
  // DOM, ref (UI bị thay đổi)

  // useEffect(()=>{
  //   console.log("a")
  // })

  // componentDidMount
  // Dependencies array - nhận các variables
  // Component scope
  // effect chạy hay ko
  // Tùy thuộc vào variables
  // Có thay đổi hay ko
  // dependency rỗng, ko dựa vào ai, chỉ chạy effect 1 lần

  // useEffect(()=>{
  //   console.log("a")
  //   // setDemo(false)
  // },[])


  // componentWillMount
  // update có đk, có dependency
  // demo thay đổi thì chạy lại hàm dưới
  
  // useEffect(()=>{
  //   console.log("a da bi goi lai")
  // },[demo])


  // componentWillUnmount
  // Đảm bảo là các state cũ
  // Đã được hủy
  // Khi mà component được hủy
  // Thường xài cho các hành động
  // Cần update state liên tục
  // Như chatapp,...


  // useEffect(()=>{
  //   console.log("a")
  //   // Cleanup
  //   return () =>{
  //     // các vd
  //     // Chat.unsubscribe
  //     // loader false
  //     // xóa bỏ state
  //   }
  // })



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
