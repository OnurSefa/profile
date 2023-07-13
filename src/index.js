import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/base.css';
import Navigation from "./Navbar";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Art from "./Art";
import Writings from "./Writings";
import Projects from './Projects';
import Address from "./projects/Address";
import Cfg from "./projects/Cfg";
import Creditcard from "./projects/Creditcard";
import Datastructures from "./projects/Datastructures";
import Decision from "./projects/Decision";
import Expensetype from "./projects/Expensetype";
import Gan from "./projects/Gan";
import Globalmaxima from "./projects/Globalmaxima";
import Identic from "./projects/Identic";
import Minimax from "./projects/Minimax";
import Movie from "./projects/Movie";
import Mpi from "./projects/Mpi";
import Outlier from "./projects/Outlier";
import Payment from "./projects/Payment";
import Pdf from "./projects/Pdf";
import Preprocess from "./projects/Preprocess";
import Qt from "./projects/Qt";
import Question from "./projects/Question";
import Robot from "./projects/Robot";
import Song from "./projects/Song";
import Sync from "./projects/Sync";
import Tents from "./projects/Tents";
import Variable from "./projects/Variable";
import Vd from "./projects/Vd";
import Visualization from "./projects/Visualization";
import Vkn from "./projects/Vkn";
import Watchdog from "./projects/Watchdog";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/art" element={<Art></Art>} />
      <Route path='/writings' element={<Writings></Writings>} />
      <Route path="/projects" element={<Projects></Projects>}/>

      <Route path="/projects/outlier" element={<Outlier></Outlier>}></Route>
      <Route path="/projects/decisiontree" element={<Decision></Decision>}></Route>
      <Route path="/projects/robotlocalization" element={<Robot></Robot>}></Route>
      <Route path="/projects/minimax" element={<Minimax></Minimax>}></Route>
      <Route path="/projects/tentspuzzle" element={<Tents></Tents>}></Route>
      <Route path="/projects/songrecommendation" element={<Song></Song>}></Route>
      <Route path="/projects/paymenttype" element={<Payment></Payment>}></Route>
      <Route path="/projects/creditcard" element={<Creditcard></Creditcard>}></Route>
      <Route path="/projects/taxoffice" element={<Vd></Vd>}></Route>
      <Route path="/projects/pdfreader" element={<Pdf></Pdf>}></Route>
      <Route path="/projects/invoicetype" element={<Expensetype></Expensetype>}></Route>
      <Route path="/projects/address" element={<Address></Address>}></Route>
      <Route path="/projects/variableminimization" element={<Variable></Variable>}></Route>
      <Route path="/projects/syncticket" element={<Sync></Sync>}></Route>
      <Route path="/projects/watchdog" element={<Watchdog></Watchdog>}></Route>
      <Route path="/projects/globalmaxima" element={<Globalmaxima></Globalmaxima>}></Route>
      <Route path="/projects/mpi" element={<Mpi></Mpi>}></Route>
      <Route path="/projects/identic" element={<Identic></Identic>}></Route>
      <Route path="/projects/qtmemorygame" element={<Qt></Qt>}></Route>
      <Route path="/projects/datastructures" element={<Datastructures></Datastructures>}></Route>
      <Route path="/projects/movieapp" element={<Movie></Movie>}></Route>
      <Route path="/projects/generatingart" element={<Gan></Gan>}></Route>
      <Route path="/projects/preprocessing" element={<Preprocess></Preprocess>}></Route>
      <Route path="/projects/grammerparser" element={<Cfg></Cfg>}></Route>
      <Route path="/projects/questionanswer" element={<Question></Question>}></Route>
      <Route path="/projects/taxid" element={<Vkn></Vkn>}></Route>
      <Route path="/projects/pca" element={<Visualization></Visualization>}></Route>

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
