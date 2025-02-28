import Table from "react-bootstrap/Table";
import {  useSelector } from "react-redux";


const Wishlist = () => {
  

  const mycartdata = useSelector((state) => state.mycart.cart);
  

  const ans = mycartdata.map((key) => {
    return (
      <>
        
          {key.images}
          {key.name}
          {key.discription}
          {key.price}
        
      </>
    );
  });

  return (
    <>
      
            
          
        {ans}
      
    </>
  );
};

export default Wishlist;
