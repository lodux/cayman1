import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navBar.styles.scss'

import lente from './search.svg'
import menu from './menu.svg'
const LOGO_LINK = 'https://www.caymangroup.it/wp-content/uploads/2021/03/logo_caygroup_trasp.png'

//evitiamo le ripetizioni di codice il più possibile
const NavBarOption = ({ nome, link }) => (
    <Link to={link} style={{textDecoration: 'none'}}>
        <span className="navoption">{nome}</span>
    </Link> 
)

const elementiNavBar = [
    {
        nome: 'HOME',
        link: '/'
    },
    {
        nome: 'SERVIZI',
        link: '/servizi'
    },
    {
        nome: 'IMPRESE',
        link: '/imprese'
    },
    {
        nome: 'DOVE SIAMO',
        link: '/dovesiamo'
    },
    {
        nome: 'CHI SIAMO',
        link: '/chisiamo'
    },
    {
        nome: 'SUPPORTO',
        link: '/supporto'
    }
];

const Navbar = ({ linkAttuale }) => {
    const [isClicked, setClick] = useState(false);
    return (
        <div className='navbar-container'>
            <div className="logo">
                <Link to=''>
                    <img className="logoImg" alt='cayman-logo' src={LOGO_LINK} />
                </Link>
            </div>

            {
                elementiNavBar.map((el, i) => (
                    <Link 
                        to={el.link} 
                        style={{textDecoration: 'none'}}
                        key={i}
                    >
                        <span 
                        className={`
                            elemento
                            ${ linkAttuale === el.link ? 'selezionato ' : null }
                            ${ !isClicked ? 'nascosto' : null }                            
                        `}
                        // 'elemento' è la className che hanno tutti i componenti di default. 
                        //Cliccandolo, otterrà anche la className 'selezionato'. 
                        //'nascosto' è aggiunto di default da mobile
                        onClick={
                            () => setClick(false)//in questo modo, da mobile, la navbar si richiude dopo averla cliccata 
                        }
                        >
                            {el.nome}
                        </span>
                    </Link>                     
                ))
            }

            <img 
                src={lente} 
                alt="cerca" 
                className="search"
            /> {/* width e height li ho messi nei css*/}

            <img 
                src={menu}
                alt='menu-ico'
                className='menu-ico'
                onClick={
                    () => setClick(prevState => !prevState)//switch tra true e false
                }
            />
        </div>
    )
}

export default Navbar