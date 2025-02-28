import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { addqnty, delRec, subqnty } from '../cartSlice';
import { useNavigate } from 'react-router-dom';


const Cartproduct=()=>{

     const navigate = useNavigate();
    
    const mycartdata = useSelector((state)=>state.mycart.cart);
    const dispatch =useDispatch();

    const recdel=(id)=>{
         dispatch(delRec(id))
    }

    const addqt=(id)=>{
      dispatch(addqnty(id))
      console.log(id)
    
    }

    const subqt=(id)=>{
        dispatch(subqnty(id))
        console.log(id)
    }


    const checkOut=()=>{
      navigate("/Checkout")
    }

    let totalAmout=0;
    const ans = mycartdata.map((key)=>{
        totalAmout+=key.price*key.qnty
        return(
            <>
             <tr>
               <td>{key.images}</td>
               <td>{key.name}</td>
               <td>{key.discription}</td>
               <td>{key.price}</td>
              

               <td>
               <a href="#"> 
                <FaPlusCircle onClick={()=>{addqt(key.id)}} />        
               </a>                 
                   <span style={{paddingLeft:"5px", paddingRight:"5px",color:"blue", fontWeight:"bold" ,backgroundColor:"red"}}> {key.qnty}  </span> 
                             
                 
                 <a href="#">
                    < FaMinusCircle onClick={()=>{subqt(key.id)}}/>
                 </a>
                </td>
                <td> {key.price*key.qnty} </td>
               <td>
                <button onClick={()=>[recdel(key.id)]}>Delete</button>
               </td>



             </tr>


            </>
        )
    })





    return(
        <>
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>images</th>
          <th>Name</th>
          <th>Discription</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        {ans}

        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>total amount :</th>
            <th> {totalAmout}</th>
        </tr>

        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <button  onClick={checkOut}>Checkout</button>
            </th>
        </tr>

        
      </tbody>
    </Table>

        </>
    )
}

export default Cartproduct;


// import Table from 'react-bootstrap/Table';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import { addqnty, delRec, subqnty } from '../cartSlice';

// const Cartproduct = () => {
//     const mycartdata = useSelector((state) => state.mycart.cart);
//     const dispatch = useDispatch();

//     const recdel = (id) => {
//         dispatch(delRec(id));
//     }

//     const addqt = (id) => {
//         dispatch(addqnty(id));
//         console.log(id);
//     }

//     const subqt = (id) => {
//         dispatch(subqnty(id));
//         console.log(id);
//     }

//     const ans = mycartdata.map((key) => {
//         return (
//             <tr key={key.id}>
//                 <td>
//                     <img src={key.images} alt={key.name} style={{ width: '50px', height: '50px' }} />
//                 </td>
//                 <td>{key.name}</td>
//                 <td>{key.description}</td>
//                 <td>{key.price}</td>
//                 <td>
//                     <a href="#" onClick={() => addqt(key.id)}>
//                         <FaPlusCircle />
//                     </a>
//                     <span style={{ paddingLeft: "5px", paddingRight: "5px", color: "blue", fontWeight: "bold", backgroundColor: "red" }}>
//                         {key.qnty}
//                     </span>
//                     <a href="#" onClick={() => subqt(key.id)}>
//                         <FaMinusCircle />
//                     </a>
//                 </td>
//                 <td>{key.price * key.qnty}</td>
//                 <td>
//                     <button onClick={() => recdel(key.id)}>Delete</button>
//                 </td>
//             </tr>
//         );
//     });

//     return (
//         <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>Image</th>
//                     <th>Name</th>
//                     <th>Description</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Total Price</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {ans}
//             </tbody>
//         </Table>
//     );
// }

// export default Cartproduct;
