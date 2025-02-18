import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}){
   const[isEditing, setIsEditing] = useState(false);
   const [playerName, setPlayerName] = useState (initialName);

   function handleEditClick (){
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName (symbol, playerName);
    }
   }
   
   function handleChange(event){
    setPlayerName(event.target.value);
   }

   let fieldPlayerName = (<span className="player-name">{playerName}</span>);
   let btnCaption = 'Edit';

   if(isEditing){
    fieldPlayerName=(<input type="text" required value={playerName} onChange={handleChange}/>);
    btnCaption = 'Save';
   }
    
   return(
     <li className={isActive? 'active' : undefined}>
        <span className="player">
         {fieldPlayerName}
         <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick = {handleEditClick}>{btnCaption /*OR {isEditing? 'Save' : 'Edit'}*/} </button>
     </li>
    );
}