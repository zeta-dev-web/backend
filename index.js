require ("dotenv").config()
const Server = require("./models/server")

const server = new Server()

server.listen()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(3000)
