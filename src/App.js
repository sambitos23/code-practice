import { useState } from "react";
import { ListUi, Response } from "./components";

function App() {
  const [response, setResponse] = useState([]);
  return (
    <div>
      <Response setResponse={setResponse} />
      <ListUi response={response} />
    </div>
  );
}

export default App;
