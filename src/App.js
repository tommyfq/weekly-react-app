import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './media/style.scss';

function App() {
  return (
    <div className="container-fluid bgMuted p-0">
      <nav className='navbar sticky-top navbar-light bgPrimaryApp justifyCenter'>
        <h1 className='navbar-brand textLight'>Movie List</h1>
      </nav>
      <List />
    </div>
  );
}

export default App;
