import { Route,Switch,Redirect } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar'
import ProductList from './Components/ProductList/ProductList'
import Default from './Components/DefaultPage/Default'
import Details from './Components/DetailsPage/Details'
import Cart from './Components/Cart/Cart'
import Modal from './Components/Modal/Modal';
import ReactDom from 'react-dom';
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Redirect from='/home' to='/'/>
        <Route component={Default}/>
      </Switch>
      {ReactDom.createPortal(<Modal/>,document.getElementById('modal'))}
      
    </>
  );
}

export default App;
