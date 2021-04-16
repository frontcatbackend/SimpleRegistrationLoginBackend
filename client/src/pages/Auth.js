import React, {useState} from 'react';
import {Container, Form, Button, Card, Row} from "react-bootstrap"
import {NavLink, useLocation} from 'react-router-dom'
import { registration, login } from '../http/userAPI';
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts"

const Auth = () => {
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

  const click = async () => {

    if (isLogin){
      const response = await login()
    } else {
      const response = await registration(username, password)
      console.log(response)
    }
   
  }

    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height:window.innerHeight}}
        >
           <Card style={{height:360}} className="p-5">
               <h2 className="m-auto">{isLogin ? 'Authorization' : 
               'Registration'}</h2>
           <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control
    value={username}
    onChange={e => setUsername(e.target.value)}
    type="email"
     placeholder="Enter Username"
      />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    value={password}
    onChange={e =>  setPassword(e.target.value)}
    type="password"
     placeholder="Password"
      />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>

  <Row className="d-flex justify-content-between mr-3 ">
      {isLogin ?
      <div>
          Have Not an Account?
           <NavLink to={REGISTRATION_ROUTE}><h6 
           className="d-flex justify-content-center align-items-center">
               Registration</h6>
               </NavLink> 
           </div>
           :
           <div >
               <NavLink  to={LOGIN_ROUTE}>LogIn</NavLink>
           </div>
}
  <Button
  onClick={click}
  className="ml-5"
  variant="primary" 
  type="submit">
    {isLogin ? 'Login' : 'Registrate Me!'}
  </Button>
  </Row>

</Form>
           </Card>
        </Container>
    );
};

export default Auth;