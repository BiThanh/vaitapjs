import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import PntListTask from './components/PntListTask';
import PntTaskAddOrEdit from './components/PntTaskAddOrEdit';

function App() {
  //Mock data
  const pnt_listTasks = [
    {
      pnt_taskId: 2201234,
      pnt_taskName: "Nguyễn ",
      pnt_level: "Small",
    },
    {
      pnt_taskId: 1,
      pnt_taskName: "Học lập trình frontend",
      pnt_level: "Small",
    },
    {
      pnt_taskId: 2,
      pnt_taskName: "Học lập trình reactjs",
      pnt_level: "Medium",
    },
    {
      pnt_taskId: 3,
      pnt_taskName: "Lập trình với Frontend - Reactjs",
      pnt_level: "High",
    },
    {
      pnt_taskId: 4,
      pnt_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      pnt_level: "Small",
    },
  ];

  let data = JSON.parse(localStorage.getItem("PntK22CNT1DataTasks"));
  if (data === null || data.length === 0) {
      data = pnt_listTasks;
      localStorage.setItem("PntK22CNT1DataTasks", JSON.stringify(data));
  }

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [pntListTasks, setPntListTasks] = useState(data);

  useEffect(() => {
      localStorage.setItem("PntK22CNT1DataTasks", JSON.stringify(pntListTasks));
  }, [pntListTasks]);

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const pntHandleSubmit = (pntParam) => {
    if (pntAddOrEdit === false) {
      // khi thêm mới
      setPntListTasks((prev) => {
        return [...prev, pntParam];
      });
    } else {
      // submit khi sửa
      for (let i = 0; i < pntListTasks.length; i++) {
        if (pntListTasks[i].pnt_taskId == pntParam.pnt_taskId) {
          pntListTasks[i] = pntParam;
        }
      }
      setPntListTasks((prev) => {
        return [...prev];
      });
    }
  };

  // ham xu ly đón dữ liệu sửa
  const handleDelete = (taskId) => {
    setPntListTasks((prev) => prev.filter((task) => task.pnt_taskId !== taskId));
  };

  // lữu trữ state
  const task = { pnt_taskId: 0, pnt_taskName: "HD", pnt_level: "small" };
  const [pntTask, setPntTask] = useState(task); // dùng để render form
  // quản lí form khi thêm / sửa
  const [pntAddOrEdit, setPntAddOrEdit] = useState(false); // Them 
  const HandleEdit = (param) => {
    setPntTask(param);
    setPntAddOrEdit(true);
  };

  return (
    <div className="container-border">
      <h1>Thành</h1>
      <hr />
      <div>
        {/*Danh sach list task*/}
        <PntListTask 
          renderPntListTasks={pntListTasks}
          onPntEdit={HandleEdit}
          onPntDelete={handleDelete} 
        />
      </div>
      <div>
        <PntTaskAddOrEdit 
          pntOnSubmit={pntHandleSubmit}
          renderPntAddOrEdit={pntAddOrEdit}
          renderPntTask={pntTask} 
        />
      </div>
    </div>
  );
}

export default App;
