import { useState } from 'react'

import CustomButton from '../../../components/custom-button/custom-button.component'

import datiImprese from './dati-imprese'

import stella from '../luce-e-gas/3.png'
import salvadanaio from '../luce-e-gas/4.png'

import './imprese.styles.scss'

const Imprese = () => {
    const [servizioSelezionato, setServizioSelezionato] = useState('luce')

    const mostraOfferte = dati => dati.map(({ 
        titolo,
        descrizione,
        offerte
    }, i) =>
        <div className='servizio-selezionato' key={i}>
            <div className='wrapper'>
                <div className='parte-fissa'>
                    <span className='titolo-servizio'>{titolo}</span>
                    <span className='desc'>{descrizione}</span>
                </div>  
            </div>
            <div className='card-container'>
            {
                offerte.map(({
                    nomeOfferta,
                    descOfferta,
                    annuncio1,
                    annuncio2,
                    prezzi
                }, i) =>
                <div className='card' key={i}>
                    <div className='immagine'/>
                    <div className='descrizione-servizio'>
                        <span className='titolo-desc'>{nomeOfferta}</span>
                        <span className='desc'>{descOfferta}</span>
                        <div className='icon-wrapper'>
                            <div>
                                <img alt='ico' src={salvadanaio} />
                                <span>{annuncio1}</span>
                            </div>
                            <div>
                                <img alt='ico' src={stella} />
                                <span>{annuncio2}</span>
                            </div>                            
                        </div>
                        <div className='dettagli-wrapper'>
                        {
                            prezzi.map(({
                                titoloPrezzo,
                                prezzo
                            }, i) => 
                                <div className='dettagli' key={i}>
                                    <span>{titoloPrezzo}</span>
                                    <span className='prezzo'>{prezzo}</span>
                                </div>
                            )
                        }
                        </div>
                        <CustomButton testo='MAGGIORI INFO' path='/supporto' />                        
                    </div>
                </div>
            )} 
            </div>          
        </div>
    )      

    return (
        <div className='imprese-page'>
            <div className='immagine-sfondo'>
                <span className='titolo'>Più energia per la tua impresa</span>
                <span className='sottotitolo'>Scopri Open Energy: 
                l'abbonamento dedicato ai Professionisti e le Partite IVA per pagare la componente energia quanto la paghiamo noi</span>
            </div>
            <span className='menu-titolo'>I NOSTRI SERVIZI</span>
            <div className='menu'>
                <span 
                    className='menu-item'
                    onClick={() => setServizioSelezionato('luce')}
                >
                    Luce
                </span>
                <span 
                    className='menu-item'
                    onClick={() => setServizioSelezionato('gas')}
                >
                    Gas
                </span>
            </div>
            <div className='servizio-container'>
            {
                servizioSelezionato === 'luce' ? mostraOfferte(datiImprese.luce) 
                : mostraOfferte(datiImprese.gas)
            }
            </div>
        </div>
    )
}

export default Imprese