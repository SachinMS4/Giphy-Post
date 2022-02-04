import "./App.css";
import DisplayPosts from "./components/DisplayPosts";
import Header from "./components/Header";
import { ItemsProvider } from "./store/context";

function App() {
  return (
    <ItemsProvider>
      <div className="App">
        <Header />
        <div className="display-posts">
          <DisplayPosts />
        </div>
      </div>
    </ItemsProvider>
  );
}

export default App;
