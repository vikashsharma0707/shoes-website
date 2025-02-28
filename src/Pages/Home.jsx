// import Carousel from "react-bootstrap/Carousel";
// import i1 from "../Images/ii1.jpg";
// import i2 from "../Images/i2.jpg";
// import i3 from "../Images/i3.jpg";
// import i4 from "../Images/i4.jpg";
// import { useEffect, useState } from "react";
// import axios from "axios";


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch } from "react-redux";
// import { addtoCart } from "../cartSlice";
// import { useNavigate } from "react-router-dom";




// const Home = () => {
//   const [mydata, setmydata] = useState([]);
//   const dispatch = useDispatch()

//   const navigate =useNavigate();


//  const loaddata=()=>{
//     let api = "http://localhost:3000/product";
//     axios.get(api).then((res) => {
//       setmydata(res.data);
//     });
//  }


//   useEffect(()=>{
//     loaddata();
//   },[])

  
//   const Datacart=(mid,nm,des,pr,im)=>{
//     dispatch(addtoCart({id:mid,name:nm,discription:des,price:pr,images:im}))
//  }
 

//   const dataSend=((key)=>{
//      navigate("/Productdisplay",{state:key})
//   })


//   let ans=mydata.map((key)=>{
//     return(
//         <>
        
//         <Card style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px"}}>
//       <Card.Img variant="top" src={key.images}   style={{height:"150"}}/>
//       <Card.Body>
//         <Card.Title  style={{color:"blue",fontSize:"15px"}}  onClick={()=>{dataSend(key)}}>
//           <a href="#">{key.name}</a>
//           </Card.Title>
//         <Card.Text>
//           {key.discription}
//           <h4  style={{color:"red"}}>price:{key.price}</h4>
//         </Card.Text>
//         <Button variant="primary"  onClick={()=>{Datacart(key.id,key.name,key.discription,key.price,key.images)}}>Add to cart</Button>
       
//       </Card.Body>
//     </Card>
//         </>
//     )
//   })




//   return (
//     <>
//       <Carousel>
//         <Carousel.Item>
//           <img src={i1} style={{ width: "100%", height: "600px" }} />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={i2} style={{ width: "100%", height: "600px" }} />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={i3} style={{ width: "100%", height: "600px" }} />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={i4} style={{ width: "100%", height: "600px" }} />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <div >
//            <h1 style={{textAlign:"center",color:"blue"}}>Our Top Brands</h1>
//       </div>

//       <div style={{display:"flex",justifyContent:"space-between",margin:"auto",flexWrap:"wrap",margin:"auto"}}>
//           {ans}
//       </div>
//     </>
//   );
// };

// export default Home;

import Carousel from "react-bootstrap/Carousel";
import i1 from "../Images/ii1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";
import i4 from "../Images/i4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css"; // Import custom CSS for styling

const Home = () => {
  const [mydata, setmydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loaddata = () => {
    let api = "https://shoes-z5wd.onrender.com/product";
    axios.get(api).then((res) => {
      setmydata(res.data);
    });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const Datacart = (mid, nm, des, pr, im) => {
    dispatch(addtoCart({ id: mid, name: nm, discription: des, price: pr, images: im }));
  };

  const dataSend = (key) => {
    navigate("/Productdisplay", { state: key });
  };

  let ans = mydata.map((key) => (
    <Card className="product-card" key={key.id}>
        <Card.Img variant="top" src={key.images} className="product-image" />
        <Card.Body>
            <Card.Title className="product-title" onClick={() => { dataSend(key); }}>
                <a href="#">{key.name}</a>
            </Card.Title>
            <Card.Text>
                {key.discription}
                <h4 className="product-price">Price: {key.price}</h4>
            </Card.Text>
            <Button variant="primary" onClick={() => { Datacart(key.id, key.name, key.discription, key.price, key.images); }}>Add to cart</Button>
        </Card.Body>
    </Card>
));


  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img src={i1} className="d-block w-100 carousel-image" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={i2} className="d-block w-100 carousel-image" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={i3} className="d-block w-100 carousel-image" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={i4} className="d-block w-100 carousel-image" alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div >
        <h1 className="text-center text-primary">Our Top Brands</h1>
      </div>

      <div className="product-container">
        {ans}
      </div>
    </>
  );
};

export default Home;
