import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state,setState] = useState(Array(9).fill(null))
    const [xturn,setXturn] = useState(false)

    const checkwiner=()=>{
        const winnerlogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerlogic){
            const [a,b,c] = logic;
            if(state[a] !==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
         return false;
    }

    const isWinner = checkwiner()

    const playagain=()=>{
    
        window.location.reload()
    }

    

    const handlerClick=(index)=>{
        if(state[index]!== null){
            return;
        }
       let copystate = [...state];
       copystate[index] = xturn ? "X" :"0";
       setState(copystate);
       setXturn(!xturn);
    }
  return (
      <>
    <div className='board-container'>
        <h4>Player {xturn ? "X" : "0"} please Move</h4>
         {isWinner ?( <>{isWinner} Won the game <button onClick={playagain}>Play Again</button></>): (<>
         <div className='board-row'>
                <Square onClick={()=>handlerClick(0)} value={state[0]}/>
                <Square onClick={()=>handlerClick(1)} value={state[1]}  />
                <Square onClick={()=>handlerClick(2)} value={state[2]}/>
          </div>
          <div className='board-row'>
                <Square onClick={()=>handlerClick(3)} value={state[3]}/>
                <Square onClick={()=>handlerClick(4)} value={state[4]}/>
                <Square onClick={()=>handlerClick(5)} value={state[5]}/>
          </div>

          <div className='board-row'>
                <Square onClick={()=>handlerClick(6)} value={state[6]}/>
                <Square onClick={()=>handlerClick(7)} value={state[7]}/>
                <Square onClick={()=>handlerClick(8)} value={state[8]}/>
          </div>
          <button onClick={playagain}  style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"95px",marginTop:"10px"}}>Restart</button>
         </>)}
         
        
    </div>
    
    </>
  )
}

export default Board
