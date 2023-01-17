import React from 'react'

const Footer = () => {
    return <>
        <footer className="bg-light text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">

                    <a
                        className="btn text-white btn-floating m-1"
                        
                        style={{backgroundColor: "  #3b5998"}}
                        target="_blank" 
                        rel="noreferrer"
                        href="https://www.facebook.com/rajendrasingh.rathore.923/"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                   

                    


                    <a
                        className="btn text-white btn-floating m-1"
                        
                        style={{backgroundColor: " #ac2bac"}}
                        href="https://www.instagram.com/rajendra_singh_rathore94/"
                        target="_blank" 
                        rel="noreferrer"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a
                        className="btn text-white btn-floating m-1"
                        
                        style={{backgroundColor: " #0082ca"}}
                        target="_blank" 
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/rajendra-singh-rathore-40340a160/"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{backgroundColor: "#333333"}}
                        target="_blank" 
                        rel="noreferrer"
                        href="https://github.com/Rajsa94"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>

            </div>



            <div className="text-center p-3" style={{backgroundColor: "#067ec4"}}>
                © 1994 Copyright:
                <a className="text-white" href="https://github.com/Rajsa94">Rathore94.Uda</a>
            </div>

        </footer>
    </>

}

export default Footer