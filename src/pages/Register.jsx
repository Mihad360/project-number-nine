/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Authcontext } from "../authcontext/Authprovider";
import swal from 'sweetalert';

const Register = () => {

    const {user, createuser} = useContext(Authcontext)
    const [error, setError] = useState('')
    // const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleregister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        // eslint-disable-next-line no-unused-vars
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo = form.get('photo')
        // console.log(name, email, password)
        setError('')

        if(password.length < 6){
            setError('Password must have at least 6 character')
            return
        }else if(!/^(?=.*[A-Z]).+$/.test(password)){
            setError('Password must have one Uppercase word')
            return
        }else if(!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)){
            setError('Password must have one special character')
            return
        }
        
        createuser(email, password)
        .then(result => {
            result.user.displayName = name
            result.user.photoURL = photo
           swal("Success!", "Registered Successfully", "success")
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0   shadow-2xl bg-blue-200  w-[260px] md:w-[600px]">
                        <form onSubmit={handleregister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" 
                                name="name"
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Photo URL" 
                                name="photo"
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" 
                                name="email"
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" 
                                name="password"
                                className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-red-600">
                                {
                                    error && <p>{error}</p>
                                }
                            </p>
                            <p>Already have an account? <Link className="text-black font-bold" to='/login'>Login</Link></p>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;