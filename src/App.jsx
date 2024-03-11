import react,{ useState } from 'react'
import './App.css'

function Taskmanager() {
  const [lists, setLists]= useState({
    A:[],
    B:[],
    C:[]
  });
  const [selectedList, setSelectedList] = useState('A');
  const [taskName, setTaskName] = useState('');

  // function to handle task creation 
  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      setLists(prevLists => ({
        ...prevLists,
        [selectedList]: [...prevLists[selectedList], taskName]
      }));
      setTaskName('');
    }
  };
  return (
    <div>
    <select value={selectedList} onChange={e=> setSelectedList(e.target.value)}> 
    
    <option value="A"> A</option>
    <option value="B"> B</option>
    <option value="C">C</option>
    
    </select>

   <input 
   type="text"
   value={taskName} 
   onChange={e => setTaskName(e.target.value)}
   placeholder="Enter task name"
   />
   <div>
   <button onClick={handleAddTask}>add task</button>
   
   </div>
    {/* Displaying the lists */}
    <div className='container'>
        <h2>List A</h2>
        <ul>
          <li>college events</li>
          <li>mid sem</li>
          <li>end sem</li>
          {lists.A.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    <div className='container'>


        <h2>List B</h2>
        <ul>
          <li>to do</li>
          <li>gym workout</li>
          <li>time table</li>
          {lists.B.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    <div className='container'>
      
        <h2>List C</h2>
        <ul>
          <li>github</li>
          <li>linkedin</li>
          <li>twitter</li>

          {lists.C.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Taskmanager;
