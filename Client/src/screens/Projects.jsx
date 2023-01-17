import React, { useEffect} from 'react'

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

import { listProject } from '../action/getDataAction';
import { BASE_URL } from '../helper';


const Projects = () => {
  
    const dispatch = useDispatch()
    const noteList = useSelector((state) => state.getProject)
    console.log(noteList)


    const { loading, error, project } = noteList;

    useEffect(() => {
        dispatch(listProject());

    }, [
        dispatch,


    ]);
    return <>
        <div className="expHeading">
            <h1 className='HeadingFont'>Projects</h1>
        </div>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <div class="container  ProContainer">
            <div class="row">
                {

                    project?.map(note => {
                        return (<div class="col-md my-3 ">
                            <div className=" ProCard  " >
                                <img src={`${BASE_URL}/uploads/${note.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{note.title}</h4>
                                    <p className="card-text">{note.desc}</p>
                                    <h5>{note.tech}</h5>
                                    <a href={note.previewurl} target="_blank" rel="noreferrer" className="btn btn-danger">Live Preview</a>
                                    <a href={note.sourceurl}  target="_blank" rel="noreferrer" className="btn btn-success ms-0">Git Source code</a>

                                </div>
                            </div>
                        </div>

                        )
                    })
                }

                


            </div>
        </div>







    </>
}

export default Projects