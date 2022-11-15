import logo from './logo.svg';
import './App.css';
import Component_A from './components/component_A';
import { Contact } from './models/contact.class';

function App() {

  const defaultContact = new Contact("Sergio", "Rodríguez", "srodriguez@gmail.com", true)
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Component_A contact={defaultContact}></Component_A>
        
      </header>
      <body>
      
      </body>
    </div>
  );
}

export default App;
