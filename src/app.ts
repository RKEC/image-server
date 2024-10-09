import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

function getPath(imageName: string){
  return path.join(__dirname, `../images/${imageName}`);
}

app.get('/', (req, res) => {
  res.send('Welcome to the richardcode Image Server');
});

app.use('/images', express.static(getPath('charlie.jpeg')));

// app.get('/images/:image', (req, res) => {
//   const imageName = req.params.image;
//   const imagePath = getPath(imageName);

//   if (fs.existsSync(imagePath)) {
//     res.sendFile(imagePath);
//   } else {
//     res.status(404).send('Image not found');
//   }
// })

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});