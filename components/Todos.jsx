import React from 'react'
import React, { useEffect ,useState} from 'react';
import axios from "axios";

const Todos = () => {
    const [page,setPage]=useState(1)
    const [limit,setLimit]=useState(5)
    const [totalCount,setTotalCount]=useState(0)
    const [todos, setTodos] = useState([])
  
    useEffect(()=>{
         axios
         .get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((r)=>{
          console.log(r)
          setTodos(r.data)
          setTotalCount(Number(r.headers["x-total-count"]))
        });
    },[page,limit])
    return (
      <div className="App">
        <button disabled={page<=1} onClick={()=>setPage(page-1)}>{`<`}</button>
        <input
        type="number"
        value={limit}
        min={0}
        max={totalCount}
        onChange={({target})=>setLimit(Number(target.text))} 
        />
        <button
        disabled={totalCount<page*limit}
        onClick={()=>setPage(page+1)}>
          {">"}
        </button>
        {todos.map((todo)=>(
          <div key={todo.id}>{todo.id} {` : `} {todo.text}</div>
       ))}
    
      </div>
    );
}

export default Todos
