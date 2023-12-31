import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, useLocation} from "react-router-dom";
import {allCharacters, deleteCharacter} from "./redux/actions/actions";
import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Favorites from "./components/favorites/Favorites";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
import "./App.css"

const App = () => {
  const {pathname} = useLocation();

  const {characters} = useSelector((state) => state);

  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(deleteCharacter(id));
  };

  useEffect(() => {
    dispatch(allCharacters());
  }, []);

  const paths = ["/", "/about", "/detail:id", "/favorites"];

  return (
    <div className='App'>
      {paths.includes(pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/login" element={<Form />}/>
        <Route path="/register" element={<Form />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
