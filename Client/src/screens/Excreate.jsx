import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './skill.css';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Exprience } from '../action/userAction';

const Excreate = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState('')
  const [company, setCompany] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')

  const dispatch = useDispatch()
    const  userExperience = useSelector((state)=> state.userExperience)
    const userLogin = useSelector((state)=> state.userLogin)
    const { userInfoA} = userLogin;
    const {loading, error, userInfo} =  userExperience;

    useEffect(()=>{
      if(!userInfoA){
          navigate("/")
          
         
      }
  },[navigate, userInfoA])

    useEffect(()=>{
        if(userInfo){
           
           toast.success('🦄 Form Submitted', {
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
        dispatch(Exprience(post, company, desc, date))
    }
  return <>
    <section className="vh-100 createContainer" style={{ backgroundColor: " #2779e2" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">

            <h1 className="text-white mb-4">Create exprience<Link className="btn btn-warning ms-5 btn-lg " to="/home">Go Back</Link></h1>

            <div className="card" style={{ borderRadius: "15px" }}>
            {loading && <Loading />}
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <div className="card-body">
                <form method="post" onSubmit={PostData}>

                  <div className="row align-items-center pt-4 pb-3">


                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Post</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='post' value={post} onChange={(e) => setPost(e.target.value)} />

                    </div>
                  </div>



                  <div className="row align-items-center pt-4 pb-3">


                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Company</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='company' value={company} onChange={(e) => setCompany(e.target.value)} />

                    </div>
                  </div>



                  <div className="row align-items-center pt-4 pb-3">


                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Description</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />

                    </div>
                  </div>



                  <div className="row align-items-center pt-4 pb-3">


                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Date You Work</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='date' value={date} onChange={(e) => setDate(e.target.value)} />

                    </div>
                  </div>



                  <div className="px-5 py-4">
                  <button type="submit" name='signup' value="register" className="btn btn-warning btn-lg ms-2" >Submit form</button>
                  </div>
                  </form>

              </div>
            </div>

          </div>
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
  </>
}

export default Excreate