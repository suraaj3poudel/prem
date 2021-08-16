import React from 'react'
import Row from './Row'
import "./Table.css"

import {useEffect} from "react";
import {useState}  from 'react'
import { AnimatePresence } from 'framer-motion';
//import FlipMove from 'react-flip-move'


const people = []

function Table() {

    const [ peoples, setPeople] = useState(people);
    var players = [];
    useEffect(() => {
        fetchData();
        }, []);

    useEffect(()=>{
        setInterval(()=>{
        fetchData();
        }, 4000)
        }, [])
    


    const fetchData = () => {
        return fetch("/api/leagues-classic/1241059/standings/")
              .then((response) => response.json())
              .then((data) => setPeople(data.standings.results));}
              

        for(var i in peoples) {
            var o = {};
            if(peoples.hasOwnProperty(i)) {
            o.rank = peoples[i].rank;
            o.name = peoples[i].player_name;
            o.gw = peoples[i].event_total;
            o.total= peoples[i].total;
            players.push(o); 
            }        
        }


        players.sort((a,b) => {
            return b.gw - a.gw;
           //return Math.random()-0.5;
        });

        // players.sort((a,b) => {
        //     return a.gw - b.gw;
        // });

        console.log(players);

    return (
        
        <div id="table">
            <div className="tableContent">
        
        <AnimatePresence exitBeforeEnter>
        {players.map((people) => (
           <Row
              key={people.name}
              index = {players.indexOf(people)}
              rank={people.rank==null ? "N/A" : people.rank}
              name={people.name ==null ? "N/A" : people.name}
              gwPoints={people.gw==null ? "N/A" : people.gw}
              totalPoints={people.total ==null ? "N/A" : people.total}
            ></Row>
            ))}
        </AnimatePresence>
          </div>
        </div>
    )
}

export default Table
