import React from 'react'
import {AppBar, Toolbar, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: "20px",
        fontSize: "20px"
    }
})


const Navbar = () => {

    const classes = useStyle();
  
    return (
        <>
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <Link className={classes.tabs} to="/" >Interview</Link>
                <Link className={classes.tabs} to="/all" >All User</Link>
                {/* <Link className={classes.tabs} to="/add">Add user</Link> */}
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
