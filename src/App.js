import './App.css';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <h1>Mood Tracker V2</h1>
      <Auth authView="signup"/>
    </div>
  );
}

export default App;
