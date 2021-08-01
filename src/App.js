import logo from './logo.svg';
import './App.css';
import UserDetailsForm from './components/UserDetailsForm';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <UserDetailsForm />
    </div>
  );
}

export default App;
