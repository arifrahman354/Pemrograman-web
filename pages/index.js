import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Papaniklan from '../components/Papaniklan'
import Paggination from '../components/Paggination'
import Archives from '../components/Archives'
import Sidebar from '../components/Sidebar'



export default function Home() {
  return (
    <div>
      <Header />
      <br></br>
      <Paggination />
      <Papaniklan />
      
      <main className="container">
      <div className="row">
      <p className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
      From the Firehose
      </h3>      
    
      
      </p>
      <Archives />
  
        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
       {/* <Sidebar />  */}
      </div>
      </main>
       <Footer />
      </div>
    
  )
}
