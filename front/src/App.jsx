import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {removeFav} from "./redux/actions/actions";
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

  const [characters, setCharacters] = useState([])

  const [access, setAccess] = useState(false);

  const dispatch = useDispatch();

  const all = async () => {
    for (let i = 1; i < 827; i++) {
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${i}`)
        if (!characters.some((character) => character.id === i)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {alert('¡Ya Hay personajes con este ID!')}
      } catch (error) {
        alert('¡No hay personajes con este ID!')
      }
    }
  }


  const onSearch = async (id) => {
    if (id === "clean") {
      setCharacters([]);
      return
    }
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (!characters.some((character) => character.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {alert('¡Ya Hay personajes con este ID!')}
    } catch (error) {
      alert('¡No hay personajes con este ID!')
    }
  };

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
      access && navigate('/home');
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {
    !access;
  }, [access]);

  return (
    <div className='App'>
      {pathname !== "/" && <Nav onSearch={onSearch} all={all}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
