
import { useEffect, useState } from "react";
import axios from "axios";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";




const Shop=() => {

    const [catdata,setcatdata] =useState("");
    const [displaydata,setdisplaydata] =useState(true);
    const [pricedata,setpricedata]=useState("")


  const [mydata, setmydata] = useState([]);
  const [pricemydata,setpricemydata]=useState([])
  



  const dispatch = useDispatch()

  const navigate =useNavigate();


 const loaddata=()=>{
    let api = "https://shoes-z5wd.onrender.com/product";
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

  const ans1=pricemydata.map((key)=>{
    if(pricedata==2000){
        if(key.price>0 && key.price<2000){
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
    }


    if(pricedata==4000){
        if(key.price>2000 && key.price<4001){
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
    }


    if(pricedata==5000){
        if(key.price>4000 && key.price<5001){
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
    }




    if(pricedata==6000){
        if(key.price>6000){
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
    }
  })


  const handleSubcategory=()=>{
    let api=`http://localhost:3000/product/?category=${catdata}`;
    axios.get(api).then((res)=>{
      setmydata(res.data)
      
    })
     setdisplaydata(true)  
  }

  const handlePrice=()=>{
    let api="http://localhost:3000/product";
    axios.get(api).then((res)=>{
       setpricemydata(res.data)
    })
    setdisplaydata(false)
  }

  



  return (
    <>


    <div className="shopping">
       <div>
         <h2>Search by category</h2><br/><br/>
         <input type="radio" name="cat" value="men" onChange={(e)=>{setcatdata(e.target.value)}}/>Mens shoes
         <br/>
         <input type="radio" name="cat" value="women" onChange={(e)=>{setcatdata(e.target.value)}}/>Womens shoes
         <br/>
         <input type="radio" name="cat" value="kid" onChange={(e)=>{setcatdata(e.target.value)}}/>Kids shoes
         <br/>
         <button onClick={handleSubcategory}>Search</button>
       </div>
       <br/><br/>

       <h1>search by price</h1>
       <input type="radio" name="price"  value="2000" onChange={(e)=>{setpricedata(e.target.value)}}/> Rs 2000 & below 
       <br/>
       <input type="radio" name="price"  value="4000" onChange={(e)=>{setpricedata(e.target.value)}}/> Rs 4000 & below 
       <br/>
       <input type="radio" name="price"  value="5000" onChange={(e)=>{setpricedata(e.target.value)}}/> Rs 5000 & below 
       <br/>
       <input type="radio" name="price"  value="6000" onChange={(e)=>{setpricedata(e.target.value)}}/> Rs 6000 & below 
       <br/>
       <button  onClick={handlePrice}>search</button>
    </div>


      <div >
           <h1 style={{textAlign:"center",color:"blue"}}>Shop page</h1>
      </div>

      <div id="homeProduct">
          {displaydata? ans:ans1}
      </div>

      
    </>
  );
};

export default Shop;
