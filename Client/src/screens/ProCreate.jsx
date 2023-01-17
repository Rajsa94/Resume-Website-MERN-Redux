import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './skill.css';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Project } from '../action/userAction';

const ProCreate = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tech, setTech] = useState('')
  const [sourceurl, setSourceurl] = useState('')
  const [previewurl, setPreviewurl] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

    const  userProject = useSelector((state)=> state.userProject)
    const userLogin = useSelector((state)=> state.userLogin)
    const { userInfoA} = userLogin;
    const {loading, error, userInfo} =  userProject;

    useEffect(()=>{
      if(!userInfoA){
          navigate("/")
          
         
      }
  },[navigate, userInfoA])

    useEffect(()=>{
        if(userInfo){
           
           toast.success('🦄 Project Form Submitted', {
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
        dispatch(Project(title, desc, tech, sourceurl, previewurl,image))
    }

  return <>
    <section className="vh-auto createContainer" style={{ backgroundColor: " purple" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">

            <h1 className="text-white mb-4">Create Projects<Link className="btn btn-warning ms-5 btn-lg " to="/home">Go Back</Link></h1>

            <div className="card" style={{ borderRadius: "15px" }}>
            {loading && <Loading />}
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <div className="card-body">
                <form method="post"  onSubmit={PostData}>

                  <div className="row align-items-center pt-4 pb-3" >
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Title</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

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

                      <h6 className="mb-0">Tech</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='tech' value={tech} onChange={(e) => setTech(e.target.value)} />

                    </div>
                  </div>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Source Url</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='sourceurl' value={sourceurl} onChange={(e) => setSourceurl(e.target.value)} />

                    </div>
                  </div>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Preview Url</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input type="text" className="form-control form-control-lg" name='previewurl' value={previewurl} onChange={(e) => setPreviewurl(e.target.value)} />

                    </div>
                  </div>



                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">

                      <h6 className="mb-0">Upload CV</h6>

                    </div>
                    <div className="col-md-9 pe-5">

                      <input className="form-control form-control-lg" id="formFileLg" type="file" name='image'   onChange={(event) => setImage(event.target.files[0])} />
                      <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file
                        size 5 MB</div>

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

export default ProCreate