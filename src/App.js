
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemCount from './components/itemCount/ItemCount';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {

  const onAdd = (contador)=>{
    alert(`La cantidad comprada es ${contador}`)
  }

  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting = "Hola, bienvenido al eCommerce de XpTech!!!!"/>
          </Route>
          <Route exact path='/detail'>
            <ItemDetailContainer/>  
          </Route>  
        </Switch> 
        <ItemCount limite={1} stock={10} onAdd={onAdd} />
        
      </div>
    </BrowserRouter>
  );
}
export default App;
