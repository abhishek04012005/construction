import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import compression from 'compression';
import cors from 'cors'

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Enable compression
  server.use(compression());

  // Enable CORS
  server.use(cors());

  // Serve static files
  server.use(express.static(path.join(__dirname, 'public')));

  // API routes
  server.use('/api', express.json());

  // Handle contact form submissions
  server.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Your contact form handling logic here
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  });

  // Default catch-all handler
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Error handling
  server.use((err: any, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});