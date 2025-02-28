
import { useEffect, useState } from "react";
import axios from "axios";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";




const Womenscart = () => {
  const [mydata, setmydata] = useState([]);
  const dispatch = useDispatch()

  const navigate =useNavigate();


 const loaddata=()=>{
    let api = `https://shoes-z5wd.onrender.com/?category=women`;
    axios.get(api).then((res) => {
      setmydata(res.data);
    });
 }


  useEffect(()=>{
    loaddata();
  },[])

  const Datacart=(mid,nm,des,pr,im)=>{
     dispatch(addtoCart({id:mid,name:nm,discription:des,price:pr,images:im}))
  }

  const dataSend=((key)=>{
     navigate("/Productdisplay",{state:key})
  })


  let ans=mydata.map((key)=>{
    return(
        <>
        
        <Card style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px"}}>
      <Card.Img variant="top" src={key.images}   style={{height:"150"}}/>
      <Card.Body>
        <Card.Title  style={{color:"blue",fontSize:"15px"}}  onClick={()=>{dataSend(key)}}>
          <a href="#">{key.name}</a>
          </Card.Title>
        <Card.Text>
          {key.discription}
          <h4  style={{color:"red"}}>price:{key.price}</h4>
        </Card.Text>
        <Button variant="primary"  onClick={()=>{Datacart(key.id,key.name,key.discription,key.price,key.images)}}>Add to cart</Button>
      </Card.Body>
    </Card>
        </>
    )
  })




  return (
    <>
      

      <div >
           <h1 style={{textAlign:"center",color:"blue"}}>Women products</h1>
      </div>

      <div style={{display:"flex",justifyContent:"space-between",margin:"auto",flexWrap:"wrap",margin:"auto"}}>
          {ans}
      </div>
    </>
  );
};

export default Womenscart;
