import './login.scss'

const Login = (props) => {
  return (
    <div className='login-container'>
      <h1 className='welcome-message'>Welcome to E-Voting</h1>
      <button className='login-button' onClick={props.connectWallet}>
        Login
      </button>
    </div>
  )
}

export default Login
