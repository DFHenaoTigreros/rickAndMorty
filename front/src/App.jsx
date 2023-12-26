import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {removeFav, allCharacters} from "./redux/actions/actions";
import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Favorites from "./components/favorites/Favorites";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav"
import "./App.css"

const App = () => {
  const {pathname} = useLocation();

  const navigate = useNavigate();

  const {characters} = useSelector((state) => state);

  const [access, setAccess] = useState(false);

  const dispatch = useDispatch();

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id != id))
    dispatch(removeFav(id))
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const {data} = await axios(URL + `?email=${email}&password=${password}`);
      const {access} = data;
      setAccess(data);
      access && navigate('/');
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {
    dispatch(allCharacters());
    !access;
  }, [access]);

  return (
    <div className='App'>
      {pathname !== "/login" && <Nav />}
      <Routes>
        <Route path="/login" element={<Form login={login}/>}/>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
