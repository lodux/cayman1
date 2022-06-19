import { useState } from 'react'
import './contattaci.styles.scss'



//funzione fatti chiamare da un nostro operatore
const Fattichiamare = () => {
  return (
    <div className="containerfattichiamare">
      <span className="frase">
      Inserisci i tuoi dati e un nostro operatore ti richiamerà prima possibile
      </span>
      <input 
      type="number" 
      min="10" 
      max="11"
      placeholder='number'
      className='inp' /> 
       <input 
      type="text" 
      placeholder='nome'
      className='inp' /> 
       <input 
      type="text" 
      placeholder='cognome'
      className='inp' /> 
    </div>
  )
}

//scelta tra fatti chiamare o chiama
const Scelta = () => {
  const [fatti, setFattichiamare]=useState(false);
  return(
    <>
    { fatti==true ? (
      <Fattichiamare/>
    ) : (
      <div className="containerscelta">
      {/* option chiamata */}
      <div className='option1'>
        <div className="ps">
          <i className="fa fa-phone" style={{fontSize:"34px"}} /> {/* immagine telefono */}
          <span className="nverde">CHIAMACI</span>
          <i class='fa fa-angle-right' style={{fontSize:"24px"}}></i>
        </div> 
        <div className="pi">
          <a className='collegamento' href="tel:+390123456789"> Chiama +39.0123.456789! </a>
        </div>  
      </div>
      {/* option whatsapp */}
      <div className='option2'>
          <div className="ps">
          <i class='fa fa-whatsapp' style={{color:"#00FF00",fontSize:"34px"}}></i> {/* immagine telefono */}
          <span className="chat" onClick={()=>setFattichiamare(true)}>FATTICHIAMARE</span>
          <i class='fa fa-angle-right' style={{fontSize:"24px"}}></i>
        </div> 
        <div className="pi">
          <span className='avviachat'>inserisci i tuoi dati e ti contatteremo</span>
        </div>    
     </div>
     </div>
    )} 
    </>
  )

}


const Contattaci = () => {
const [chiama, setChiama]=useState(false);
  return (
    <div className='supportoContainer'>
      <div className='supportoContainer'> 
      {/* parte uperiore */}
        <div className="partealta">
          <h2 className='sc'>Servizio clienti</h2>
          <div className="meno"></div>
        </div>
        {/* parte inferiore */}
        <div className="parteinferiore">
        <div className="scelta">
          <h2 className='scegliscritta'>Scegli come contattarci</h2>
          {/* option chiamata */}
          <>
            { chiama==true ? (
            <Scelta/>
          ) : (
            <>
          <div className='option1' onClick={()=>setChiama(true)}>
            <div className="ps">
              <i className="fa fa-phone" style={{fontSize:"34px"}} /> {/* immagine telefono */}
              <span className="nverde">NUMERO VERDE</span>
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
        </div>
        {/* footer */}
        <div className="footer">
            <span className='foot'>
              Disponibile dal lunedì al venerdì
            </span>
            <span className='foot'>
              dalle 9 alle 18
            </span>
        </div>
      
        </div>
        </div>
       
    </div>
  )
  }
   
export default Contattaci