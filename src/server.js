const express = require('express')
const app = express()
const PORT = 3333
const routes = require('./routes/routes')

require('./database')

app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})