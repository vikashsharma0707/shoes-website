import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Cartproduct from "./Pages/Cartproduct";
import Searchproduct from "./Pages/Searchproduct";
import Productdisplay from "./Pages/Productdisplay";
import Kidscart from "./Pages/Kidscart";
import Womenscart from "./Pages/Womenscart";
import Menscart from "./Pages/Menscart";
import Bestoffer from "./Pages/Bestoffer";
import Shop from "./Pages/Shop";
import Productsearch from "./Pages/Productsearch";
import Checkout from "./Pages/Checkout";
import Paymentdone from "./Pages/Paymentdone";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Logout from "./Components/Logout";
import Wishlist from "./Pages/Wishlisht";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>} />
            <Route path="cartproduct" element={<Cartproduct/>} />
            <Route path="searchproduct" element={<Searchproduct/>}/>
            <Route path="productdisplay" element={<Productdisplay/>}/>
            <Route path="kidscart" element={<Kidscart/>}/>
            <Route path="womenscart" element={<Womenscart/>}/>
            <Route path="menscart" element={<Menscart/>}/>
            <Route path="bestoffer" element={<Bestoffer/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="productsearch/:txtdata" element={<Productsearch/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="paymentdone" element={<Paymentdone/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="mywishlist" element={<Wishlist/>}/>
            
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
