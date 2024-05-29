import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import PntListTask from './component/PntListTask';
import PntTaskAddOfEdit from './component/PntTaskAddOfEdit';


function App() {
  const pnt_listTasks = [
    { pnt_taskId:2210900119, pnt_taskName:"Nguyễn Trung Quốc", pnt_level:"Small" },
    { pnt_taskId:1, pnt_taskName:"Học lập trình frontend", pnt_level:"Small" },
    { pnt_taskId:2, pnt_taskName:"Học lập trình reactjs",pnt_level:"Medium"},
    { pnt_taskId:3, pnt_taskName:"Lập trình với Frontend - Reactjs",pnt_level:"High"},
    { pnt_taskId:4, pnt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",pnt_level:"Small"},
   ];
   //sử dụng hàm useState để  lưu trữ trạng thái dữ liệu
   const [pntListTasks , setPntListTasks] = useState(pnt_listTasks);

   const pntHandleSubmit = (pntParam)=>{
    console.log("App:",pntParam);
    setPntListTasks(prev => {
      return{
        ...prev,
        pntParam  
      }
    })
   }
  return (
    <div className="container border">
      <h1>Nguyễn Trung Quốc - K22CNT1</h1>
      <hr />
      <div> 
        <PntListTask renderPntqListTasks = {pntListTasks} />
      </div>
      <div>
      <PntTaskAddOfEdit pntOnSubmit={pntHandleSubmit} />

      </div>
    </div>
  );
}

export default App;
