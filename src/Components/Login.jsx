import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const Login=()=>{

    const [uid,setuid]=useState("");
    const [pass,setpass] =useState("")

//     const navigate=useNavigate();

//     const handleSubmit=()=>{
//       let api=`http://localhost:3000/account/?userid=${uid}`;
//       axios.get(api).then((res)=>{
//         if (res.data.length >= 1) {
//             // Check if the password matches
//             if (res.data[0].password === pass) {
//                 // Save the username in localStorage
//                 window.localStorage.setItem("user", res.data[0].name);
//                 alert("Login successful");
                
//                 // Navigate to the home page
//                 navigate("/Footer");
//             } else {
//                 // If the password is incorrect
//                 alert("Invalid password");
//             }

//         }

//         else{
//             alert("invalid userid")
//         }
//     })
//     }


    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload

    const api = `http://localhost:3000/account/?userid=${uid}`;

    axios.get(api)
        .then((res) => {
            if (res.data.length >= 1) {
                // Check if the password matches
                if (res.data[0].password === pass) {
                    // Save the username in localStorage
                    window.localStorage.setItem("user", res.data[0].name);
                    alert("Login successful");
                    
                    // Navigate to the home page
                    navigate("/home");
                } else {
                    // If the password is incorrect
                    alert("Invalid password");
                }
            } else {
                // If no user is found with the given userid
                alert("Invalid userid");
            }
        })
        .catch((error) => {
            // Handle any errors that occur during the request
            console.error("There was an error!", error);
            alert("An error occurred while logging in. Please try again.");
        });
};

    return(
        <>
         <h1>This is Login page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Userid</Form.Label>
        <Form.Control type="text" placeholder="enter userid" value={uid}  onChange={(e)=>{setuid(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"  value={pass}  onChange={(e)=>{setpass(e.target.value)}}/>
      </Form.Group>

     
      <Button  onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
 }

export default Login;