import React, { useEffect } from 'react'
import './skill.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action/userAction';

const Loginhome = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfoA } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
        
        // window. location. reload(true)
        
      };

 
    
  
    useEffect(() => {
        if(!userInfoA){
            navigate('/')
        }
        
    }, [userInfoA,navigate]);
    return <>
        <div className="container-fluid loginHome">
            <img src="home.jpg" alt="Snow" className="responsive"></img>

            <div className="container  loginMain">
                <Link className="btn btn-info btn-lg" to="/excreate">Create Exprience</Link>
                <Link className="btn btn-warning ms-5 btn-lg " to="/procreate">Create Project</Link>
                

            </div>
            <div className="container  loginMainB mt-1">
                <Link className="btn btn-primary btn-lg" to="/cdetaill">Contact Details</Link>
                <Link className="btn btn-danger ms-5 btn-lg " onClick={logoutHandler}>Logout</Link>

            </div>
        </div>
    </>
}

export default Loginhome