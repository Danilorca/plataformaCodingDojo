import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete'

const Home = () => {

  const {id} =useParams()
  const [autores, setAutores] = useState();

  useEffect(() => {
    getAllAutores ()
  }, []);

  const getAllAutores = async () =>{
    const response = await simpleGet('http://localhost:8080/api/autores')
    console.log(response.data.Autores)
    setAutores(response.data.Autores)
  }

  const eliminarAutor = async(id) =>{
    const response = await simpleDelete(`http://localhost:8080/api/autores/${id}`)
    console.log(response.data)
    setAutores(autores.filter((autor)=>autor._id!==id))
  }


  return (
    <div>
      <div className='areaPrimary'>
        <h2> Favorite authors</h2>
        <Link to={'/new'} className='btn btn-primary'>Add an author</Link>
      </div>

      <h3>We have quotes by:</h3>
      <table className='table table-bordered '>
        <thead>
            <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
        { autores?.map((autor) =>
            <tr key= {autor._id}>
                <td > {autor.name}</td>
                <td>
                  <Link to={`/edit/${autor._id}`} className='btn btn-warning' >Edit</Link>
                  <button className='btn btn-danger' onClick={()=>eliminarAutor(autor._id)}>Delete</button>
                </td>
            </tr>
            )}
        </tbody>
    </table>

    </div>
  );
}

export default Home;


/* {
  travels?.map(travel => (
      <tr key={travel._id}>
          <td>{travel.packageName}</td>
          <td>{travel.origin}</td>
          <td>{(travel.destination)}</td>
          <td>${travel.price}</td>
          <td>{moment(travel.arrive_date).format('DD-MM-YYYY')}</td>
          <td>
              <Button variant="danger" className="action-btn" onClick={() => removeTravel(travel._id)} >Eliminar</Button>
              <Button variant="info" className="action-btn" onClick={() => redirectToForm(travel._id)} >Editar</Button>
          </td>
      </tr>
  ))
} */


/* {
  autores?map(autor =>(
    <tr>
      <td> {autor.name}</td>
      <td>
        <Button> Edit</Button>
        <Button> Delete </Button>
      </td>
    </tr>
  ))
} */

/* {<Table striped bordered hover>
      <thead>
        <tr>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        autores?.map(autor => (
            <tr key={autor._id}>
                <td>{autor.name}</td>
                <td>
                    <Button variant="warning" className="action-btn" >Editar</Button>
                    <Button variant="danger" className="action-btn" >Eliminar</Button>
                </td>
            </tr>
        ))
      }
      </tbody>
    </Table>} */