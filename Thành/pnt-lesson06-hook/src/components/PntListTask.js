import React from 'react';

export default function PntListTask({ renderPntListTasks, onPntEdit, onPntDelete }) {
  console.log(renderPntListTasks);

  // Hàm xử lý dữ liệu khi edit
  const pntHandleEdit = (task) => {
    console.log("edit:", task);
    // Chuyển đổi dữ liệu trên app
    onPntEdit(task);
  }

  const pntHandleDelete = (taskId) => {
    // Gọi hàm xử lý xóa từ props
    onPntDelete(taskId);
  }

  // Render data
  let pntElementTask = renderPntListTasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{task.pnt_taskId}</td>
        <td>{task.pnt_taskName}</td>
        <td>{task.pnt_task_level}</td>
        <td>
          <button className='btn btn-success' onClick={() => pntHandleEdit(task)}>Edit</button>
          <button className='btn btn-danger' onClick={() => pntHandleDelete(task.pnt_taskId)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pntElementTask}
        </tbody>
      </table>
    </div>
  );
}
