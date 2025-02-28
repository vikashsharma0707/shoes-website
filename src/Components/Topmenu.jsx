
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaShoppingCart } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdAccountCircle } from "react-icons/md";


// const Topmenu=()=>{

//      const myCart = useSelector((state)=>state.mycart.cart);
//      const datalenght = myCart.length;
//      const [searchData,setsearchdata] =useState("");
//      const navigate=useNavigate();

//      const handleSearch=()=>{
//         navigate(`productsearch/${searchData}`)
//      }


    

//     return(
//         <>
//             <Navbar expand="lg"  style={{backgroundColor:"blue"}}>
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             {/* <Nav.Link href="#cartproduct">Cartproduct</Nav.Link> */}
//             <Nav.Link as={Link} to="cartproduct">Cartproduct</Nav.Link>
//             <Nav.Link as={Link} to="searchproduct">Searchproduct</Nav.Link>
//             <Nav.Link as={Link} to="bestoffer">Best offer</Nav.Link>
//             <Nav.Link as={Link} to="shop">Shop</Nav.Link>
            
//             <NavDropdown title="product category" id="navbarScrollingDropdown">
//               <NavDropdown.Item as={Link}  to="kidscart">Kidscart</NavDropdown.Item>
//               <NavDropdown.Item as={Link}  to="womenscart">Womenscart</NavDropdown.Item>
//               <NavDropdown.Item as={Link}  to="menscart">Menscart</NavDropdown.Item>
            
               
              
//             </NavDropdown>
//             </Nav>
//             <Nav>

//               <Nav.Link>
//                  <input type="text" value={searchData}  onChange={(e)=>{setsearchdata(e.target.value)}} />
//               </Nav.Link>

//               <Nav.Link>
//               <FaSearch  onClick={handleSearch} />

//               </Nav.Link>

//               <Nav.Link>
//              <NavDropdown title={<MdAccountCircle />} id="account-dropdown">
//              <NavDropdown.Item as={Link} to="login">Login</NavDropdown.Item>
//              <NavDropdown.Item as={Link} to="registration">Registration</NavDropdown.Item>
//              <NavDropdown.Item as={Link} to="logout">Logout</NavDropdown.Item>
//              <NavDropdown.Item as={Link} to="mywishlist">Wishlist</NavDropdown.Item>
// </NavDropdown>
//             </Nav.Link>
//             <Nav.Link >
//             <FaShoppingCart  onClick={()=>{navigate("/Cartproduct")}}/>
//               {datalenght>=1? <span id="tokri">{datalenght}</span>:""}
//             </Nav.Link>

           
          
//             </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//         </>
//     )
// }

// export default Topmenu


import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import "../CSS/navbar.css" // Import custom CSS for additional styling

const Topmenu = () => {
    const myCart = useSelector((state) => state.mycart.cart);
    const datalenght = myCart.length;
    const [searchData, setsearchdata] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchData.trim()) {
            navigate(`productsearch/${searchData}`);
        }
    }

    return (
        <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">BrandName</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="cartproduct">Cart</Nav.Link>
                        <Nav.Link as={Link} to="searchproduct">Search</Nav.Link>
                        <Nav.Link as={Link} to="bestoffer">Best Offers</Nav.Link>
                        <Nav.Link as={Link} to="shop">Shop</Nav.Link>

                        <NavDropdown title="Product Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="kidscart">Kids</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="womenscart">Women</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="menscart">Men</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search..."
                            value={searchData}
                            onChange={(e) => setsearchdata(e.target.value)}
                        />
                        <button className="btn btn-outline-light" onClick={handleSearch}>
                            <FaSearch />
                        </button>

                        <NavDropdown title={<MdAccountCircle />} id="account-dropdown" className="ms-3">
                            <NavDropdown.Item as={Link} to="login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="registration">Register</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="logout">Logout</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="mywishlist">Wishlist</NavDropdown.Item>
                        </NavDropdown>

                        <div className="position-relative ms-3">
                            <FaShoppingCart onClick={() => navigate("/cartproduct")} style={{ cursor: 'pointer' }} />
                            {datalenght > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
                                    {datalenght}
                                </span>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topmenu;
