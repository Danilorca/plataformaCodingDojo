import React from 'react';

const Form = (props) => {
  const {imputs, setImputs}=props;

  const onChange = (e) =>{
    setImputs({
      ...imputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input onChange={onChange} type="text" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input onChange={onChange} type="text" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input onChange={onChange} type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input onChange={onChange} type="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="Confirmpassword">Confirm Password: </label>
          <input onChange={onChange} type="password" name="confirmPassword" />
        </div>

      </form>
    </div>
  );
}

export default Form;
