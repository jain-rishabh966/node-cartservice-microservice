const express = require('express');
const router = express.Router();

const axiosClient = require('../src/axiosClient');

const basePath = 'http://localhost:3002/payments'

router.post('/', (req, res, next) => {
  try {
    axiosClient.post(basePath + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.get('/status', (req, res, next) => {
  try {
    axiosClient.get(basePath + req.url)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
