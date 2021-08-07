import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Menu, MenuItem, Select, InputLabel } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CustomizedDialogs from './Dialog'
import { deleteUser, getUsers } from '../Service/api'
import { Link } from 'react-router-dom';
import Form from './Form'


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {

    const [users, setUsers] = useState([])
    const [show, setShow] = useState('')
    const classes = useStyles();
    // const {_id, party_name , opening_balance} = users

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const dropMenu = (value ) => {
        setShow(value)
    }

    return (
        <>
         {/* dropdown button */}
         <div className="field"> 
         <h1 className="input">Select Name</h1>
                <Select style={{ margin: '20px 100px', width: '200px' }}>
                    {users.map((user) =>
                        <MenuItem value={user.party_name} onClick={(value) => dropMenu(user)}>{user.party_name}</MenuItem>
                    )}
                    
                </Select>      
                <h1 className="input" style={{ margin: '20px 100px', width: '350px' }}> {show.party_name}</h1>
                <h1 className="input" style={{ margin: '20px 100px', width: '350px' }}> {show.opening_balance}</h1>
            </div>


            <h1 className="App">{<CustomizedDialogs >
                <Form />
            </CustomizedDialogs>}</h1>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        {/* <TableCell>Name</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Work</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Balance</TableCell> */}
                        <TableCell>Party Name</TableCell>
                        <TableCell>Opening Balance</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow className={classes.row} key={user.id}>
                            {/* <TableCell>{user.name}</TableCell> 
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.work}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.balance}</TableCell> */}
                            <TableCell>{user.party_name}</TableCell>
                            <TableCell>{user.opening_balance}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" style={{ marginRight: 10 }} onClick={(value) => deleteUserData(user._id)}>Delete</Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

           
        </>
    )
}

export default AllUsers
