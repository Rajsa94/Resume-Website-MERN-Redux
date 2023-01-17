import React, { useEffect} from 'react'
import Loading from "../components/Loading";
import { Link } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listContact } from '../action/getDataAction';
import { useNavigate } from 'react-router-dom';

const Cdetail = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
  const noteList = useSelector((state) => state.getContact)
  const userLogin = useSelector((state) => state.userLogin);
    const { userInfoA } = userLogin;
  

  const { loading, error, contact } = noteList;

  useEffect(() => {
    dispatch(listContact());

  }, [
    dispatch,


  ]);
  useEffect(() => {
    if(!userInfoA){
        navigate('/')
    }
    
}, [userInfoA,navigate]);
    return <>
        <div class="container-fluid ContactContainer">
        
            <div class="container">
            {loading && <Loading />}
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {

contact?.map(note => {
  return ( <tr>
                            <th scope="row">{note._id}</th>
                            <td>{note.name}</td>
                            <td>{note.email}</td>
                            <td>{note.phone}</td>
                            <td>{note.message}</td>
                            <td><Link className="btn btn-warning ms-5 btn-lg " to="/home">Go Back</Link></td>
                        </tr>

  )
})
}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Cdetail