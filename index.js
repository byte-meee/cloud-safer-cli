const cloud_storage_optimizer = require('cloud-storage-optimizer');
const cloud_safer_cli = require('cloud-safer-cli');
const eslint = require('eslint');
const mocha = require('mocha');
const lodash = require('lodash');
const passport = require('passport');
const bcrypt = require('bcrypt');
const nodemon = require('nodemon');
const jquery = require('jquery');
const mongoose = require('mongoose');
const ethers = require('ethers');
const webpack_cli = require('webpack-cli');
const web3 = require('web3');
const ejs = require('ejs');
const pg = require('pg');
const ethereumjs_util = require('ethereumjs-util');
const xml2js = require('xml2js');
const react_dom = require('react-dom');
const bluebird = require('bluebird');
const sequelize = require('sequelize');

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'password');
let decrypted = decipher.update('5d41402abc4b2a76b9719d911017c592', 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted text:', decrypted);

let count = 0;
const interval = setInterval(() => {
  console.log(`Interval count: ${++count}`);
  if (count === 5) clearInterval(interval);
}, 1000);

const http = require('http');
http.get('http://www.example.com', res => {
  console.log('Response status code:', res.statusCode);
});

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
async function delay() {
  console.log('Start');
  await setTimeoutPromise(2000);
  console.log('End');
}
delay();

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);