import Form from './Components/Form';
import './App.css';
import WelcomeFc from './Components/WelcomeFc';
import Welcome from './Components/Welcome';
import Product from './Components/Product';
import Clock from './Components/Clock';
import Input from './Components/Input';

function App() {
  const Name= 'Louna';
  const mylink="https://pixabay.com/fr/vectors/dent-dessin-anim%C3%A9-hygi%C3%A8ne-nettoyage-1670434/";
  // const element=<h1>hello {Name}</h1>
  function greeting(name){
    return  <h1 className='name-title'>hello,<a href={mylink}>{name}</a> </h1>;
    
  }
  return (
    <div className="App">
      <Form />
      {/* <Input label="Saisir votre prenom" type="text" />
      <Input label="Saisir votre mot de pass" type="password" />
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
   <Clock />
      <h1 >Hi, React App</h1>
      {greeting(Name)}
      
      <WelcomeFc name= "Nisreen" age="36" carieer="Dev"/>
      <WelcomeFc name= "Abd" age="20" carieer="Dentist"/>
      <Welcome name="lalala" />
      <Product title="velo" description="pour les enfant" price="30 €" />
      <Product title="brosse" description="pour les enfant" price="25 €" />
      <Product title="chaise" description="pour les enfant" price="40 €" />
      <Product title="trotinette" description="pour les enfant" price="15 €" /> */}
    </div>
  );
}

export default App;
