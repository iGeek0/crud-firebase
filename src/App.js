import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { NavLink } from 'react-router-dom';
function App() {
  // topbar: https://www.w3schools.com/howto/howto_js_topnav.asp
  return (
    <BrowserRouter>
      <div className="app">
        <div className="topnav">
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/tabla'>Tabla</NavLink>
          <NavLink to='/formulario'>Formulario</NavLink>
        </div>

        <div className="container" style={{ marginTop: '10rem' }}>
          <div className="row align-items-center">
            <div className="col-12">
              <AppRouter>
              </AppRouter>


            </div>
          </div>
        </div>
      </div>



    </BrowserRouter>

  );
}

export default App;
