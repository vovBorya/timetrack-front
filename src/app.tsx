import React from "react";

import Navbar from "./components/navbar";
import WorksPage from "./pages/works-page";
import ArchivePage from "./pages/archive-page";

import './app.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';

type Props = {

};

const App: React.FC<Props> = ({}) => (
  <Router>
    <Navbar/>
    <Route path='/works/:id?' component={WorksPage}/>
    <Route path='/archive' component={ArchivePage}/>
  </Router>
);

export default App;