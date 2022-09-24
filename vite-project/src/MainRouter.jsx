import {Routes,Route} from 'react-router-dom';
import { Description } from './components/Description';
import { FollowerRepos } from './components/FollowerRepos';
import { Followers } from './components/Followers';
import { Home } from './components/Home';

export const MainRoute=()=>{
    return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/followers' element={<Followers />}></Route>
        <Route path='/followerRepos/:username' element={<FollowerRepos />}></Route>
    </Routes>
  )
}