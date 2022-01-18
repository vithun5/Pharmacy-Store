import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';


const Signup = () => {

    const Navigate = useHistory();
    const [user,setUser] = useState({
        name: '',
        email: '',
        password1: '',
        cpassword: ''
    });
  
    let name,value;
    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({
            ...user, [name]:value
        });
    };

    const register = async (e) => {
        e.preventDefault();
        const{name, email, password1, cpassword } = user;
     

        const res = await fetch('/register' , {
            method: 'POST' ,
            headers: {
                'Content-Type' : 'application/json' 
            },
            body : JSON.stringify({
                name, email, password1, cpassword 
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data) {
            window.alert('Invalid Registration');
            console.log('Invalid Registration');
        }
        else{
            window.alert('Successfull Registration');
            console.log('Successfull Registration');
            Navigate.push('/');
        }
   
    };




    return (
        <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: '25px'}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                                        <form method= 'POST' className="mx-1 mx-md-4"  >
    
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c"  value={user.name} onChange={handleInputs} name="name" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                </div>
                                            </div>
    
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c"value={user.email} onChange={handleInputs}  name="email" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>
    
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" value={user.password1} onChange={handleInputs} name="password1" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>
    
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" value={user.cpassword} onChange={handleInputs} name="cpassword" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>
    
                     
                     
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg"onClick={register}  >Register</button>
                                            </div>
    
                                        </form>
    
                                    </div>
                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Signup;