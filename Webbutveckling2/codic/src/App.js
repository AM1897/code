
import NavBar from './components/navbar/Navbar'
import Main from './components/main/Main';

function App() {
  return (
      <>
          <NavBar/>
          <Main/>
          <h1>App</h1>
        <h2>Something</h2>
        <button className='primary-button'>Primary</button>
        <button className='secondary-button'>Secondary</button>

      </>

  );
}

export default App;