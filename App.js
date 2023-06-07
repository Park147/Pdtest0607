import './App.css';
import ItemsPage from './ch17-pdtest/pages/ItemsPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<ItemsPage/>}/>
    <Route path="/:category" element={<ItemsPage/>}/>
  </Routes>
);
}

export default App;
