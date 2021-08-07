import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';
// import editUser from './AddUser';
// import { getUsers, editUser } from '../Service/api';

const initialValue = {
    party_name: "",
    opening_balance: ""
    // phone: "",
    // work: "",
    // password: "",
    // balance: ""
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { party_name, opening_balance } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        console.log(response);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(id, user)
        console.log(editUserDetails);
        history.push('./all')
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='party_name' value={party_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='opening_balance' value={opening_balance} id="my-input" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Work</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='work' value={work} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Balance</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='balance' value={balance} id="my-input" />
            </FormControl> */}
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
        
    )
}

export default EditUser;