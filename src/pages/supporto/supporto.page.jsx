import { useState } from 'react';
import { Link } from 'react-router-dom';

import CheckIcon from './ok.png';

import './supporto.styles.scss';


const SupportoPage = () => {
  const [chiama, setChiama]=useState(false);
  const [isClicked, setClick] = useState(false);
  const [pag1, setPag1]=useState(false);
  const [pag2, setPag2]=useState(false);
  const [rend, setRen]=useState(false);

const Fattichiamare = () => {
  return (
    <div className="sccontainerfattichiamare">
    <div className="scfrases">
      <i
            onClick={()=>setPag2(true)}
          class="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
          <span className="scfrase">
            Inserisci i tuoi dati e un nostro operatore ti richiamerà prima possibile
            </span>
    </div>
    <div className="scinputchiama">
      <input 
      type="text" 
      min="10" 
      max="11"
      placeholder='Numero di telefono'
      className='scinp' /> 
      <input 
      type="text" 
      placeholder='Nome'
      className='scinp' /> 
      <input 
      type="text" 
      placeholder='Cognome'
      className='scinp' 
      style={{marginBottom:"12px"}}/>    
      <br/>
      <span className="scfasciao">fascia oraria: </span>
      <br/>
    <input 
      type="date" 
      placeholder='Giorno'
      className='scinp' /> 
      <input 
      type="text" 
      placeholder='ora'
      className='scinp' /> 
    </div>
    <div className="sctastofatti">
        <span 
        onClick={()=>setRen(true)}
        className="scbottonefattichiamare">
        CHIAMAMI GRATIS
        </span>
        <i class='fa fa-angle-right' style={{color:"2E5C00",fontSize:"20px"}}></i> 
    </div>
  
    <div className="scfraseinf">
        <span className="scnormativa">
        Ai sensi del Regolamento UE 679/2016  - “GDPR” autorizzo Cayman Group a contattarmi per ricevere informazioni sulle offerte commerciali e ricevere assistenza. Clicca qui per consultare l'informativa Privacy di Cayman Group
        </span>
    </div>
    <div className="sclinea"></div>
    </div>
    
  )
}

//componente ultima pagina

const Rendirizzamento=()=>{
  return(
    <div className='scserviziocontainer'>
      <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
      <div className="scsupportoContainer">
    <div className="sccentro">
          <img src={CheckIcon} style={{color:"#2cbdea",width:"280px"}}/>
          <h3 className="scmess">
        Grazie per aver inoltrato la tua richiesta
        </h3> 
        <span className="scmessca">
          Abbiamo preso in carico la tua richiesta. Un nostro esperto ti chiamerà al più presto
        </span>
    </div>    

    <button className="scchiudibutt" 
    onClick={()=>setRen(false)}>
      CHIUDI
    </button>
    </div>

    </div>
  )
}

//scelta tra fatti chiamare o chiama
const Scelta = () => {
  const [fatti, setFattichiamare]=useState(false);
  return(
    <div className='spcont'>
     <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
    { fatti==false || pag2 ? (
      <div className="scContainer">
      <div className="scpartealta">
        {setPag2(false)}
        <i
        onClick={()=>setChiama(false)}
        class="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
         <h2 className='scscegliscritta'>Scegli come contattarci</h2>
      
    </div>
 
  {/* option chiamata */}
  <a href='https://youtube.com' style={{textDecoration:"none",color:"#000"}}>
  <div className='scoption1'>
        <i className="fa fa-phone" /> {/* immagine telefono */}
    <div className="scpiii">
  
      <span className="scnverde">CHIAMACI</span>
       Chiama +39.0123.456789! 
    </div> 

       

 <i class='fa fa-angle-right c'></i>
  </div>
 </a>
  {/* option whatsapp */}
  <div className='scoption2scelta' onClick={()=>setFattichiamare(true)}>
      <i className='fa fa-phone fc' ></i> {/* immagine telefono */}
      <div className="scpiii">
      
      <span className="scfattichiamare">FATTICHIAMARE</span>
      <span className='scavviachat'>inserisci i tuoi dati e ti contatteremo</span>
    </div> 
  
     <i class='fa fa-angle-right fc'></i>  
  </div>
  </div>
    ) : (
    <Fattichiamare/>
    
    )} 
    </div>
  )

}

  const Sedi=()=>{
    return(
      <div className="sediCont">
        <h1 className="sediTit">
          Le Nostre Sedi
        </h1>
        <button className="frasiTit">
          <Link to='/dovesiamo' style={{textDecoration:"none",color:"#000"}}>
              trova la sede cayman più vicina a te
          </Link>
        </button>
      </div>
    )
  }

  const PaginaIn=()=>{
    return (
      <div className='spcont'>
      {/* parte uperiore */}
      <div className="spbanner">
        <span className="spbannerfrase">
          Supporto Cayman
        </span>
      </div>
      {/* servizio clienti */}
          <>

           <div className="scContainer">
           <div className="scpartealta">

         <h2 className='scscegliscritta'>Scegli come contattarci</h2>
      
    </div>
          <div className='scoption1' onClick={()=>setChiama(true)}>
          <i class='fa fa-phone'  /> {/* immagine telefono */}
          
            <div className='scpiii'>  
            <div className='scps'>
              <div className="scnverde">
                <span className='scnum'>NUMERO</span>
              </div>
            </div> 
            
              <span>chiamaci o fatti chiamare</span>
            </div>  
            <i class='fa fa-angle-right n'></i>
          </div>
          <a href=' https://wa.me/3755112341' style={{textDecoration:"none",color:"#000"}}>
          <div className='scoption2'>
       
          <i class='fa fa-whatsapp'></i> {/* immagine telefono */}
              
              <div className='scpiii'>
              <div className="scps">
                
                <div className="">
                <span className='scchat'>CHAT WHATSAPP</span>  

                </div>
              </div> 
              <span className='scavviachat'>avvia una chat whatsapp con un consulente</span>
              </div>
              <i class='fa fa-angle-right'></i>
              
         </div>
        </a>
         </div>
        
         
        </>
     
        {/* footer */}
        <div className="scfooter">
            <span className='scfoot'>
              Disponibile dal lunedi al venerdi
              dalle 9 alle 18
            </span>
        </div>
      
      </div>
          
    )
  }

  return(
    <>
    { chiama==true ? (
      <>
      {rend==true ? (
        <>
        <Rendirizzamento/>
        <Sedi/>
        </>
      ): (
        <>
        <Scelta/>
      <Sedi/> </>
      )}
      
     </>
    ) : (
      <>
      <PaginaIn/>
      <Sedi/>
      </>
    ) 

    }
    </>
  )
}
   
export default SupportoPage