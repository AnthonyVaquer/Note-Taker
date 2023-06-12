const express = require('express')
const frontEndRoutes = require('./routes/frontEndRoutes')
const backEndRoutes = require('./routes/backEndRoutes')

const app = express()
const PORT = process.env.PORT || 3009;


// middleware
// questions about top 3
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api', backEndRoutes)
app.use('/', frontEndRoutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);