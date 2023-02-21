const IRC = require('irc-server');
const server = IRC.createServer();

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
// server.listen(6667);
