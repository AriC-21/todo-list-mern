import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import { CreateTodo } from './components/createTodo';
import {ShowTodoList} from './components/showTodoList';

function App() {
  return (
    <div className="App-contents">
      <BrowserRouter>
        <Route exact path="/" component={ShowTodoList} />
        <Route exact path="/create-todo" component={CreateTodo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
