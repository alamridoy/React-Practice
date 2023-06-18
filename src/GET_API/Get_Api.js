import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import styles from './get_api.module.css';

const Get_Api = () => {
    
  const [data,setData] = useState([])


   useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log("Getting data::",res.data);
        setData(res.data)
        
    }).catch(err=> console.log(err)
    )
   },[])


   const arrData = data.map((data)=>{

    return(
        <tbody>
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.body}</td>
    </tr>
    </tbody>
    )

   })


  return (
    <div>
        <h1>
            This is react get api using axios
        </h1>
     



<table className={styles.GeneratedTable}>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  {arrData}
 
</table>







    </div>
  )
}

export default Get_Api
