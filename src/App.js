import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Redux from './pages/Redux';
import Tambah from './pages/Tambah';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navigation />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/detail" children={() => <Detail />} />
          <Route path="/edit" children={() => <Edit />} />
          <Route path="/tambah" children={() => <Tambah />} />
        </Switch> */}
        <Redux/>
      </BrowserRouter>
    </div>
  )
}

export default App;