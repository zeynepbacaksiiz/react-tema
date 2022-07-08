
import './App.css';
import {ThemeProvider} from './context/teamcontext';
import Container from './components/container';
function App() {
  return (
    <div className="App">
      <ThemeProvider> 
      {/* //asagısına yazılanlar dark olcak */}
    <Container/>
      </ThemeProvider>
    </div>
  );
}

export default App;
