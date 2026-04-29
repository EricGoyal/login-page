import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from './images/Logo.png';
import './style.css';

function App() {
  return (
  <div className='main'>
    <div className="bg-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <div className="glass-container">
        <div className="login-header">
            <img src={Logo} width={130} alt="login" />
            <h1>Welcome To Fusionuks</h1>
            <p>Sign in to your account to continue</p>
        </div>

        <form id="loginForm">
            <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username or Email" id="username" required />
            </div>

            <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" id="password" required />
            </div>

            <div className="remember-forgot">
                <label className="remember">
                    <input type="checkbox" id="remember" />
                    <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Sign In</button>

            <div className="divider">
                <span>Or continue with</span>
            </div>

            <div className="social-login">
                <div className="social-btn" title="Sign in with Google">
                    <i className="fab fa-google"></i>
                </div>
                <div className="social-btn" title="Sign in with Facebook">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-btn" title="Sign in with Twitter">
                    <i className="fab fa-twitter"></i>
                </div>
            </div>

            <p className="register-link">
                Don't have an account?
                <a href="/login">Sign up</a>
            </p>
        </form>
    </div>

  
 <div className="browser-notice" id="browserNotice">
        For the best experience, please use a modern browser that supports backdrop-filter.
    </div>
    </div>
  );
}

export default App;
