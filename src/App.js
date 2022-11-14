
import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1        
        animate={{ y: 0 }}>
        Todo List
      </motion.h1>      
        <Todos />
        <DisplayTodos />
     
    </div>
  );
}

export default App;

