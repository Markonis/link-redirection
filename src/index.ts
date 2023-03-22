import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Link redirection service is running!');
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
