// import React, { useRef, useState, useEffect, useContext } from "react";
import "./Login.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
// import { reduxForm, Field } from "redux-form";
// import { connect } from "react-redux";
// import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
// import LoginValidation from "../../validations/LoginValidation";

// const renderField = ({
//   input,
//   type,
//   placeholder,
//   label,
//   disabled,
//   readOnly,
//   meta: { touched, error, warning },
// }) => (
//   <Row>
//     <Col md="12">
//       <Label htmlFor="{input}" className="col-form-label">
//         {label}
//       </Label>
//     </Col>
//     <Col md="12">
//       <Input
//         {...input}
//         type={type}
//         placeholder={placeholder}
//         disabled={disabled}
//         readOnly={readOnly}
//       ></Input>
//       {touched &&
//         ((error && <p style={{ color: "red" }}>{error}</p>) ||
//           (warning && <p style={{ color: "brown" }}>{warning}</p>))}
//     </Col>
//   </Row>
// );



// class Login extends Component {
//   render() {
//     return (
//         <div className="containerLogin">
//             <div className="form-box">
//                 <div className="header-form">
//                     {/* <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4> */}
//                     {/* <div className="image">
//                     </div> */}
//                     <h3 className="text-primary text-center">Login</h3>
//                 </div>
//                 <div className="body-form">
//                     <form onSubmit={this.props.handleSubmit}>
//                         <div className="input-group mb-3">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"><i class="fa fa-user"></i></span>
//                             </div>
//                             <input type="text" className="form-control" placeholder="Username" />
//                         </div>
//                         <div className="input-group mb-3">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"><i class="fa fa-lock"></i></span>
//                             </div>
//                             <input type="password" className="form-control" placeholder="Password" />
//                         </div>
//                         <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
//                         <div className="message">
//                             <div><input type="checkbox" /> Remember ME</div>
//                             <div><a href="#">Forgot your password</a></div>
//                         </div>
//                     </form>
//                     {/* <div className="social">
//                         <a href="#"><i className="fab fa-facebook"></i></a>
//                         <a href="#"><i className="fab fa-twitter-square"></i></a>
//                         <a href="#"><i className="fab fa-google"></i></a>
//                     </div> */}
//                 </div>
//             </div>
//        </div>   
//     );
//   }
// }

// Login = reduxForm({
//   form: "formLogin",
//   validate: LoginValidation,
//   enableReinitialize: false,
// })(Login);
// export default connect(mapStateToProps, null)(Login);

import React, { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "../../actions/authProvider";

import axios from 'axios';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const LOGIN_URL = 'https://vitour-backend.herokuapp.com/api/login';

// const mapStateToProps = (state) => {
//   return {
//     initialValues : {
//       isLogin : state.login.getResponDataLogin.success,
//     }
//   };
// };

// var isLogin = false;

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const token = response?.data?.data.token;
            // const roles = response?.data?.roles;
            sessionStorage.setItem('token', token);
            console.log(token);
            console.log(email);
            // console.log(password);
            // setAuth({ email, password, token });
            setEmail('');
            setPassword('');
            setSuccess(true);
            history.push("/");
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
           
                <div className="containerLogin">
                  <div className="form-box">
                    <div className="body-form">
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                      <h1>Sign In</h1>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor="username">Username:</label>
                          <input
                              className="form-control"
                              type="text"
                              id="user"
                              ref={emailRef}
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              required
                          />

                          <label htmlFor="password">Password:</label>
                          <input
                              className="form-control"
                              type="password"
                              id="password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              required
                          />
                          <button className="btn btn-secondary btn-block">Login</button>
                      </form>
                    </div>
                  </div>
                  
                    
                </div>
                
            
        </>
    )
}

export default (Login)