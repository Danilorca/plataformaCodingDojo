import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { simplePost } from '../services/simplePost';

const NewAuthor = () => {

  const [author, setAuthor] = useState();
  const navigate = useNavigate()

  const crearAuthor = async(values) =>{
    const response = await simplePost(`http://localhost:8080/api/autores/`,values)
    console.log(response)
    navigate("/")
  }

  const handledOnChange = (e) =>{
    const {value} = e.target
    setAuthor({name:value})
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    crearAuthor(author)
    navigate("/")
  }

  return (
    <div>
      <h2>Favorite authors</h2>
      <Link to={'/'} className='btn btn-primary'>Home</Link>

      <h3>Add a new author:</h3>
      <div class="card">
        <div class="card-body">
          <form onSubmit={handleOnSubmit}>
            <h6 class="card-title">Name:</h6>
            <label htmlFor="author" ></label>
            <input type="text" name='author'className='author' onChange={handledOnChange} /> <br></br><br></br>
            <button className='btn btn-primary'> Cancel</button>
            <button className='btn btn-primary' type='submit'> Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default NewAuthor;
