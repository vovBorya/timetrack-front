import React from "react";

import Navbar from "./components/navbar";
import WorksPage from "./pages/works-page";

import './app.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';

type Props = {};

const App: React.FC = ({}: Props) => (
  <Router>
    <Navbar/>
    <Route path='/works' component={WorksPage}/>
  </Router>
);

export default App;