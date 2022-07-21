import { Routes, Route } from "react-router-dom";

import './App.css';
import Masthead from "./routes/masthead/masthead.component";

import { GlobalStyle } from "./global.styles";

const App = () => {
  return(
    <div>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Masthead />}>
      </Route>
    </Routes>
    </div>
  )
}
export default App;
