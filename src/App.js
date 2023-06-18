 import React from "react"
 import Card from './components/card'
 import List from './components/list'
 import ReactBootstrap from './components/reactBootstrap'
import Data from './data.json'

import STATE from './components/STATE'
import HomePage from "./conditional-rendaring/HomePage"
import Conditional_Rendering from './conditional-rendaring/index'
import Event_Handeler_Class from './Event_Handler_Class/index'
import Event_Binding from './Event_Binding/index'
import Hooks_UseState from './Hooks_UseState/index1'
import Hooks_UseState2 from './Hooks_UseState/index2'
import Form from './form/form'
import Child from "./STATE_LIFTING/Child"
import SignUp from "./Sign-Up/Sign-up"
import Toggle from "./Toggle/Toggle"
import FAQ from './Toggle/FAQ'
import UseEffect from './Hooks/UseEffect'
import FetchData from './Hooks/FetchData'
import Get_Api from './GET_API/Get_Api'
import Post_API from './GET_API/Post_API'
import Home from './Routing/Home'
import Contact from './Routing/Contact'
import Blogs from './Routing/Blogs'
import Error from './Routing/Error'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import  Navbar  from "./Navbar/Navbar"
import Login from './Authentication/Login'
import Registration from './Authentication/Registration'


function App(){

 let items=[]
items = Data.map((item,index)=><Card key={index}titleText={item.title} descText={item.desc}/>)

const data = 'I am parent App'
   //child to parent data passing start
   const handleChildData = (childData)=>{
    console.log(childData);
  }
    // child to parent data passing end
  


   return  <div>
    <h1 className='headingStyle'>ToDO</h1>
      {/* {items} */}

   
   
    {/* <ReactBootstrap />
    <STATE />
    
    <Conditional_Rendering />
    <Event_Handeler_Class/>
    <Event_Binding/>
    <Hooks_UseState/>
    <Hooks_UseState2/>
    <Form/>
    <Child data={data} onChildData={handleChildData}/>

    <SignUp/> */}

    {/* <Toggle/> */}
    
    {/* <FAQ/> */}
    {/* <UseEffect/> */}
    {/* <FetchData/> */}
    {/* <Get_Api/> */}
   

      {/* <Post_API/> */}


{/* <BrowserRouter>
 <Navbar/>
<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/blogs" element={<Blogs/>}/>
   <Route path="/*" element={<Error/>}/>
</Routes>
</BrowserRouter> */}

{/* <BrowserRouter>
 <Navbar/>
<Routes>
   <Route path="/registration" element={<Registration/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/*" element={<Error/>}/>
</Routes>
</BrowserRouter>
 */}
<Registration/>
  
    </div>
 }

 export default App 