import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PassportLogin from "./components/Frontpage";
import ErrorPage from './components/ErrorPage';
import Login from './components/User_Login';
import Sign_up from './components/Sign_up';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PassportLogin />} errorElement={<ErrorPage />} />
          <Route path="/user_login" element={<Login />} errorElement={<ErrorPage />} />
          <Route path="/sign_up" element={<Sign_up />} errorElement={<ErrorPage />} />          
        </Routes>
      </div>
    </Router>
  );
}
export default App;
