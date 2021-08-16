import React from 'react'
import "./TableHeader.css"

function TableHeader() {
    return (
        <div id='table_header' style={{marginTop:0}}>
                <table id= "header_table" style={{width:'100%'}}>
                <colgroup>
                    <col span="1" style={{width: '6%'}}/>
                    <col span="1" style={{width: '10%'}}/>
                    <col span="1" style={{width: '40%'}}/>
                    <col span="1" style={{width: '22%'}}/>
                    <col span="1" style={{width: '22%'}}/>
                </colgroup>
                <tbody>
                <tr>
                    <td id="title_rank"></td>
                    <td id="title_rank">Rank</td>
                    <td id="title_name">Name</td>
                    <td id="title_points">GW Points</td>
                    <td id="title_total">Total Points</td>
                </tr>
                </tbody>
                </table>
                
            </div>
    )
}

export default TableHeader
