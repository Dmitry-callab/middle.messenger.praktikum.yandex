import express from 'express';
import { fileURLToPath, URL } from 'node:url'

const app = express();
const PORT = 3000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
    res.sendFile(fileURLToPath(new URL('build/index.html', import.meta.url)));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
