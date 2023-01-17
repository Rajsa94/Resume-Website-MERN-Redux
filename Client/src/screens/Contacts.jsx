import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { contact } from '../action/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const userContact = useSelector((state)=> state.userContact)
    const {loading, error, userInfo} = userContact;

    useEffect(()=>{
        if(userInfo){
           
           toast.success('🦄 Contact Info SuccessFully Send', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            
           
        }
    },[toast, userInfo])

    const PostData = async(event)=>{
        event.preventDefault()
        dispatch(contact(name, email, phone, message))
    }
  return <>
  <div class="container-fluid conContainer">
  <div class="container">
  <section className="mb-4 ">
  <div className="expHeading">
    <h1 className='HeadingFont'>Contact us</h1>
  </div>


   

    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">
    {loading && <Loading />}
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    
      {!userInfo
      ? (
        <h1>Welcome </h1>
      ) : userInfo
      ? (
        <h1>Welcome <span className='UserEntry'>{userInfo.name} </span> ,Your Form is submitted successfully</h1>

      ) : (
        <h1>Welcome back <span>{userInfo.name} </span></h1>
      )
        
      }
    
    {/* <h1>Welcome <span>{!userInfo ? userInfo : userInfo.name} </span></h1> */}

    
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={PostData} method="POST">

           
                <div className="row">

                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                  

                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                   

                </div>
               

               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="phone" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                            <label for="subject" className="">Phone</label>
                        </div>
                    </div>
                </div>
                
                <div className="row">

                   
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <div className="text-center text-md-left">

                <button type="submit" name='signup' value="register" className="btn btn-warning btn-lg ms-2" >Submit form</button>
               
            </div>

               

            </form>
            
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>274,Near char Bhuja Temple Shobhagpura, Udaipur (Raj)</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>9982260784</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>Rathore94.uda@gmail.com</p>
                </li>
            </ul>
        </div>
     

    </div>

</section>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

</div>

</div>




  </>
}

export default Contacts