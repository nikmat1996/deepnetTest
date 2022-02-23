import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
// import { Route, Switch } from "react-router";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        {/* <Route path= "/" exact><Home /></Route> */}
        <Route path= "/register" ><Register /></Route>
        <Route path= "/login" ><Login /></Route>
        <Route path= "/addproduct" ><AddProduct /></Route>
        <Route path= "/viewproduct" ><ViewProduct /></Route>
      </Switch>
    </div>
  );
}

export default App;
