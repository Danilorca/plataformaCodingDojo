import React from 'react';
import * as Yup from "yup"
import { Field, Form, Formik } from 'formik'

const ProductForm = (props) => {

  const { titulo, precio, descripcion, onSubmitProp } = props;

  return (
    <div>
      <Formik
      initialValues={
        {
          titulo: titulo,
          precio: precio,
          descripcion: descripcion
        }
      }

      validationSchema = {
        Yup.object().shape({
          titulo:Yup.string()
          .min(3, "El titulo es muy corto")
          .max(25, "El titulo es muy largo")
          .required("Por favor ingrese un titulo"),

          precio:Yup.number()
          .required("Por favor ingresa un precio"),

          descripcion:Yup.string()
          .min(3, "El titulo es muy corto")
          .max(25, "El titulo es muy largo")
          .required("Por favor ingrese una descripción")
        })
      }

      onSubmit = {(values, {setSubmitting})=>{
        console.log(`Info del formik`, values)
        onSubmitProp(values);
      }}
      >
        {({errors, touched, handleSubmit})=>{
          return(
            <div>
              <h2>FORMULARIO DE PRODUCTO</h2>
              <Form>
                <div>
                  <label htmlFor="titulo">Titulo</label>
                  <Field
                  id='nombre'
                  type= 'text'
                  placeholder= 'ingresa un titulo'
                  name='titulo'>
                  </Field>
                  {errors.titulo&&touched.titulo&& <p>{errors.titulo}</p> }
                </div>
                <div>
                <label htmlFor="precio">Precio</label>
                  <Field
                  id='precio'
                  type= 'number'
                  placeholder= 'ingresa un precio'
                  name='precio'>
                  </Field>
                  {errors.precio&&touched.precio&& <p>{errors.precio}</p> }
                </div>
                <div>
                  <label htmlFor="descripcion">Descripcion</label>
                  <Field
                  id='descipcion'
                  type= 'text'
                  placeholder= 'ingresa un descipcion'
                  name='descripcion'>
                  </Field>
                  {errors.descripcion&&touched.descripcion&& <p>{errors.descripcion}</p> }
                </div>
                <button
                type="submit"
                disabled={Object.values(errors).length>0 ||
                Object.values(touched).length ===0}>
                ENVIAR
              </button>
              </Form>
            </div>
          )
        }}
      </Formik>

    </div>
  );
}

export default ProductForm;
