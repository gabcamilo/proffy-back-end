import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
	return res.json({user: 'users'});
});

app.listen(3333);
