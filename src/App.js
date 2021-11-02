
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd = (contador)=>{
    alert(`La cantidad comprada es ${contador}`)
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Hola, bienvenido al eCommerce de XpTech!!!!"/>
      <ItemCount limite={1} stock={10} onAdd={onAdd} />
    </div>
  );
}
export default App;
