import './footer.styles.scss'


const Footer = () => {
  return (
    <footer className='footcont'>
      <div className="colcont">
         <div className="col">
       <h4>Cayman Group s.r.l.s</h4>
  	 			<ul>
  	 				<li className='spancol'>Cayman Group è partner di Enel Energia, con sede a Palermo in via Notarbartolo 9/D. 
            I Negozi SEP "Spazio Enel Partner" sono elencati nella sezione "dove siamo" del sito.</li>
  	 			</ul>
  	 		</div>
  	 		<div className="col">
  	 			<h4>Sede principale</h4>
  	 			<ul>
  	 				<li className='spancol'>
            Via Notarbartolo 20,90145 Palermo, Sicilia (ITALIA)
            direzione@caymangroup.it
			+393927498457</li>
         
  	 			</ul>
  	 		</div>
  	 		<div className="col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/caymangroupsrls/"><i className="fab fa-facebook"></i></a>
  	 				<a href="https://www.tiktok.com/@caymangroupsrl?is_from_webapp=1&sender_device=pc"><i className="fab fa-tiktok"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
       </div>
      </div>
      
    </footer>
  )
}

export default Footer