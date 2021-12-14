import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// All the React Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// All the Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import CheezusScreen from "./screens/CheezusScreen";
import CouponScreen from "./screens/CouponScreen";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login">
            <Login title = "Le Fromagerie"/>  
           </Route>
          <Route exact path="/createAccount">
            <CreateAccount title = "Le Fromagerie"/>  
          </Route>
          <Route exact path="/about" component ={AboutScreen}/>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/couponszone" component={CouponScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/cheezus" component={CheezusScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
