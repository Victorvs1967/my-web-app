import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Posts from './components/Posts';

const App = () => (
  <Router>
    <div className="container pt-5">
      <Navbar />
    </div>
    <Switch>
      <Route path="/:id" children={<Posts />} />
    </Switch>
  </Router>
);

export default App;
