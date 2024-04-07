import React, {useState}  from 'react';
import Layout from "../../components/Layout";
import "./Register.css";
import toast from 'react-hot-toast';
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

//   const [details,setDetails]=useState({
//     Name:"",
//     Email:"",
//     Phone:"",
//     Address:"",
//     Password:"",
// });
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [address,setAddress]=useState('');
const [password,setPassword]=useState('');
const [answer,setAnswer]=useState('');

const navigate=useNavigate();

//const handleChange= (e)=>{

// const {name,value}= e.target;
//  setDetails((prev)=>{
// return {...prev, [name]:value}
// });

//}

const handleSubmit =  async (e)=>{
 e.preventDefault();
 //console.log(name, email, password, phone, address)
 try {
  const res= await axios.post('/api/v1/auth/register',{name, email, password, phone, address,answer})
if(res.data.success){
  toast.success(res.data.message) 
  navigate('/login')
}else {
  toast.error(res.data.message)
}

} catch (error) {
  console.log(error)
  toast.error('Something went wrong')
}

}


  return (
    <Layout title={"Register - My Shop"}>
      <div className="register">
        <h1>Registration form</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3"> 
            <input
              type="text"
              className="form-control"
              value={name}
              placeholder="enter name"
             onChange={(e)=>setName(e.target.value)}
             required
            />
          </div>
          <div className="mb-3"> 
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="enter email"
             onChange={(e)=>setEmail(e.target.value)}
             required
            />
          </div>
          <div className="mb-3"> 
            <input
              type="text"
              className="form-control"
              value={phone}
              placeholder="enter phone number"
              onChange={(e)=>setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3"> 
            <input
              type="text"
              className="form-control"
              value={address}
              placeholder="enter address"
              onChange={(e)=>setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
             <input
              type="password"
              className="form-control" 
              value={password}
              placeholder="enter password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
             <input
              type="answer"
              className="form-control" 
              value={answer}
              placeholder="Enter Your favorite Sport Name"
              onChange={(e)=>setAnswer(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
