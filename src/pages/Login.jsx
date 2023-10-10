/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useContext, useState} from 'react'
import { Authcontext } from "../authcontext/Authprovider";
import swal from 'sweetalert';

const Login = () => {

    const {user,signin, googlelogin} = useContext(Authcontext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handlegoogle = () => {
        googlelogin()
        .then(result => {
            console.log(result.user)
            // navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    

    const handlelogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password)

        setError('')

        
        if(email, password) {
            signin(email, password)
            .then(result => {
            console.log(result.user)
            swal("Success!", "Logged in Successfully", "success")
            e.target.reset()
            navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError(error.message)
            })
        }
            
        
        
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-[260px] md:w-[600px] shadow-2xl bg-blue-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-red-600 font-medium">
                                {
                                    error && <p>{error}</p>
                                }
                            </p>
                            <p>Don't have an account? <Link className="text-black font-bold" to='/register'>Please Register</Link></p>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-3">
                                <button onClick={handlegoogle} className="btn btn-primary">Google Login</button>
                            </div>
                        </form>
                        
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Login;