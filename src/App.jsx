import { useState } from "react";

import Left from "./Left/left"
import Right from "./Right/right"
import "/src/styles/utilities.css"
import "/src/styles/style.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainWebsite from "./MainWebsite";
import Resume from "./Resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume/>}></Route>
        <Route path="/resume" element={<MainWebsite/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
