
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
import CartContextProvider from './context/CartContext'



function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting = "Hola, bienvenido al eCommerce de XpTech!!!!"/>
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer greeting = "Hola, bienvenido al eCommerce de XpTech!!!!"/>
            </Route>
            <Route exact path='/item/:itemId'>
              <ItemDetailContainer/>  
            </Route>
            <Route exact path='/cart'>
              <Cart/>  
            </Route>
          </Switch> 
        </div> 
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
