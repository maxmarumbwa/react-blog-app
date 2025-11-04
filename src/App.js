import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to Dojo Blog";
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <Navbar />

      </div>
    </div>
  );
}

export default App;
