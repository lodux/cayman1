import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dati from './data';

import './map.styles.scss';

export default function MapPage() {
  const {via}=useParams();
  const [data,setDati]=useState([]);

  useEffect(() => {
   switch(via) {
    case "ven":
      setDati(dati[0]);
    break;
    case "vbr":
      setDati(dati[1]);
    break;
    case "vfp":
      setDati(dati[2]);
    break;
    case "vsc":
      setDati(dati[3]);
    break;
    case "ci":
      setDati(dati[4]);
    break;
    case "vmdp":
      setDati(dati[5]);
    break;
    case "valp":
      setDati(dati[6]);
    break;
    case "vn":
      setDati(dati[7]);
    break;
    case "cu":
      setDati(dati[8]);
    break;
    case "vmdr":
      setDati(dati[9]);
    break;
    default:
      return
   }
  },[via])

  return (
    
    <div className='mapcontainer'>
      <div className="banner">
        <span className="bannerscritta">
        Trova la sede Cayman più vicina a te
        </span>
      </div>
      <div className="infocontainer">
        <div className="infosinistra">
          <span className="via">{data.via}</span>
          <span className="telefono">telefono: {data.telefono}</span>
        </div>
        <div className="infodestra">
         
          
          <div className="col1">
      
           <span className="orariscritta">Orari</span>
   
            <span className="giorni">LUN</span>
            <span className="giorni">MAR</span>
            <span className="giorni">MER</span>
            <span className="giorni">GIO</span>
            <span className="giorni">VEN</span>
            <span className="giorni">SAB</span>
            <span className="giorni">DOM</span>
          </div>

          <div className="col2">
          <div className='v'>-</div>
            <span className="orarimt">{data.orarimatt?.lun}</span>
            <span className="orarimt">{data.orarimatt?.mar}</span>
            <span className="orarimt">{data.orarimatt?.mer}</span>
            <span className="orarimt">{data.orarimatt?.gio}</span>
            <span className="orarimt">{data.orarimatt?.ven}</span>
            <span className="orarimt">{data.orarimatt?.sab}</span>
            <span className="orarimt">{data.orarimatt?.dom}</span>

          </div>

          <div className="col3">
          <div className='v'>-</div>
            <span className="oraripm">{data.oraripom?.lun}</span>
            <span className="oraripm">{data.oraripom?.mar}</span>
            <span className="oraripm">{data.oraripom?.mer}</span>
            <span className="oraripm">{data.oraripom?.gio}</span>
            <span className="oraripm">{data.oraripom?.ven}</span>
            <span className="oraripm">{data.oraripom?.sab}</span>
            <span className="oraripm">{data.oraripom?.dom}</span>
          </div>
        </div>
      </div>
      <div className="map">
      <iframe 
         title='mappa'
         src={data.mappa}
         width="600" 
         height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
         className='mappa'>
         </iframe>
      </div>
   
    </div>

  )
}