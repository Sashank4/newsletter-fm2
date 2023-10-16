import './App.css';
import {useState} from 'react';
import Tick from './images/icon-success.svg'
function App() {

  const[email,setEmail] = useState('');
  const[thank, setThank] = useState(false);
  const[error,setError]=useState(false);

  const handleClick = () =>{
    setEmail('');
    setThank(false);
  }


  const handleSubmit = () =>{
   
    if(email) {
      setThank(true);
    }
    else{
      setError(true);
    }
  }
  return (thank)?(
   
    <div className='thanks-message'>
      <img src={Tick} alt="tick"/>
      <h1> Thanks for Subscribing</h1>
      <p>A confirmation email is sent to <span> {email}</span>. Please open it and click the button inside to confirm the subsciption</p>
      <button type='submit' onClick={() => handleClick()}>Dismiss message</button>
      
    </div>

):(
    <div className="App">
      <div className='left'></div>
      <div className='right'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='points'>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are success</li>
          <li>And much more!</li>
        </ul>

        <form onSubmit={()=>handleSubmit()}>
          <label>Email address</label>
          <input type='email' placeholder='email@company.com' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <button type='submit'> Subscribe to monthly newsletter</button>
          {error?
          <label className='error-message'>Enter valild email</label>: ""}
        </form>
      </div>

      
    </div>
  );
}

export default App;
