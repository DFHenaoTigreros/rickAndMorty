import {useState, useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Nav from "./components/nav/Nav"
import Cards from "./components/cards/Cards";
import "./App.css";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";

const App = () => {
  const EMAIL = "davidhenao3105@gmail.com";

  const PASSWORD = "Dafeheti31";

  const {pathname} = useLocation();

  const navigate = useNavigate();

  const [characters, setCharacters] = useState([])

  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      if (!characters.some((character) => character.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    })
    .catch(() => alert('¡No hay personajes con este ID!'))
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => {
      return character.id != id;
    }))
  };

  const login = (userData) => {
    if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  return (
    <div className='App'>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
