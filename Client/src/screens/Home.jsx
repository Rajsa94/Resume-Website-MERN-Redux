import React from 'react'
import './home.css';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const userLogin = useSelector((state)=> state.userLogin)
    const { userInfoA} = userLogin;
    return (
        <>
            <div className="mainCon ">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm">
                            <div className="text-center textDecor">
                                <h4>I AM</h4>
                                <br />


                                <span className='NameHeader'>Rajendra</span>
                                <span className='NameHeader'> Singh </span>
                                <span className='NameHeader'>Rathore</span>
                                <br />
                                <br />


                                <h4>FULL STACK MERN WEB DEVELOPER</h4>


                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="text-center ">
                                <img src="raj.png" className="imageMain" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
      
            <section>
                <div class="contentA">
                    <h2>About</h2>
                    <h2>About</h2>
                </div>
            </section>
       
            <div className="about">
            <img src="tree.jpg" alt="Snow" className="responsive"></img>

                
                <div class="container aboutcontainer">
                    <h1>My name is <span className='Nametag'>Rajendran Singh Rathore</span> , I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from India.</h1>

                    <h1>I love working on new and exciting technologies emerging nowadays. I have good Knowledge as a MERN Stack Developer. I Have Created Many Projects</h1>
                </div>


            </div>
           
        </>

    )
}

export default Home