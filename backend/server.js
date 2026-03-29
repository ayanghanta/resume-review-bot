import "./config.js";
import http from "http";

import app from "./app.js";

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});
