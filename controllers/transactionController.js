const express = require('express');
const transactions = express.Router();
const transactionArray = require('../models/transactions')

// INDEX
transactions.get("/",(_,response) => {
    response.status(200).json(transactionArray);
});


//SHOW
transactions.get("/:index", (request, response) => {
    if (transactionArray[request.params.index]) {
      response.json(transactionArray[request.params.index]);
    } else {
      response.redirect("/404");
    }
  });

 //CREATE 
transactions.post('/', (request, response) => {
    transactionArray.push(request.body);
    response.status(200).json(transactionArray);
});

//UPDATE
transactions.put('/:index', (request,response) => {

    if (transactionArray[request.params.index]) {
        transactionArray[request.params.index] = request.body;
        response.status(200).json(transactionArray);
    } else {
        response.status(400).json({error: (`No data found at selected index:${request.params.index}, could not update`)})
    }
});

//DELETE
transactions.delete("/:index", (request, response) => {
    if (transactionArray[request.params.index]) {
      const deletedTransaction = transactionArray.splice(request.params.index, 1);
      response.status(200).json(deletedTransaction);
    } else {
        response.status(401).json({error: (`No data found at selected index:${request.params.index}, could not delete`)})
    }
  });





module.exports = transactions;