import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Registration=()=>{

      const [input,setinput] =useState({});

      const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setinput(values=>({...values,[name]:value}))

      }


      const handleSubmit=(e)=>{
        let api="http://localhost:3000/account";
        axios.post(api,input).then((res)=>{
           alert("data psot")
        }).catch((err)=>{
           alert("data is not post")
        })
      }


    return(
        <>
         <h1>This is registration page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name"  value={input.name}  onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Userid</Form.Label>
      <Form.Control  type="text" placeholder="Enter userId" name="userId" value={input.userId} onChange={handleInput}/>
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" value={input.email} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>

      
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Registration;