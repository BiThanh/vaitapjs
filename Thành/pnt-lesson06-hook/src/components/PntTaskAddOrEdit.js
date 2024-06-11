import React, { useEffect, useState } from 'react';

export default function PntTaskAddOrEdit({ pntOnSubmit, renderPntTask, renderPntAddOrEdit }) {
  console.log("PntTaskAddOrEdit:", renderPntTask, renderPntAddOrEdit);

  // Đối tượng task
  const pntTaskObj = {
    pnt_taskId: 0,
    pnt_taskName: "",
    pnt_level: ""
  };

  const [pntTask, setPntTask] = useState(renderPntTask);

  useEffect(() => {
    setPntTask(renderPntTask);
  }, [renderPntTask]);

  console.log("State:", pntTask);

  // Hàm xử lý thay đổi điều khiển
  const pntHandleChange = (pntEvent) => {
    const { name, value } = pntEvent.target;

    setPntTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const pntHandleSubmit = (pntEvent) => {
    pntEvent.preventDefault();
    pntOnSubmit(pntTask);
  }

  const pntTitle = renderPntAddOrEdit === false ? "Thêm mới task:" : "Sửa task";

  return (
    <div>
      <h2>{pntTitle}</h2>
      <form>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon1">Task ID</span>
          <input 
            name='pnt_taskId' 
            value={pntTask.pnt_taskId} 
            onChange={pntHandleChange} 
            className="form-control" 
            placeholder="Task ID" 
            aria-label="Task ID" 
            aria-describedby="basic-addon1"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon2">Task Name</span>
          <input 
            name='pnt_taskName' 
            value={pntTask.pnt_taskName} 
            onChange={pntHandleChange} 
            className="form-control" 
            placeholder="Task Name" 
            aria-label="Task Name" 
            aria-describedby="basic-addon2"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon3'>Task Level</span>
          <select 
            name='pnt_level' 
            value={pntTask.pnt_level} 
            onChange={pntHandleChange} 
            className='form-control' 
            aria-describedby='basic-addon3'
          >
            <option value={'Small'}>Small</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
        </div>
        <button onClick={pntHandleSubmit} className='btn btn-primary'>Ghi lại</button>
      </form>
    </div>
  )
}
