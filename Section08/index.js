const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes, QuotesRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");

server.use(express.static("./public")); // Haciendo publica la ruta.
server.use(express.json()); // Formato JSON.

server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Application it's OK, running on PORT ${PORT}`);
});
