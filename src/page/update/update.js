import { useEffect, useState } from "react";
import "./update.css";
import { useNavigate } from "react-router-dom";
import postContect from "../../services/postContect";
import { useParams } from "react-router-dom";
import {getOneContect} from "../../services/getOneContect";
import { putContect } from "../../services/putContect";
const Edit = () => {
    const params=useParams();
    console.log(params);
     const [values,setValues]=useState({name:"",email:""});
    useEffect(()=>{
        getOneContect(params.id).then(res=>setValues(res.data)).catch()
    },[]);
    const navigate=useNavigate()
    const changeHandler=(e)=>{
      setValues({...values,[e.target.name]:e.target.value})
    }
    const submitHandlr=(e)=>{
      e.preventDefault();
      if(!values.name||!values.email){
        alert("please Fill out the entire form")
        return;
      }
      putContect(params.id,values).then(()=>{
        navigate("/") 
        setValues({name:"",email:""})
      }).catch((error)=>console.log(error));
    }
    return ( 
        <section>
        <h1>Update ConTact</h1>
        <form onSubmit={submitHandlr}>
            <label htmlFor="name-value">Name</label>
            <input id="name-value" type="text" placeholder="name" name="name" value={values.name} onChange={changeHandler} />
            <label htmlFor="email-value" >Email</label>
            <input id="email-value" type="email" placeholder="email" name="email" value={values.email}  onChange={changeHandler} />
            <button type="submit">Update</button>
        </form>
    </section>
     );
}
 
export default Edit;