
import { useNavigate } from 'react-router-dom';
import { simpleDelete } from '../services/simpleDelete';

const ButtonEliminate = (props) => {

  const {id, setProductoProps, productoProps } =props
  const navigate = useNavigate()


  const eliminarProducto = async(id) => {
    const response = await simpleDelete("http://localhost:8080/api/productos/delete/"+id)
    console.log(response)
    setProductoProps && productoProps && setProductoProps(productoProps.filter((products)=> products._id!==id))
    navigate("/productos")
  }

  return (
    <div>
      <button onClick={()=>eliminarProducto(id)} >ELIMINAR X</button>
    </div>
  );
}

export default ButtonEliminate;
