import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate

  
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  //const user = false
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={< Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/products/:category" element={<ProductList e/>}/>
        </Routes>
        <Routes>
          <Route exact path="/product/:id" element={<Product  e/>}/>
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart   e/>}/>
        </Routes>
        <Routes>
          <Route exact path="/success" element={<Success   e/>}/>
        </Routes>
        <Routes>
          <Route path="/login" element={user ? <Navigate to ="/" />: <Login e/>}/>
        </Routes>
        <Routes>
          <Route path="/register"  element={user ? <Navigate to ="/" />: <Register   e/>}/>
        </Routes>
    </Router>
  );
};

export default App;