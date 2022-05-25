import logo from './logo.svg';
import './App.css';

function App() {

  const handleSignup = async () => {
    let form = new FormData(document.querySelector("#signup-form"))
    let req = await fetch('/signup', {
      method: 'POST',
      body: form
    })
  }
  const handleLogin = async () => {
    let form = new FormData(document.querySelector("#login-form"))
    let req = await fetch('/login', {
      method: 'POST',
      body: form
    })
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form action="/signup" method="POST" id="signup-form" onSubmit={(e)=> {e.preventDefault(); handleSignup()}}>
        <input type="text" name="user[username]" placeholder="username"/>
        <input type="text" name="user[first_name]" placeholder="first name"/>
        <input type="text" name="user[last_name]" placeholder="last name"/>
        <input type="text" name="user[email]" placeholder="email"/>
        <input type="text" name="user[password]" placeholder="password"/>
        <input type="submit"/>
      </form>
      <hr />
      <form action="/login" method="POST" id="login-form" onSubmit={handleLogin}>
        <input type="text" name="email" placeholder="enter your email"/>
        <input type="text" name="password" placeholder="password"/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
