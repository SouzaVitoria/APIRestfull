var express = require('express');
var restify = require('restify-clients');
var assert = require('assert');
var router = express.Router();

// Creates a JSON client - Declaração de onde esta o serviço
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.get('/users', function(err, request, response, obj) { //Rota para API - 
    assert.ifError(err); //Assert módulo
    res.end(JSON.stringify(obj, null, 2)); //Colocar na tela o objeto, tela do EXPRESS por isso é o res
  });
});

module.exports = router;
