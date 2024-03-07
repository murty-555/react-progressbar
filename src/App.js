import { useEffect, useState } from 'react';
import './App.css';
import Progressbar from './components/Progressbar';

function App() {
  const [value, setValue] = useState(0)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setValue(prevVal => prevVal + 1)
    },100)
  },[])
  return (
    <div className='progress-bar-container'>
      <h3>Progress Bar</h3>
      <Progressbar value={value} onComplete={() => setSuccess(true)}/>
      <span>{success ? 'Complete!' : 'Loading...'}</span>
    </div>
  );
}

export default App;
