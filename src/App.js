import './App.css';
import Button from './lib/components/Button';

function App() {
  return (
    <div className="App">
        <Button 
          value = 'Submit'
          type = 'button'
          onClick = { () => console.log('clicked') }
          style = {{ border:'0px', background:'black', color:'white' }}
        />
    </div>
  );
}

export default App;
