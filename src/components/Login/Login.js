import './Login.css'

const Login = () => {
    return(
        <div className='backgroundLogin'>
            <div className='Login-dados'>
                <h1>Login</h1>
                <input placeholder='UserName' type='email'></input>
                <input placeholder='Passaword' type='password'></input>
                <a>Esqueceu a senha?</a>
            </div>

            <button className='Botao-login'>Login</button>
            <button className='Botao-signup'>Signup</button>

        </div>
    )
}

export default Login