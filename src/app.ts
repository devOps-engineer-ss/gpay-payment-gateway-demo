import dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";
import express from 'express';
const app = express();
import * as http from 'http';
import bodyParser from "body-parser";
import * as path from 'path';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace * with your allowed domain(s)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.urlencoded({
  extended: true,
  type: 'application/x-www-form-urlencoded'
}));
 
app.get('/v1/api/health', (req, res) => {
  res.send({
    success: true,
    msg: "Gpay Payment Express is successfully running...."
  });
});

app.post('/v1/api/gpay-process-payment', (req, res) => {
  console.log('req.body :>> ', req.body);

  res.send({
    success: true,
    msg: "gpay-process-payment...."
  });
});

// Set up a route to serve your HTML page
app.get('/v1/app/gpay.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'payment', 'gpay.html'));
}); 

// Starting the server on the port
const httpServer = http.createServer(app);
const server = httpServer.listen(process.env.PAYMENT_PORT, function () {
  console.info(`Gpay Payment Express is Listening at -:+++++++${process.env.PAYMENT_PORT}`);
});
server.timeout = 30000;