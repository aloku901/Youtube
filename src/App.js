import { AppContext } from './context/contextAPI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
// 'adf3da73b5msh84b679e74186446p195b7fjsnb3b303de99ff'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
