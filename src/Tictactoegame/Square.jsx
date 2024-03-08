import React from 'react'

const Square = (props) => {
  return (
    <div  onClick={props.onClick}
     style={{border:"2px solid black",height:"80px",width:"80px",display:"flex",justifyContent:"center",alignItems:"center"}} className='square'>
       <h5>{props.value}</h5>
        
    </div>
  )
}

export default Square
