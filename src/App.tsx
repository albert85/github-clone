import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Dashboard from './screens/Repo';
import Login from './screens/Login';
import SearchPage from './screens/Search';
import User from './screens/User';
import AppLayout from './components/HOC/AppLayout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' element={<Login />} />
          <Route path='/auth/search' element={<SearchPage />} />
            <Route path='/auth/repo' element={<AppLayout>
                <Dashboard />
              </AppLayout>} />
            <Route path='/auth/user' element={<AppLayout>
                <User />
              </AppLayout>} />
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
