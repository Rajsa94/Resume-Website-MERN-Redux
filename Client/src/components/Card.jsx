import React from 'react'
import './Card.css';

const Card = (props) => {
    return <>

        {/* <div class="col-lg ml-5 ">
            <div className="card me-auto CardMain mt-2 cardPading" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="card-text">{props.desc}</p>

                </div>
            </div>
        </div> */}
        <div class="col-sm">
            <div className="card me-auto CardMain mt-2 cardPading" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="card-text">{props.desc}</p>

                </div>
            </div>
        </div>
        {/* <div className=" cardContaMain ">
            <div className="card me-auto CardMain mt-2" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="card-text">{props.desc}</p>

                </div>
            </div>
        </div> */}


    </>
}

export default Card