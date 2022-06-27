import './chiSiamo.styles.scss'

const frasi = [
  `Cayman Group è partner di Enel Energia, 
  con sede a Marsala in via Francesco Crispi 19 - Uffici a Palermo in Via Notarbartolo 20 `,
  `I Negozi SEP "Spazio Enel Partner" sono elencati nella sezione contatti del sito. Per info visitate le nostre pagine social`
]

const personale = [
  {
    nome: 'Nome',
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    citazione: 'Breve descrizione'
  },
  {
    nome: 'Nome',
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    citazione: 'Breve descrizione'
  }
]

const ChisiamoPage = () => {

  return (
    <div className='chi-siamo-page'>
      <span className='titolo'>
        CHI SIAMO
      </span>
      <div className='citazione-container'>
        <span className='virgolette'>❝</span>
        {
          frasi.map((frase, i) => (
            <span 
              key={i}
              className={`
                citazione
                ${ frase === frasi[frasi.length] ? 'ultima' : '' }
              `}
            >
              { frase }
            </span>
          ))
        } 
        <span className='virgolette end'>❞</span>
      </div>
      <span className='titolo'>
        IL NOSTRO STAFF
      </span>  
      {
        personale.map(({ nome, citazione, img }, i) => (
          <div 
            className='tizio-container' 
            key={i}
          >
            <div className='foto'>
              <img src={img} alt='foto' />
              <span>{nome}</span>
            </div>
            <div className='presentazione'>
              <span className='virgolette'>❝</span>
              <span className='testo'>{citazione}</span>
              <span className='virgolette end'>❞</span>
            </div>
          </div>
        ))
      }    
    </div>
  )  

};

export default ChisiamoPage