const express = require('express');
const router = express.Router();

const axiosClient = require('../src/axiosClient');

const basePath = 'http://localhost:3003/products';

router.get('/', (req, res, next) => {
  try {
    axiosClient.get(basePath + req.url)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);    
  }
});

router.post('/', (req, res, next) => {
  try {
    axiosClient.post(basePath + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);
  }
});

router.delete('/', (req, res, next) => {
  try {
    axiosClient.delete(basePath + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);    
  }
});

router.patch('/', (req, res, next) => {
  try {
    axiosClient.patch(basePath + req.url, req.body)
      .then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);    
  }
});

module.exports = router;
