import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("in")
    fetch('http://localhost:4000/teacher/login',{method:'POST',body:JSON.stringify({email:email,password:password}),headers: {
        'Accept': 'application/json','Content-Type': 'application/json'}}).then((response)=>response.json()).then((data)=>{
          console.log(data);
          if(!data.success)
          alert('No Such User found')
          else
          {
            window.localStorage.setItem("teacher_id",data.teacher_id)
            history.push('/login/classes')
          }
      })
  }

  let history = useHistory();

  return (
    <div className="Login"  style={{marginTop:"175px" , backgroundColor:"#7D5A50"}}>
      <h2  style={{marginBottom:"30px"}}>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="id">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login &nbsp;<i className="fa fa-sign-in"></i>
        </Button>
      </Form>
    </div>
  );
}