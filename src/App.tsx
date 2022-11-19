import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

import {Sub, SubsResponseFromApi} from './types';
import axios from 'axios';

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const fetchSubs = () => {
      return axios
        .get<SubsResponseFromApi>('http://localhost:3001/subs') // el type se puede poner ahi o en la promesa
        .then(resp => resp.data)
    }
    /*
     opcion async await
     const fetchSubs = async () => {
      const resp = await axios
        .get<SubsResponseFromApi>('http://localhost:3001/subs') // el type se puede poner ahi o en la promesa
        ;
      return resp.data;
    } 
    */

    /* 
      opcion fetch
      const fetchSubs = () : Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3001/subs')
        .then(res => res.json())
    }
     */

    const mapFormApiSubs = (apiResponse: SubsResponseFromApi): Array<Sub> =>{
      return apiResponse.map(subFromApi => {
        const {
          months: subMonth,
          profileUrl: avatar,
          nick,
          description
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonth
        }
      })
    }

    fetchSubs()
    .then(apiSubs => {
      const subs= mapFormApiSubs(apiSubs)
      setSubs(subs)
    })
    /* 
    podria ser tambien
      fetchSubs()
      .then(mapFormApiSubs)
      .then(setSubs)
     */
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub])
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu Subs</h1>
      <List subs={subs}/>
      <Form onNewSubs={handleNewSub}/>
    </div>
  );
}

export default App;
