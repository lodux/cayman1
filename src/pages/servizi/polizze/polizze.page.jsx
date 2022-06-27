import { useNavigate } from 'react-router-dom'

import './polizze.styles.scss'

const Polizze = () => {
    const navigate = useNavigate()

    return (
        <div className='polizze-page'>
            <span className='titolo'>LE NOSTRE POLIZZE</span>
            <span className='desc'>Affidati a tecnici qualificati e affidabili e scopri i servizi per la casa Enel X: 
            Assistenza H24, per accedere a una rete di tecnici specializzati a tariffe agevolate per interventi di riparazione 
            in ambito domestico; Protezione Luce 360 e Protezione Gas 360, che in aggiunta prevedono una copertura assicurativa 
            che rimborsa le rate della bolletta della luce o del gas in caso di eventi imprevisti che riguardano lavoro e 
            salute; Check-up Caldaia, per la manutenzione e riparazione della tua caldaia.  </span>
            <div className='polizze-container'>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>
                <div 
                    className='polizza'
                    onClick={() => navigate('/supporto', { replace: true })}
                >
                    <div className='background-img'>
                        <div className='riga-blu'>
                            <span>
                                MAGGIORI INFO
                            </span>
                        </div>                         
                    </div>                 
                    <div className='wrapper'>
                        <span className='titolo-polizza'>Enel X</span>
                        <span className='desc-polizza'>Protezione Gas 360</span>
                        <span className='prezzo-polizza'>1,89 $ / Mese</span>
                        <span className='altro'>Per 24 mesi (IVA inclusa)</span>
                    </div>
                </div>                                                                         
            </div>
        </div>
    )
}

export default Polizze