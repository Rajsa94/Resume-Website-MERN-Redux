import React from 'react'


import './home.css';

import Card from "../components/Card"

const Skill = () => {
  return <>
    <section className='WaveContainer' >
      <div class="content">
        <h2>Skill</h2>
        <h2>Skill</h2>
      </div>
    </section>


    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <Card title="Web Design" desc="I love designs and it's the first step before creating any website as I can give layout to my imagination." />
          <Card title="Web Development" desc="I am a Full Stack Web Developer (MERN) and have quite some experience in it as well." />
          <Card title="Problem Solving" desc="I love solving problems whether programming problems or real life problems." />

        </div>

      </div>

    </div>
    {/* <div class="container">
      <div class="row">
      <Card title="Web Design" desc="I love designs and it's the first step before creating any website as I can give layout to my imagination." />
      <Card title="Web Development" desc="I am a Full Stack Web Developer (MERN) and have quite some experience in it as well." />
      <Card title="Problem Solving" desc="I love solving problems whether programming problems or real life problems." />
        
      </div>
    </div> */}



    {/* <div className="cardContainer  mt-2">

      <Card title="Web Design" desc="I love designs and it's the first step before creating any website as I can give layout to my imagination." />
      <Card title="Web Development" desc="I am a Full Stack Web Developer (MERN) and have quite some experience in it as well." />
      <Card title="Problem Solving" desc="I love solving problems whether programming problems or real life problems." />



    </div> */}
    <br />
    <br />
    <br />
    <div className="SkillContainerB">


      <div class=" aboutcontainerB">
        <div class="container mx-5">
          <div class="row">
            <div class="col-sm IconDivB">
              <h5>MARKUP/STYLING LANGUAGE</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i className="fa-brands fa-html5 me-5" style={{ color: "orange" }} ></i></h1>
                <h1><i className="fa-brands fa-css3-alt" style={{ color: "blue" }} ></i></h1>
              </div>
              <h5 className='Border'>HTML/ CSS</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5>CSS FRAMEWORK</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-bootstrap" style={{ color: "purple" }}></i></h1>

              </div>
              <h5 className='Border'>BOOTSTRAP</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5>FRONT-END LANGUAGE</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-js" style={{ color: "yellow" }}></i></h1>

              </div>
              <h5 className='Border'>JAVA SCRIPT</h5>



            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm IconDivB">
              <h5>JAVASCRIPT FRAMEWORK</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-react"></i></h1>

              </div>
              <h5 className='Border'>REACT JS</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5>PACKAGE MANAGER</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-npm" style={{ color: "red" }}></i></h1>

              </div>
              <h5 className='Border'>NPM</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5>DATABASE MANAGEMENT</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-envira" style={{ color: "green" }}></i></h1>

              </div>
              <h5 className='Border'>MONGO DB
                (NO SQL)</h5>



            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm IconDivB">
              <h5>VERSION CONTROL</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-git-alt" style={{ color: "red" }}></i></h1>

              </div>
              <h5 className='Border'>GIT</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5> Backend JavaScript </h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-brands fa-node" style={{ color: "green" }}></i></h1>
                

              </div>
              <h5 className='Border'>NodeJS/ExpressJs</h5>



            </div>
            <div class="col-sm IconDivB">
              <h5>MS OFFICE</h5>
              <div className="logo d-flex justify-content-center ">
                <h1 ><i class="fa-solid fa-file-excel" style={{ color: "green" }}></i></h1>

              </div>
              <h5 className='Border'>EXCEL</h5>



            </div>

          </div>
        </div>
      </div>

    </div>




  </>
}

export default Skill