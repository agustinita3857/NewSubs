import { useEffect, useRef, useState } from 'react';
import './App.css';
import Guests from './components/guests/index';

import {Sub, SubsResponseFromApi} from './types';
import axios from 'axios';
import Menu from './components/menu/index';
import {mockSubInfo} from './mockInfo';
import {menuItems} from './constants/menuConstants';
import Home from './components/homePage/index';

import {BrowserRouter, Routes, Route, Link  } from "react-router-dom";

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>(mockSubInfo);
  const divRef = useRef<HTMLDivElement>(null)

  //el servicio no funciona asique utilizo un mock de los datos
  useEffect(()=>{
    const fetchSubs = () => {
      return axios
        .get<SubsResponseFromApi>('http://localhost:3001/subs') // el type se puede poner ahi o en la promesa
        .then(resp => resp.data)
    }
    /*
     //opcion async await
     const fetchSubs = async () => {
      const resp = await axios
        .get<SubsResponseFromApi>('http://localhost:3001/subs') // el type se puede poner ahi o en la promesa
        ;
      return resp.data;
    } 
    */

    /* 
      //opcion fetch
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
          description,
          id
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonth,
          id
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

  const handleRemoveSub = (e: Sub) => {
    const newSubs = subs.filter((sub)=> sub.id !== e.id)
    setSubs(newSubs);
  };

  return (
    <div className='container'>
        <BrowserRouter>
          <div className='header'>
            <h1>Sus patas en nuestras manos</h1>
          </div>
          <div className='content'>
            <Menu  menuItems={menuItems}/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contacto'/>
              <Route path='/inquilinos' element={<Guests subs={subs} handleSubs={handleNewSub} handleDeleteSub={handleRemoveSub}/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
