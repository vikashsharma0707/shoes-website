import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Checkout=()=>{
    const mycartdata = useSelector((state)=>state.mycart.cart);

    let totalAmout=0;
    mycartdata.map((key)=>{
     totalAmout=key.price*key.qnty
    })

    const navigate =useNavigate();

    const payDone=()=>{
        navigate("/Paymentdone")
    }



    return(
        <>
         <div id="checkout">

           <div>
              <h1>shipping Address</h1>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter pincode" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Mobiile number</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" />
      </Form.Group>

      

      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

           </div>
             
             <div>

             <h1>Payment</h1>



             <h1>Total amont : {totalAmout} </h1>
             <h1>Shipping charges: 100</h1>
             <h1>Total payable amount :{totalAmout+100}</h1>


<input type="radio" name="pay"/>cash on delivery
<br/>  <br/>
<input type="radio" name="pay"/>Debit/Credit card
<br/>  <br/>
<input type="radio" name="pay"/>UPI/Phonepe
<br/>  <br/>
<input type="radio" name="pay"/>Internet Banking
<br/>  <br/>
<input type="radio" name="pay"/>Master card
<br/>  <br/>

<button  onClick={payDone}>submit</button>




             </div>



         </div>
        </>
    )
}


export default Checkout;