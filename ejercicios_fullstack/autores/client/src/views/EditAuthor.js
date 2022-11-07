import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/SimplePut';

const EditAuthor = () => {

  const {id }= useParams()
  const [author, setAuthor] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    getAuthor()
  }, []);

  const getAuthor = async () =>{
    const response = await simpleGet(`http://localhost:8080/api/autores/${id}`)
    setAuthor(response.data.Autor)
  }

  const editarAuthor = async (author) =>{
    const response = await simplePut(`http://localhost:8080/api/autores/${id}`, author)
    console.log(response)
  }

  const handledOnChange = (e) =>{
    const {value} = e.target
    setAuthor({name:value})
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    editarAuthor(author)
    navigate("/")
  }
  return (
    <div>
      <h2>Favorite authors</h2>
      <Link to={'/'} className='btn btn-primary'>Home</Link>

      <h3>Edit this author:</h3>
      <div class="card">
        <div class="card-body">
          <form onSubmit={handleOnSubmit} >
            <h6 class="card-title">Name:</h6>
            <label htmlFor="author" ></label>
            <input type="text" name='author'className='author' onChange={handledOnChange} value={author?.name} /> <br></br><br></br>
            <button className='btn btn-primary'> Cancel</button>
            <button className='btn btn-primary' type='submit'> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAuthor;
