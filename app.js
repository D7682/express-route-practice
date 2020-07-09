const express = require('express');
const app = express();

//Routes
app.use('/', require('./routes/index'));
app.use('/data', require('./routes/data'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))