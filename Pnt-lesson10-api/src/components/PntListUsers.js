import React from 'react'
import axios from '../api/PntApi'
export default function PntListUsers({renderPntListUsers, onPntDelete}) {
    console.log("PntListUsers:",renderTvcListUsers);
    // hiener thi đữ liệu
    let PntElementUser = renderPntListUsers.map((PntUser,index)=>{
        return(
                <tr key={index}>
                    <td>{PntUser.id}</td>
                    <td>{PntUser.UserName}</td>
                    <td>{PntUser.Password}</td>
                    <td>{PntUser.Email}</td>
                    <td>{PntUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>PntHandleDelete(tvcUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const PntHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const PntRes = await axios.delete("PntUsers/"+param.id);
        }
        onPntDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {PntElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
