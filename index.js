const express = require('express');
const { connectMongoDb } = require('./connection');
const { logReqRes } = require('./middlewares')
const userRouter = require('./routes/user')

const app = express();
const PORT = 8000;

connectMongoDb('mongodb+srv://amansharmaa1205:qVgyzmYYoUJgXC3V@cluster0.gt5brfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Mongo Error', err));

app.use('/api/users', userRouter);

app.use(express.urlencoded({ extended: false}));
app.use(logReqRes('log.txt'));


app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})