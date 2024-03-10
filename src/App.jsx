import Compo2 from "./Compo2.jsx";
import { useState } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./reducers";
function App() {
  const store = createStore(
    combineReducers({
      reducerCommentaire: reducers,
    }),
  );
  return (
    <Provider store={store}>
      <Compo2 />
    </Provider>
  );
}

export default App;
