import CustomButton from '../../../components/custom-button/custom-button.component'

import './prodotti.styles.scss'

const Climatizzatore = ({ prodotto }) => (
    <div className='pagina-dei-servizi'>
        <section className='servizio'>
            <div className='sticky-div'>
                <div className='componente-fisso'>
                    <div className='testo-con-barra'>
                        <span>{prodotto.titolo}</span>
                        <div 
                            className='barra' 
                            style={{
                                background: `linear-gradient(
                                                    to right,
                                                    rgba(8, 177, 215, 0.2) ${0}%,
                                                    transparent  0
                                                )`
                            }}
                        />
                    </div>
                    <span className='desc'>{prodotto.desc}</span>
                </div>
            </div>
            <div className='wrapper'>
            {
                prodotto.items.map(({ imgLink, desc, prezzo, sottotitolo, titolo }, i) => (
                    <div 
                        key={i}
                        className='prodotto'
                    >
                        <div className='immagine-wrapper'>
                            <img 
                                src={imgLink}
                                alt='climatizzatore'
                            />
                        </div>
                        <span className='titolo'>{titolo}</span>
                        <span className='desc'>{desc}</span>                            
                        <span className='sottotitolo'>{sottotitolo}</span>
                        <div className='prezzo-wrapper'>
                            <CustomButton testo='MAGGIORI INFO' path='/supporto' />
                            <span className='prezzo'>{prezzo}</span>
                        </div>
                    </div>
                ))
            }                                            
            </div>
        </section>          
    </div>
)

export default Climatizzatore