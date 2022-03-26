import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <Article></Article>
    </div>
  );
}

export default App;