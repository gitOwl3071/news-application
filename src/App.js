import './App.css';
import NavigationBar from './components/NavigationBar';
import News from './components/News';
import MarqueeText  from './components/MarqueeText';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Sports from './components/Sports';
import Health from './components/Health';
import Politics from './components/Politics';
import Technology from './components/Technology';
import Entertainment from './components/Entertainment';
import Science from './components/Science';
import India from './components/India';
import USA from './components/USA';
import Australia from './components/Australia';
import Belgium from './components/Belgium';
import Canada from './components/Canada';
import China from './components/China';
import France from './components/France';
import NewZealand from './components/NewZealand';
import Russia from './components/Russia';
import UK from './components/UK';
import Germany from './components/Germany';
import Israel from './components/Israel';
import Netherlands from './components/Netherlands';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const [progress,setProgress] = useState(0);
  return(
    <>
    <LoadingBar height={10} color= "red" progress={progress + 100} />
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route exact path="/" element={<News />}></Route>
    <Route exact path='/AboutUs' element = {<AboutUs/>}></Route>
    <Route exact path='/Entertainment' element = {<Entertainment/>}></Route>
    <Route exact path='/Health' element = {<Health/>}></Route>
    <Route exact path='/Politics' element = {<Politics/>}></Route>
    <Route exact path='/Science' element = {<Science/>}></Route>
    <Route exact path='/Sports' element = {<Sports/>}></Route>
    <Route exact path='/Technology' element = {<Technology/>}></Route>
    <Route exact path='/News' element = {<News/>}></Route>
    <Route exact path='/Australia' element = {<Australia/>}></Route>
    <Route exact path='/Belgium' element = {<Belgium/>}></Route>
    <Route exact path='/Canada' element = {<Canada/>}></Route>
    <Route exact path='/China' element = {<China/>}></Route>
    <Route exact path='/France' element = {<France/>}></Route>
    <Route exact path='/Germany' element = {<Germany/>}></Route>
    <Route exact path='/India' element = {<India/>}></Route>
    <Route exact path='/Israel' element = {<Israel/>}></Route>
    <Route exact path='/Netherlands' element = {<Netherlands/>}></Route>
    <Route exact path='/NewZealand' element = {<NewZealand/>}></Route>
    <Route exact path='/Russia' element = {<Russia/>}></Route>
    <Route exact path='/UK' element = {<UK/>}></Route>
    <Route exact path='/USA' element = {<USA/>}></Route>
    </Routes>
    <SocialButtons/>
    <Footer/>


    <MarqueeText/>
    </BrowserRouter>
    </>
  );
}

export default App;