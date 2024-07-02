import axios from '../api/ntqApi'
import React, { useEffect, useState } from 'react'

export default function PntFormAddOrEdit({onPntClose, onPntSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [PntId, setPntId] = useState(0);
    const [PntUserName, setPntUserName] = useState("");
    const [PntPassword, setPntPassword] = useState("");
    const [PntEmail, setPntEmail] = useState("");
    const [PntPhone, setPntPhone] = useState("");

    useEffect(()=>{
        setPntId(renderUsers.id)
        setPntUserName(renderUsers.UserName)
        setPntPassword(renderUsers.Password)
        setPntEmail(renderUsers.Email)
        setPntPhone(renderUsers.Phone)
    },[renderUsers])


    const PntHandleClose = ()=>{
        onPntClose(false);
    }

    const PntHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(PntId,PntUserName,PntPassword,PntEmail,PntPhone);
        // post -> api
        let PntObjUser = {
            UserName: PntUserName,
            Password: PntPassword,
            Email: PntEmail,
            Phone: PntPhone,
            id: PntId
        }
        const PntRes = await axios.post("PntUsers",PntObjUser);

        onPntSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={PntId} onChange={(ev)=>setPntId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={PntUserName} onChange={(ev)=>setPntUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={PntPassword} onChange={(ev)=>setPntPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={PntEmail} onChange={(ev)=>setPntEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={ntqPhone} onChange={(ev)=>setNtqPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnPntSave' onClick={(ev)=>PntHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={PntHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
