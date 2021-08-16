import React from 'react';
import "./Row.css";
import { motion } from 'framer-motion';

function Row(props) {
    var cl = 'row_header';
    if(props.index === 0){
        cl='firstElement'
    }
    return (
    <motion.div layout id={cl} 
        transition={{duration:2}}
    > 
    
        
        <table id="rowTable" style={{width:'100%'}}>
            <colgroup>
                <col span="1" style={{width: '6%'}}/>
                <col span="1" style={{width: '10%'}}/>
                <col span="1" style={{width: '40%'}}/>
                <col span="1" style={{width: '22%'}}/>
                <col span="1" style={{width: '22%'}}/>
            </colgroup>
         <tbody>
                <tr>
                <td id='green'></td>
                 <td id='rank'>{props.rank}</td>
                 <td id='name' style={{textTransform:'capitalize'}}>{props.name}</td>
                 <td id='gwPoints'>{props.gwPoints}</td>
                 <td id='totalPoints'> {props.totalPoints} </td>
             </tr>
         </tbody>
        </table>
        
    
    </motion.div>
    )
}

export default Row
