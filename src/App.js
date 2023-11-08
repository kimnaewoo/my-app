import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://image.newsis.com/2023/08/12/NISI20230812_0001339328_web.jpg'
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
