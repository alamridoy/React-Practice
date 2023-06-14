
const date = new Date().getFullYear()

function Card(props){
  
const {titleText,descText}=props;  // destructure 

 return  <div className='card'>
          
            <h3 className='cardTitle'>{titleText}</h3> 
            <p className='cardDesc'>{descText}</p>
            <p className='cardFooter'>{date}</p>
           
         </div>
}


export default Card;