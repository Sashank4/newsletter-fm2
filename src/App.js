import './App.css';

function App() {
  return (
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

        <form>
          <label>Email address</label>
          <input type='email' placeholder='email@company.com' />
          <button> Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
