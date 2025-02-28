
import { useEffect, useState } from "react";
import axios from "axios";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import spin from "../Images/spinner1.png"




const Productsearch = () => {

  const {txtdata} =useParams();
  const [mydata, setmydata] = useState([]);
  const dispatch = useDispatch()
  const [loading,setloading]=useState(true);

  const navigate =useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },1000)

    setloading(true);
  },[])


 const loaddata=()=>{
    let api = `https://shoes-z5wd.onrender.com/product`;
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
    const status = key.name.includes(txtdata)
    if(status==true){
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
    }

    
  })




  return (
    <>
      

      <div >
           <h1 style={{textAlign:"center",color:"blue"}}>Our Top Brands</h1>
      </div>

      {loading? (<img src={spin}/>):
      
      
      (<div style={{display:"flex",justifyContent:"space-between",margin:"auto",flexWrap:"wrap",margin:"auto"}}>
          {ans}
      </div>)}

     

      
    </>
  );
};

export default Productsearch;
