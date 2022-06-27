import './lavora-con-noi.styles.scss'

const LavoraConNoi = () => {

    return (
        <div className='lavora-con-noi'>
            <div className='background-img' >
                <span>LAVORA CON NOI</span>
            </div>  
            <div className='cv-container'>
                <span className='intro'>
                    La Cayman Group offre posizioni lavorative di diverso tipo.
                    Carica il tuo CV corredato di recapito telefonico e indirizzo mail.
                    Sarà nostra cura fissarti un colloquio conoscitivo il prima possibile
                </span>
                <div className='cv'>
                    <input id='cv' type='file' />
                    <label for='cv'>Carica il tuo CV</label>
                </div>
            </div>
        </div>
    )
}

export default LavoraConNoi