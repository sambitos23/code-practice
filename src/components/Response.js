import { useEffect } from "react";
const axios = require("axios").default;

function Response({ setResponse }) {
  useEffect(() => {
    axios
      .get("api/renderMe")
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
}

export default Response;
