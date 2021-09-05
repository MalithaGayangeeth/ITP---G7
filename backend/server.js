const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db')
const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/store', require('./routes/api/store'));

require('./models');

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
