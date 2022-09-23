

import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
        <h1>New App Redux</h1>
        <TaskList />
        <TaskForm />
        <Task />
    </div>
  );
}

export default App;
