import { useState } from 'react'
import CheckIcon from './ok.png';

//style per il bottone
import './buttonContatta.styles.scss';
//style per la sezione clienti
import './contattaci.styles.scss';

import iconaMessaggio from './2.png'

//button da usare nella homepage
const ButtonContatta = () => {
  const [isClicked, setClick] = useState(false);
  const [pag1, setPag1]=useState(false);
  const [pag2, setPag2]=useState(false);
  const [rend, setRen]=useState(false);

  //component button
  const Button=()=>{  
    return(
      <div 
      className=""
      onClick={()=>setClick(true)}>
      <button 
        className='button-contattaci'
      >
        <div className="messbutt">
            Contattaci
        </div>
      
        <div className='icona-messaggio'>
          <img 
            src={iconaMessaggio}
            alt="mess" 
          />
        </div>
      </button>

      </div>
    )
  }

  //componente servizio clienti
  const Fattichiamare = () => {
    return (
      <div className="containerfattichiamare">
      <div className="frases">
        <i
              onClick={()=>setPag2(true)}
            class="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
            <span className="frase">
              Inserisci i tuoi dati e un nostro operatore ti richiamerà prima possibile
              </span>
              <div className="meno" onClick={()=>setClick(false)} ></div>
      </div>
      <div className="inputchiama">
        <input 
        type="text" 
        min="10" 
        max="11"
        placeholder='Numero di telefono'
        className='inp' /> 
        <input 
        type="text" 
        placeholder='Nome'
        className='inp' /> 
        <input 
        type="text" 
        placeholder='Cognome'
        className='inp' /> 

      </div>
      <div className="fascia">
      <span className="fasciao">fascia oraria</span>
      <input 
        type="date" 
        placeholder='Giorno'
        className='inpgiorno' /> 
        <input 
        type="text" 
        placeholder='ora'
        className='inpora' /> 
      </div>

      <div className="tastofatti">
          <span 
          onClick={()=>setRen(true)}
          className="bottonefattichiamare">
          CHIAMAMI GRATIS
          </span>
          <i class='fa fa-angle-right' style={{color:"2E5C00",fontSize:"20px"}}></i> 
      </div>
    
      <div className="fraseinf">
          <span className="normativa">
          Ai sensi del Regolamento UE 679/2016  - “GDPR” autorizzo Enel Energia S.p.A. a contattarmi per ricevere informazioni sulle offerte commerciali e ricevere assistenza. Clicca qui per consultare l'informativa Privacy di Enel Energia S.p.A
          </span>
      </div>
      <div className="linea"></div>
      </div>
      
    )
  }

  //componente ultima pagina

  const Rendirizzamento=()=>{
    return(
      <div className='serviziocontainer'>
        <div className="supportoContainer">
    
      <div className="centro">
            <img src={CheckIcon} style={{color:"#2cbdea",width:"280px"}}/>
            <h3 className="mess">
          Grazie per aver inoltrato la tua richiesta
          </h3> 
          <span className="messca">
            Abbiamo preso in carico la tua richiesta. Un nostro esperto ti chiamerà al più presto
          </span>
      </div>    

      <button className="chiudibutt" 
      onClick={()=>setClick(false)}>
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
      <>
      { fatti==false || pag2 ? (
        <div className="containerscelta">
        <div className="partealta">
          {setPag2(false)}
          <i
          onClick={()=>setPag1(true)}
          class="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
        <h2 className='sc'>Servizio clienti</h2>
        <div className="meno" onClick={()=>setClick(false)} ></div>
      </div>
    <h2 className='scegliscritta'>Scegli come contattarci</h2>
    {/* option chiamata */}
    <div className='option1'>
      <a className='collegamento' href="tel:+390123456789">
      <div className="ps">
        <i className="fa fa-phone" style={{fontSize:"34px"}} /> {/* immagine telefono */}
        <span className="nverde">CHIAMACI</span>
        <i class='fa fa-angle-right' style={{fontSize:"24px"}}></i>
      </div> 
      <div className="pi">
          Chiama +39.0123.456789! 
      </div>
      </a>  
    </div>
    {/* option whatsapp */}
    <div className='option2scelta' onClick={()=>setFattichiamare(true)}>
        <div className="ps">
        <i className='fa fa-phone' style={{color:"#4c8b0d",fontSize:"34px"}}></i> {/* immagine telefono */}
        <span className="fattichiamare">FATTICHIAMARE</span>
        <i class='fa fa-angle-right' style={{color:"#4c8b0d",fontSize:"24px"}}></i>
      </div> 
      <div className="pi">
        <span className='avviachat'>inserisci i tuoi dati e ti contatteremo</span>
      </div>    
    </div>
    </div>
      ) : (
      <Fattichiamare/>
      
      )} 
      </>
    )

  }


  const ServizioClienti = () => {
  const [chiama, setChiama]=useState(false);

    return (
      <div className="serviziocontainer">
        <div className='supportoContainer'>
        {/* parte uperiore */}
          
          {/* parte inferiore */}
      
          <div className="scelta">
          
            {/* option chiamata */}
            <>
              { chiama==true ? (
              <Scelta/>
            ) : (
            <>
              <div className="partealta">
                {setPag1(false)}
            <i
              onClick={()=>setClick(false)}
            class="fa fa-arrow-left" style={{fontSize:"22px"}}></i>
            <h2 className='sc'>Servizio clienti</h2>
            <div className="meno" onClick={()=>setClick(false)} ></div>
          </div>
              <h2 className='scegliscritta'>Scegli come contattarci</h2>
            <div className='option1' onClick={()=>setChiama(true)}>
              <div className="ps">
                <i className="fa fa-phone" style={{fontSize:"34px"}} /> {/* immagine telefono */}
                <span className="nverde">NUMERO</span>
                <i class='fa fa-angle-right' style={{fontSize:"24px"}}></i>
              </div> 
              <div className="pi">
                <span className='number'>chiamaci o fatti chiamare</span>
              </div>  
            </div>
            <div className='option2'>
            <a className='collegamento' href='https://api.whatsapp.com/send?phone=393456789715 '>
                <div className="ps">
                <i class='fa fa-whatsapp' style={{color:"#00FF00",fontSize:"34px"}}></i> {/* immagine telefono */}
                <span className="chat">CHAT WATSAPP</span>
                <i class='fa fa-angle-right' style={{fontSize:"24px"}}></i>
              </div> 
              <div className="pi">
                <span className='avviachat'>avvia una chat whatsapp con un consulente</span>
              </div>    
            </a>
          </div>
          </>
            ) }
          </>
        
          {/* footer */}
        
        
          </div>
          <div className="footer">
              <span className='foot'>
                Disponibile dal lunedi al venerdi
              </span>
              <span className='foot'>
                dalle 9 alle 18
              </span>
          </div>
        
      </div>
      </div>
    
    )
    }

    //click=servizio clienti o button
  return (
   <>
   { isClicked || pag1 ? (
    <>
    { rend ? (
      <Rendirizzamento/>
    ) : (
      <ServizioClienti/>
    )}
    
    </>
   ) : (
      <Button/>
   )

   }
 
   </>
   
  )
}

export default ButtonContatta