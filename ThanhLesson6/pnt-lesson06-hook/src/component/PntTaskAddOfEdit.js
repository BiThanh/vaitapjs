import React, {useState} from 'react'

export default function PntTaskAddOfEdit({pntOnSubmit}) {
    const pntTask0bj = {
        pnt_taskId:0,
        pnt_taskName: "",
        pnt_level:""
    }
    const [pntTask , setPntTask] = useState(pntTask0bj);
    const pntHandleChange = (pntEvent)=>{
        let name = pntEvent.target.name;
        let value = pntEvent.target.value;

        setPntTask(prev =>{
            return{
                ...prev,
            [name]:value,
            }
        })
    }
    const pntHandleSubmit = (pntEvent) =>{
        pntEvent.preventDefault();
        pntOnSubmit(pntTask);
    };
  return (
    <div>
        <h2>Thêm mới task</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='pnt_taskId' value={pntTask.pnt_taskId} onChange={pntHandleChange} />
            </div>
            <div>
                <label>Task ID</label>
                <input name='pnt_taskName' value={pntTask.pnt_taskName} onChange={pntHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='pnt_level' value={pntTask.pnt_level} onChange={pntHandleChange} >
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={pntHandleSubmit}>Ghi lại</button>
        </form>
    </div>
  )
}
