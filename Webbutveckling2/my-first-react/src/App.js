import './App.css';
import myLogo from './logo.svg'
import MyButton from './components/MyButton'

function App() {
    const name = 'Lars'

    let text = `Hej ${name}`

  return (
      <section className="my-section">
        <h1>App</h1>
        <p>App View</p>
          <p>hej { name }</p>
          <p>{text}</p>
          <img src= {myLogo} alt="logo" id="my-logo"/>
            <MyButton/>
      
      </section>
  )
}

export default App
