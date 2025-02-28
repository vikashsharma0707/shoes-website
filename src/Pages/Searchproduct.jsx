
import { useEffect, useState } from "react";
import axios from "axios";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";





const Searchproduct = () => {

  const [val,setval ]=useState("")
  const [mydata, setmydata] = useState([]);
  const dispatch = useDispatch()


 const handleChange=(e)=>{
    setval(e.target.value)
    let api = `https://shoes-z5wd.onrender.com/product`;
    axios.get(api).then((res) => {
      setmydata(res.data);
    });
 }


 

  const Datacart=(mid,nm,des,pr,im)=>{
     dispatch(addtoCart({id:mid,name:nm,discription:des,price:pr,images:im}))
  }





  let ans=mydata.map((key)=>{

    let str =key.name;
    let status=str.includes(val);

    if(status==true){
        return(
            <>
            
            <Card style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px"}}>
          <Card.Img variant="top" src={key.images}   style={{height:"150"}}/>
          <Card.Body>
            <Card.Title  style={{color:"blue",fontSize:"15px"}}>{key.name}</Card.Title>
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

    

    return(
        <>
          <h1>This is seacrh page</h1>
          <input type="text" placeholder="search product" value={val}  onChange={handleChange}/>


          <div  className="cartdata">
            {ans}
          </div>
        </>
    )
}

export default Searchproduct;