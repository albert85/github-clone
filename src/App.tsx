import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Dashboard from './screens/Home';
import Login from './screens/Login';
import SearchPage from './screens/Search';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' element={<Login />} />
          
          <Route path='/auth/search' element={<SearchPage />} />
          <Route path='/auth/dashboard' element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Ouch the route does not exist!</p>
              </main>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
