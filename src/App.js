
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  const Name= 'Louna';
  const mylink="https://pixabay.com/fr/vectors/dent-dessin-anim%C3%A9-hygi%C3%A8ne-nettoyage-1670434/";
  // const element=<h1>hello {Name}</h1>
  function greeting(name){
    return  <h1 className='name-title'>hello,<a href={mylink}>{name}</a> </h1>;
    
  }
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1 >Hi, React App</h1>
      {greeting(Name)}

      <Welcome name= "Nisreen" age="36" carieer="Dev"/>
    </div>
  );
}

export default App;
