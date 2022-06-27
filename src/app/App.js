import { Routes, Route, useLocation } from "react-router-dom"
import { Suspense, lazy } from "react"
import './App.scss';

import ButtonContatta from "../components/buttoncontatta/buttonContatta.component";
import NavBar from "../components/navBar/navBar.component";

//per la sezione "servizi"
import prodotti from "./prodotti";

//import con lazy per migliorare la performance
const LavoraConNoiPage = lazy(() => import('../pages/lavora-con-noi/lavora-con-noi.page'))
const LuceEGasPage = lazy(() => import('../pages/servizi/luce-e-gas/luce-e-gas.page'))
const ProdottiPage = lazy(() => import('../pages/servizi/prodotti/prodotti.page'))
const ContattaciPage = lazy(() => import('../pages/contattaci/contattaci.page'))
const ImpresePage = lazy(() => import('../pages/servizi/imprese/imprese.page'))
const PolizzePage = lazy(() => import('../pages/servizi/polizze/polizze.page'))
const DoveSiamoPage = lazy(() => import('../pages/doveSiamo/doveSiamo.page')) 
const SupportoPage = lazy(() => import('../pages/supporto/supporto.page'))
const ChisiamoPage = lazy(() => import('../pages/chiSiamo/chiSiamo.page'))
const ServiziPage = lazy(() => import('../pages/servizi/servizi.page')) 
const HomePage = lazy(() => import('../pages/home/home.page'))
const MapPage=lazy(()=> import('../pages/map/map.page'));
const Footer=lazy(()=>import('../components/footer/footer.component'))

const App = () => {
  const { pathname } = useLocation()

  return (
    <div className='App'> 
      <NavBar linkAttuale = { pathname }/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
          <Route path='servizi' element = { <ServiziPage/> } />
          <Route path='servizi/luce-e-gas' element = { <LuceEGasPage/> }/> 
          <Route path='servizi/polizze' element = { <PolizzePage /> }/>
          <Route path='servizi/fotovoltaico' element = { <ProdottiPage prodotto={prodotti.fotovoltaici} /> }/>
          <Route path='servizi/climatizzatore' element = { <ProdottiPage prodotto={prodotti.climatizzatori} /> }/>
          <Route path='servizi/caldaie' element = { <ProdottiPage prodotto={prodotti.caldaie} /> }/>    
          <Route path="servizi/imprese" element = { <ImpresePage/> }/>
          <Route path="dovesiamo" element = { <DoveSiamoPage/> }/>
          <Route path="lavora-con-noi" element = { <LavoraConNoiPage/> }/>
          <Route path="chisiamo" element = { <ChisiamoPage/> }/>
          <Route path="supporto" element = { <SupportoPage/> }/>
          <Route path="contattaci" element = { <ContattaciPage/> }/>
          <Route path="mappage/:via" element = { <MapPage/> }/>
          <Route path='*' element = { <span>Page not found</span> }/> 
        </Routes>
      </Suspense>
      <ButtonContatta />
      <Footer/>
    </div>
  )
}

export default App;