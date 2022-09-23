import {Routes,Route} from 'react-router-dom';
import { Description } from './components/Description';
import { Followers } from './components/Followers';
import { Home } from './components/Home';

export const MainRoute=()=>{
    return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/description' element={<Description />}></Route>
        <Route path='/followers' element={<Followers />}></Route>
    </Routes>
  )
}