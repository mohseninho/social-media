import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile"
import {Routes , Route} from 'react-router-dom'
function App() {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default App;
