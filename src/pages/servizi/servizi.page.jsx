import { useLocation, useNavigate } from 'react-router-dom'

import './servizi.styles.scss'

//transition: transform 6s cubic-bezier(.25,.95,1,.75),-webkit-transform 6s cubic-bezier(.25,.95,1,.75);
// scale(1.1)

const sezioni = [
  {
    nome: 'luce e gas',
    link: 'luce-e-gas',//il link senza il "/" all'inizio
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  },
  {
    nome: 'imprese',
    link: 'imprese',
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  },
  {
    nome: 'polizze',
    link: 'polizze',
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  },
  {
    nome: 'fotovoltaico',
    link: 'fotovoltaico',
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  },
  {
    nome: 'climatizzatore',
    link: 'climatizzatore',
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  },
  {
    nome: 'caldaie',
    link: 'caldaie',
    img_url: 'https://quifinanza.it/wp-content/uploads/sites/5/2018/11/impianto-fotovoltaico.jpg'
  }
]

const ServiziPage = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <div className='container-servizi'>
      {
        sezioni.map(({ nome, link, img_url }, i) => (
          <div 
            className='sezione'
            key={i+1000}
            onClick={() => navigate(`${pathname}/${link}`, { replace: true })}
          >
            <div
              className='immagine'
              key={i}
              style={{'backgroundImage': `url(${img_url})`}}
            > 
            </div>
            <div className='riga-blu'>
              <span key={i+100}>
                {nome.toUpperCase()}
              </span>
            </div>
          </div>
        ))
      }
  
    </div>
  )
}

export default ServiziPage