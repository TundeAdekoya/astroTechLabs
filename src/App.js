import {Routes, Route} from 'react-router-dom'
import  NavBar from './Component/Navbar'
import  Footer from './Component/Footer'
import  LandingPage from './Component/LandingPage'
import  ReportPage from './Component/ReportPage'
import  PageNotFound from './Component/PageNotFound'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact element = {<LandingPage/>}/>
        <Route path='/Report' exact element = {<ReportPage/>}/>
        <Route path='*' exact element = {<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
