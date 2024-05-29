import React from 'react'

export default function PntListTask({renderPntListTasks}) {
    console.log(renderPntListTasks); 

    let pntElementTask = renderPntListTasks.map((task, index)=>{
        return (
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.pnt_taskId}</td>
                <td>{task.pnt_taskName}</td>
                <td>{task.pnt_level}</td>
                <td>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>
            </tr>
            </>
        )
    })
    return (
    
    <div>
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
  )
}
