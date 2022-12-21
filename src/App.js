import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainers';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
