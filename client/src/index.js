import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login';
//import { Home } from './Components/Home';
import { Home2 } from './Components/Home2';
import { TPage } from './Components/Tpage';
import { PPage } from './Components/PPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const envSettings = window;
let system_filters_list = process.env.REACT_APP_SYSTEM_FILTERS_LIST.split(',')
let real_filters_list = process.env.REACT_APP_REAL_FILTERS_LIST.split(',')
let p_system_filters_list=process.env.REACT_APP_SYSTEM_FILTERS_LIST_PPAGE.split(',')
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Home" >
          <Route path="" element={<Home2 />} />
          <Route path="TPage"  >
            <Route path=":t_id">
              <Route path="" element={<TPage />} />
              {/* <Route path='products' element={<Ppage />} /> */}
            </Route>
          </Route>
          {system_filters_list.map((item) =>
              <Route path={`TPage/${item}`}>
                <Route path=":t_id">
                  <Route path="" element={<TPage />} />

                </Route>
              </Route>
          )}
          {real_filters_list.map((item) =>
            <Route path={`TPage/${item}`}>
              <Route path=":t_id">
                <Route path="" element={<TPage />} />

              </Route>
            </Route>
          )}
         



            


          {/* <Route path="" element={<Home2 src_path={process.env.REACT_APP_MAIN_TABLE_ROUTE2} />}  /> */}
          <Route path="P" element={<Home2 src_path={process.env.REACT_APP_MAIN_TABLE_ROUTE2} />} >
            <Route path=":t_id">
              <Route path="" element={<PPage />} />
              {/* <Route path='products' element={<Ppage />} /> */}
            </Route>
          </Route>
          {p_system_filters_list.map((item) =>
              <Route path={`P/${item}`}>
                <Route path=":t_id">
                  <Route path="" element={<PPage />} />

                </Route>
              </Route>
          )}


        </Route>


        






{/* 
        <Route path="PPage"  >
            <Route path=":t_id">
              <Route path="" element={<TPage />} />
            </Route>
          </Route>
          {system_filters_list.map((item) =>
              <Route path={`PPage/${item}`}>
                <Route path=":t_id">
                  <Route path="" element={<TPage />} />

                </Route>
              </Route>
          )}
 */}




{/* 
        <Route path={process.env.REACT_APP_SIDE_BAR2_ROUTE} element={<Home2 src_path={process.env.REACT_APP_SIDE_BAR2_ROUTE} />} >
        <Route path="PPage"  >
            <Route path=":t_id">
              <Route path="" element={<TPage />} />
             
            </Route>
          </Route>
          {system_filters_list.map((item) =>
            <Route path={`PPage/${item}`}>
              <Route path=":t_id">
                <Route path="" element={<TPage />} />

              </Route>
            </Route>
          )}
          {real_filters_list.map((item) =>
            <Route path={`PPage/${item}`}>
              <Route path=":t_id">
                <Route path="" element={<TPage />} />

              </Route>
            </Route>
          )}


        </Route> */}
        
        
        
        
    
        <Route path={process.env.REACT_APP_SIDE_BAR3_ROUTE} element={<Home2 src_path={process.env.REACT_APP_SIDE_BAR3_ROUTE} />} />
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

//import {createRoot} from 'react-dom/client';
//import App from './App';
/*import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


