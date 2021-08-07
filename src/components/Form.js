import React, { useState } from 'react'
import '../index.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Form = () => {


    // const [email, setEmail] = useState('')
    const [data, setData] = useState({
        name: "",
        balance: "",
        // phone: "",
        // work: "",
        // password: "",
        // balance: ""
    })
    const history = useHistory();

    const handle = (event) => {
        const { name, value } = event.target

        setData(preInput => {
            return {
                ...preInput,
                [name]: value
            }
        })
    }


    const handleClick = (event) => {
        event.preventDefault()
        console.log(data);
        const newData = {
            party_name: data.name,
            opening_balance: data.balance
            // phone: data.phone,
            // work: data.work,
            // password: data.password,
            // balance: data.balance
        }
            console.log(newData);
        axios.post('http://localhost:9000/stock', newData)
        history.push('./all')
    }


    return (
        <div>
            <div className="signup-form" method="POST">
                <form  >
                    <h2>Log In</h2>
                    <p>Please Log In Your account!</p>
                    <hr />

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input name='name' className="form-control"  placeholder="Name" required="required"
                                value={data.party_name}
                                onChange={handle}
                            />
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input name="balance" className="form-control"  placeholder="Balance" required="required"
                                value={data.opening_balance}
                                onChange={handle}
                            />
                        </div>
                    </div>

                    {/* <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input name="phone" className="form-control" id="phone" placeholder="Phone" required="required"
                                value={data.phone}
                                onChange={handle}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input name="work" className="form-control" id="work" placeholder="Work" required="required"
                                value={data.work}
                                onChange={handle}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input name="password" className="form-control" id="password" placeholder="password" required="required"
                                value={data.password}
                                onChange={handle}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input name="balance" className="form-control" id="balance" placeholder="balance" required="required"
                                value={data.balance}
                                onChange={handle}
                            />
                        </div>
                    </div> */}

                    <div className="form-group" >
                        <button id="submit" className="btn btn-primary btn-lg" onClick={handleClick}>Submit</button>
                    </div>


                </form>
            </div>

            


        </div>
    )
}

export default Form

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

// const FormPage = () => {
// return (

// );
// };

// export default FormPage;