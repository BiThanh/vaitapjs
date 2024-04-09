// import logo from './logo.svg';
import './App.css';
import func_jsx_thanh from './components/func_jsx_thanh';

function App() {
  return (
      <section className="App">
        <h1>demo jsx</h1>
        {/* function component demo */}
        <func_jsx_thu />
        <func_jsx_thu fullName="LTH Thanh" age="20" />
      </section>
  );
}

export default App;