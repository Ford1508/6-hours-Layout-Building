import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <div style={{marginLeft: "150px", height: "100%"}}>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
