import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";



const Productdisplay=()=>{
    
    const dispatch =useDispatch();

    const [mypro,setmypro] =useState({
        id:"",
        name:"",
        discription:"",
        price:"",
        images:"",
    })

    const location = useLocation();

    useEffect(()=>{
        setmypro({
          id:location.state.id,
          name:location.state.name,
          discription:location.state.discription,
          price:location.state.price,
          images:location.state.images
        })
    },[])





    const Datacart=(pid,nm,des,pr,im)=>{
       dispatch(addtoCart({id:pid,name:nm,discription:des,price:pr,images:im,qnty:1}))
    }

    return(
        <>
        <h1>This is product display page</h1>


          <div  id="data">
          <div style={{ width: "400px", height: "600px" }}> {/* Adjust container to match image aspect ratio */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Image description", 
              src: mypro.images, // Small image will match container dimensions
              width: 400,
              height: 600, // Height set to match 1200x1800 aspect ratio
            },
            largeImage: {
              src: mypro.images,
              width: 1200,
              height: 1800,
            },
            lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }, // Lens styling
          }}
        />
      </div>

            <div>
            {/* <div>
                <img src={mypro.images}/>
            </div> */}
            

            <h2>{mypro.name}</h2>
            <h2>{mypro.discription}</h2>
            <h2>{mypro.price}</h2>

            <button  onClick={()=>{Datacart(mypro.id,mypro.name,mypro.discription,mypro.price,mypro.images)}}>Add to cart</button>
         </div>

          </div>
        
        
        
        </>
    )
}


export default Productdisplay;