const express = require('express');
const axiosClient = require('../src/axiosClient');
const router = express.Router();

const baseUrl = 'http://localhost:3004/users';

router.post('/login', (req, res, next) => {
  try {
    axiosClient.post(baseUrl + '/login', req.body).then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);    
  }
});

router.post('/logout', (req, res, next) => {
  try {
    axiosClient.post(baseUrl + '/logout', req.body).then(e => res.status(e.status).send(e.data));
  } catch (error) {
    next(error);    
  }
});

module.exports = router;
