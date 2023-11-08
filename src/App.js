import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QbO0Q6NCNVE4uxpooMpNkUrp0_pj_nnBWg&usqp=CAU'
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} className="App-logo" alt="logo" style={{borderRadius:'50%'}} />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          슈퍼 쏜 슈퍼 쏜~
        </a>
      </header>
    </div>
  );
}

export default App;
