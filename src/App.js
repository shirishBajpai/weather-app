import Weather from "./components/index.jsx";
import { Provider } from "react-redux";
import store from "./store/Store.js";

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
