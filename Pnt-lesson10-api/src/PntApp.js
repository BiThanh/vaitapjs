
import './App.css';
import PntListUsers from './components/PntListUsers';
import axios from './api/PntApi'
import { useEffect, useState } from 'react';
import PntFormAddOrEdit from './components/PntFormAddOrEdit';
function TvcApp() {
  
  const [PntListUsers,setPntListUsers] = useState([]);

  // đọc dữ liệu từ api
  const PntGetAllUsers = async  ()=>{
    const PntResponse = await axios.get("PntUsers");
    console.log("Api Data:",PntResponse.data);
    setPntListUsers(PntResponse.data)
  }

  
  useEffect(()=>{
    PntGetAllUsers();
    console.log("State Data:",PntListUsers);
  },[])

  const [PntAddOrEdit, setPntAddOrEdit] = useState(false);
  const PntInitUser = {
      UserName: "Phạm Nhật Thành",
      Password: "13/01/2004",
      Email: "bibo22122004@gmail.com",
      Phone: "0943358062",
      id: "2210900066"
  }
  const [PntUser, setPntUser] = useState(PntInitUser);

  // Hàm xử lý nút thêm mới
  const PntHandleAddNew = ()=>{
    setPntAddOrEdit(true);
  }
  const PntHandleClose=(param)=>{
    setPntAddOrEdit(param);
  }
  const PntHandleSubmit =(param)=>{
    PntGetAllUsers();
    setPntAddOrEdit(param);
  }
  const PntHandleDelete=()=>{
    PntGetAllUsers();
  }
  let PntElementForm = PntAddOrEdit===true?
      <PntFormAddOrEdit renderUsers={PntUser} 
                        onPntClose={PntHandleClose}
                        onPntSubmitForm={PntHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <TvcListUsers  renderPntListUsers={PntListUsers} onPntDelete={PntHandleDelete}/>
        <button className='btn btn-primary' name='btnPntThemMoi' onClick={PntHandleAddNew}>Thêm mới</button>
        <hr/>
        {PntElementForm}
    </div>
  );
}

export default PntApp;
