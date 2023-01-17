import React, { useEffect} from 'react'
import './skill.css';
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

import { listExprience } from '../action/getDataAction';

const Experience = () => {
 
  const dispatch = useDispatch()
  const noteList = useSelector((state) => state.getExperience)
  

  const { loading, error, exprience } = noteList;

  useEffect(() => {
    dispatch(listExprience());

  }, [
    dispatch,


  ]);

  return <>
    <div className="expHeading">
      <h1 className='HeadingFont'>Experience</h1>
    </div>
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    {loading && <Loading />}
    <div class="container-md Expcontainer">

      {

        exprience?.map(note => {
          return (<div key={note._id} class="content-list mt-4 ">
            <h1 class="content-list__title">
              {note.post}
            </h1>
            <h5 class="content-list__name">
              {note.company}
            </h5>
            <h5 class="content-list__name">
              {note.desc}
            </h5>

            <div class="content-list__date">{note.date}</div>
          </div>

          )
        })
      }



    </div>



    {/* end to edcation */}
    <div className="expHeading">
      <h1 className='HeadingFont'>Education</h1>
    </div>

    <div class="container-md Expcontainer">
      <div class="content-list ">
        <h1 class="content-list__title">
          Secondary School,Rajasthan Board of Secondary Education
        </h1>
        <h5 class="content-list__name">
          Jyoti Senior Secondary School
        </h5>

        <div class="content-list__date">2010</div>
      </div>
      <br />
      <div class="content-list ">
        <h1 class="content-list__title">
          High School, Rajasthan Board of Secondary Education
        </h1>
        <h5 class="content-list__name">
          Jyoti Senior Secondary School
        </h5>
        <h5 class="content-list__name">PCM</h5>
        <div class="content-list__date">2012</div>
      </div>
      <br />
      <div class="content-list ">
        <h1 class="content-list__title">
          Bachelor's Degree , Rajasthan Technical University, Kota
        </h1>
        <h5 class="content-list__name">
          Sunrise Institute of Engineering
        </h5>

        <div class="content-list__date">2012 - 2016</div>
      </div>

    </div>






  </>
}

export default Experience