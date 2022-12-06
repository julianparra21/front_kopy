
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Form from '../pages/Form'
import Nosotros from '../pages/Nosotros'
import Catalogo from '../pages/Catalogo';
import Categoria from '../pages/Categorias';
import NotNull from '../pages/notNull';
import Naveg from '../components/navegador';
import Footer from '../components/footer';

function App() {
  
  return (

  <BrowserRouter>

  <Naveg/>

  <Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/Nosotros' element={<Nosotros/>}/>
  <Route path='/Catalogo' element={<Catalogo/>}/>
  <Route path='/Categoria' element={<Categoria/>}/>
  <Route path='*' element={<NotNull/>}/>
 </Routes>

 <Footer/>
 </BrowserRouter>

);

}

export default App;
