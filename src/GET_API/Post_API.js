import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import styles from './get_api.module.css';


const Post_API = () =>  {
    
    const [data,setData] = useState([])

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
  
  
     useEffect(()=>{
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          console.log("Getting data::",res.data);
          setData(res.data)
          
      }).catch(err=> console.log(err)
      )
     },[])

     const postData = (e) => {
        e.preventDefault();
        try {
          Axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body
          })
            .then((res) => console.log('Posting Data:', res))
            .catch((err) => console.log(err));
        } catch (error) {
          console.log(error);
        }
      };
      
  
  
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
       
  <form>
    <lable>
        Title
    </lable>
    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
     <hr/>
     <lable>
        Body
    </lable>
    <input type='text' value={body} onChange={(e)=> setBody(e.target.value)}/>
     <hr/>
     <button onClick={postData}>Post</button>



  </form>
  
  
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
  

export default Post_API
