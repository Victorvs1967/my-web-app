import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Posts from './components/Posts';
import SideMenu from './components/SideMenu';

const App = () => (
  <Router>
    <div className="container m-0 pt-5">
      <Navbar />
    </div>
    <div className="row mt-5 px-4">
      <div className="col-8">
        <Switch>
          <Route path="/:id" children={<Posts />} />
        </Switch>
      </div>
      <div className="col-4">
        <SideMenu />
      </div>
    </div>
    <div className="navbar fixed-bottom navbar-light bg-light">
      <h4 className="mx-auto">my blog footer</h4>
    </div>
  </Router>
);

export default App;
