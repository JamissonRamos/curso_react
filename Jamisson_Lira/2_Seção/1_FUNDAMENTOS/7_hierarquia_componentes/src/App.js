//Componentes
import FirstComponents from './components/FirstComponents'; 
import TemplateExpressions from './components/TempleteExpressions';
import MyComponents from './components/MyComponents';



import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>Hierarquia de componentes</h1>

      <FirstComponents />
      
      <TemplateExpressions />

      <MyComponents />
    </div>
  );
}

export default App;
