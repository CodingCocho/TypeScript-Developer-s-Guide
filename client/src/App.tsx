import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter';
import {connect} from 'react-redux';
import {Todo, fetchTodos } from './actions';
import {StoreState} from './reducers'
// import Test from './components/Test';

interface AppProps
{
  todos: Todo[]
  fetchTodos(): any
}

function _App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter 
      counterStart={7}
      />
      {/* <Test 
      test='Test'
      /> */}
      <button
      onClick={() => props.fetchTodos()}
      >
        Fetch todos?
      </button>
    </div>
  );
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} =>
{
  return {todos: state.todos}
}

export const App = connect(
mapStateToProps,
{fetchTodos}
)(_App)
