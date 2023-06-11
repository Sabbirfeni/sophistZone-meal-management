import './App.css'
import { RouterProvider } from "react-router-dom";
import route from './Routes/Routes';

function App() {
  return <RouterProvider router={route}/>
}

export default App;
