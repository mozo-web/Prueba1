const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola desde Render ");
});

app.use(express.static("public.zip"));

app.use(express.static("8.jpg"))

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
