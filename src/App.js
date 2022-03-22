
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import DefaultLayout from "./components/Layout/DefaultLayout";
import {Skills} from './components/skills/Skill';
import {Projects} from './components/projects/Projects';
import {About} from './components/about/About';
import {Contact} from './components/contact/Contact';
import {GoUp} from './components/go-up/GoUp'

const App = () => {
  return (
    <div className="wrapper">
       <div>
      <DefaultLayout>
        <Skills/>
        <Projects/>
        <About/>
        <Contact/>
        <GoUp/>
      </DefaultLayout>
    </div>

    </div>
   
  )
}

export default App;
