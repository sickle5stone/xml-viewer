import { useState } from "react";
import styled from 'styled-components';

import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  const [PageComponent, setPage] = useState("HomePage");

  const goBackFn = () => {
    setPage("HomePage");
  };

  const routeMap = {
    HomePage: <HomePage setPage={setPage} />,
    AddPage: <AddPage goBackFn={goBackFn} />,
    BrowsePage: <BrowsePage goBackFn={goBackFn} />,
  };

  const App = styled.div`
    height: 100%;
    width: 100%;
  `
  return (
    <App>
      {/* <header className="App-header"> */}
      {/* </header> */}
      {routeMap[PageComponent]}
      {/* {BrowsePage} */}
    </App>
  );
}

export default App;
