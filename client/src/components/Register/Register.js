import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function validateForm() {
    return email.length > 0 && name.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("in");
    fetch("http://localhost:4000/teacher/register", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success);
        if (!data.success) 
        {
          alert("Registered successfully");
          history.push("/")
        }
        window.location.reload();
      });
  }

  let history = useHistory();

  return (
    <div className="Login">
    <h2  style={{marginBottom:"30px"}}>Sign-Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="id">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Email ID</Form.Label>
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
          Register &nbsp;<i className="fa fa-sign-in"></i>
        </Button>
      </Form>
    </div>
  );
}
