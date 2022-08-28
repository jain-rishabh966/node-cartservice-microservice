const express = require('express');
const axiosClient = require('../src/axiosClient');

const router = express.Router();

const baseUrl = 'http://localhost:3001/carts';

router.post('/', (req, res, next) => {
  try {
    axiosClient.post(baseUrl + '/', req.body).then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    axiosClient.get(baseUrl + req.url)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.post('/add', (req, res, next) => {
  try {
    axiosClient.post(baseUrl + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.delete('/remove', (req, res, next) => {
  try {
    axiosClient.delete(baseUrl + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.post('/checkout/:id', (req, res, next) => {
  try {
    axiosClient.post(baseUrl + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
