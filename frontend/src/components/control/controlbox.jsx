import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
const success = (message) => toast.success(message);
const failure = (message) => toast.error(message);

export default function ControlBox() {
  const [url, setURL] = useState("");
  async function addUrl(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        websiteUrl: url,
      }),
    };
    const result = await fetch("http://localhost:8080/", options);
    const data = await result.json();
    if (data.error) {
      failure(data.detail);
    } else {
      success(data.detail);
    }
    setTimeout(() => {
      window.location = "/";
    }, 500);
  }
  function setUrl(event) {
    setURL(event.target.value);
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="New URL"
        variant="filled"
        value={url}
        onChange={setUrl}
      />
      <Button onClick={addUrl}> Add a Site </Button>
    </Box>
  );
}
