//Componentes
import FirstComponents from './components/FirstComponents'; 
import TemplateExpressions from './components/TempleteExpressions';
import MyComponents from './components/MyComponents';
import Eventos from './components/Eventos';



import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>Eventos</h1>

      <FirstComponents />
      
      <TemplateExpressions />

      <MyComponents />

      <Eventos />

    </div>
  );
}

export default App;
