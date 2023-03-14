import { useState } from "react"; 

const FormUser = (props) => {
//const FormUser = ({formData, onClick, setFormData}) khai bao thế này thì bỏ props. bên tronng
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    props.setFormData({
      ...props.formData,
      [name]: value
    });
  };
  return (
    <div>
      <div>
        <input name = 'name' value={props.formData.name} placeholder="name" onChange ={onChange}/>
        <input name = 'email' value={props.formData.email} placeholder="email"  onChange={onChange} />

        <button onClick = {props.onSubmit}>{props.formData.id ? "Edit" : " Create" }</button>
      </div>
    </div>
  );
};

export default FormUser;

//cach dat ten
//TableUserList (class, components)
//handleConfirm ( function)
//address (biến)
//COUNTRIES ( khai báo const)
//surveys (array / collection)