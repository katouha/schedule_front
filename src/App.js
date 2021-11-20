import logo from './logo.svg';
import './App.css';
import ScheduleLogin from './components/pages/ScheduleLogin';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScheduleLogin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
