import React, { useContext } from 'react';
import login from '../../../assets/undraw_Mobile_login_re_9ntv.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const {setUser, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })
    }


    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            // console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-md-1/2 w-full'>
                    <img src={login} className="w-full" />
                </div>

                <div className='w-md-1/2 w-full'>
                    <form onSubmit={handleLogin} className='w-3/4 mx-auto'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Login</button>
                        </div>
                        <div className="divider">Or login with</div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black hover:bg-white"><img className='w-5' src="https://i.ibb.co/6NYS9wJ/Google-G-Logo-svg.webp" alt="" /></button>
                        </div>
                        <p className='text-center pt-5'>Don't have an account? <Link className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700' to='/sign-up'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;