import { useEffect, useState } from 'react'
import './luce-e-gas.styles.scss'

import stella from './3.png'
import salvadanaio from './4.png'
import lampadina from './5.png'
import casa from './6.png'

const LuceEGasPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const listenToScrollEvent = () => {
        //il funzionamento della barra l'ho copiato paro paro da internet
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                // Calculates the scroll distance
                calculateScrollDistance()
            })
        })

        console.log(document.documentElement)
    }
     
    const getDocHeight = () => Math.max(
        document.body.scrollHeight,  document.documentElement.scrollHeight,
        document.body.offsetHeight,  document.documentElement.offsetHeight,
        document.body.clientHeight,  document.documentElement.clientHeight
    )

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset 
        const windowHeight = window.innerHeight //altezza della pagina
        const docHeight = 1340 //altezza del componente "servizio"

        const totalDocScrollLength = docHeight - windowHeight; 
        
        setScrollPosition(Math.floor(scrollTop / totalDocScrollLength * 100))
    }    
      
    useEffect(() => {
        listenToScrollEvent()
    }, [])

    return (
        <div className='pagina-dei-servizi'>
            <section className='servizio'>
                <div className='sticky-div'>
                    <div className='componente-fisso'>
                        <div className='testo-con-barra'>
                            <span>Più energia per la tua casa</span>
                            <div 
                                className='barra' 
                                style={{
                                    background: `linear-gradient(
                                                        to right,
                                                        rgba(8, 177, 215, 0.2) ${scrollPosition}%,
                                                        transparent  0
                                                    )`
                                }}
                            />
                        </div>
                        <div className='icone'>
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />                                                            
                        </div>
                        <span className='desc'>Tante offerte Enel Energia pensate per ogni esigenza. 
                        Scegli quella più adatta ai tuoi consumi. Attivando un nuovo 
                        contratto luce e gas Enel Energia per la tua casa scegli la tranquillità e la sicurezza 
                        di un prezzo vantaggioso!</span>
                        <a href='#prova'>TUTTE LE OFFERTE LUCE</a>
                        <a href='#prova'>TUTTE LE OFFERTE GAS</a>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='componente-laterale'>
                        <div className='annuncio'>
                            <span className='titolo'>Scegli Oggi Luce</span>
                            <span className='desc'>Approfitta dello sconto sul prezzo di listino della componente energia 
                            bloccato per i primi 24 mesi</span>
                            <div className='icona-con-testo'>
                                <img 
                                    src={salvadanaio}
                                    alt='ico'
                                />
                                <span>30% se provieni dal Mercato Libero</span>
                            </div>
                            <div className='icona-con-testo stella'>
                                <img 
                                    src={stella}
                                    alt='ico'
                                />
                                <span>Offerta monoraria!</span>
                            </div>  
                            <button className='bottone-offerta'>
                                <a href='#prova'>VEDI OFFERTA</a>
                            </button>                  
                        </div>
                        <div className='immagine-annuncio'>
                        </div>
                    </div>
                    <div className='componente-laterale'>
                        <div className='annuncio'>
                            <span className='titolo'>Scegli Oggi Gas</span>
                            <span className='desc'>Approfitta dello sconto sul prezzo di listino della componente energia 
                            bloccato per i primi 24 mesi</span>
                            <div className='icona-con-testo'>
                                <img 
                                    src={salvadanaio}
                                    alt='ico'
                                />
                                <span>30% se provieni dal Mercato Libero</span>
                            </div>
                            <div className='icona-con-testo stella'>
                                <img 
                                    src={stella}
                                    alt='ico'
                                />
                                <span>Offerta monoraria!</span>
                            </div>  
                            <button className='bottone-offerta'>
                                <a href='#prova'>VEDI OFFERTA</a>
                            </button>                  
                        </div>
                        <div className='immagine-annuncio'>
                        </div>
                    </div>                                      
                </div>
            </section>
            <section className='servizio'>
                <div className='sticky-div'>
                    <div className='componente-fisso'>
                        <div className='testo-con-barra'>
                            <span>Più energia per la tua impresa</span>
                            <div 
                                className='barra' 
                                style={{
                                    background: `linear-gradient(
                                                        to right,
                                                        rgba(8, 177, 215, 0.2) ${scrollPosition}%,
                                                        transparent  0
                                                    )`
                                }}
                            />
                        </div>
                        <div className='icone'>
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />
                            <img 
                                src={lampadina}
                                alt='icona'
                            />
                            <img 
                                src={casa}
                                alt='icona'
                            />                                                            
                        </div>
                        <span className='desc'>Tante offerte Enel Energia pensate per ogni esigenza. 
                        Scegli quella più adatta ai tuoi consumi. Attivando un nuovo 
                        contratto luce e gas Enel Energia per la tua casa scegli la tranquillità e la sicurezza 
                        di un prezzo vantaggioso!</span>
                        <a href='#prova'>TUTTE LE OFFERTE LUCE</a>
                        <a href='#prova'>TUTTE LE OFFERTE GAS</a>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='componente-laterale'>
                        <div className='annuncio'>
                            <span className='titolo'>Scegli Oggi Business</span>
                            <span className='desc'>Approfitta dello sconto sul prezzo di listino della componente energia 
                            bloccato per i primi 24 mesi</span>
                            <div className='icona-con-testo'>
                                <img 
                                    src={salvadanaio}
                                    alt='ico'
                                />
                                <span>30% se provieni dal Mercato Libero</span>
                            </div>
                            <div className='icona-con-testo stella'>
                                <img 
                                    src={stella}
                                    alt='ico'
                                />
                                <span>Offerta monoraria!</span>
                            </div>  
                            <button className='bottone-offerta'>
                                <a href='#prova'>VEDI OFFERTA</a>
                            </button>                  
                        </div>
                        <div className='immagine-annuncio'>
                        </div>
                    </div>                                      
                </div>
            </section>           
        </div>
    )
}

export default LuceEGasPage



/*
Enel X foto da 1.9 a 6
climatizzatore longbonus lg libero smart
caldaia 1543
luce e gas, imprese polize foto clima caldaie 
*/