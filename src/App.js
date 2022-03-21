
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './App.css';

const App = () => {
  return (
    <div>
      <Alert variant="primary">
    This is an alert—check it out!
  </Alert>
  <Button variant= "danger" className="">
    Danger
  </Button>
    </div>
  );
}

export default App;
