//styles
import './styles/App.css';
//components
import Sidebar from './components/sidebar';
import AppBody from './components/appBody';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AppBody />
    </div>
  );
}

export default App;
