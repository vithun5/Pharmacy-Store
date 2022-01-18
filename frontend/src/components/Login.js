import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Login = () => {

    const navigate =useHistory();
    const [email,setEmail] = useState('');
    const [password1, setPassword] =useState('');

    const loginUser = async (e) =>{
        e.preventDefault();

        const res = await fetch('/signin', {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password1
            })
        });

        const data = await res.json();
        console.log(data);
        if(res.status === 400 || !data ){
            window.alert('Invalid Credentials');
            console.log('Invalid Credentials');
        }
        else{
            window.alert('login Successfull');
            console.log('login Successfull');
            navigate.push('/home');
        }

    };
    return (
        <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <form className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">
                                <h2 >Hello User,</h2>
                
                                <h4 className="mb-4">Welcome to MedCure</h4>
                
                                <p> Login with your registered mail Id</p>
                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)}  />
                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                </div>
    
                                <div className="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password1} onChange={(e) => setPassword(e.target.value)} />
                                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                </div>
    
                
                
                                <button className="btn btn-primary btn-lg btn-block" type="submit" name="signin" id="sigin" value="Log In" onClick={loginUser}>Login</button>
                                <hr className="my-4" />
                                <Link to="/register">Signup</Link>
            
                
    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
 
export default Login;