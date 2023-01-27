package com.bossapp.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bossapp.backend.model.Transaction;
import com.bossapp.backend.repository.TransactionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    TransactionRepository transactionRepository;

    @GetMapping("/transactions")
    public ResponseEntity<List<Transaction>> getAlltransactions(@RequestParam(required=false) Long accountId) {
        try {
            List<Transaction> transactions = new ArrayList<Transaction>();

            if( accountId == null)
                transactionRepository.findAll().forEach(transactions::add);
            else
                transactionRepository.findByAccountId(accountId).forEach(transactions::add);

            if(transactions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(transactions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/transactions/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable("id") long id){
        Optional<Transaction> transactionData = transactionRepository.findById(id);

        if(transactionData.isPresent()) {
            return new ResponseEntity<>(transactionData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/transactions")
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction){
        try {
			Transaction _transaction = transactionRepository
					.save(new Transaction(transaction.getId(), transaction.getAccountId(), transaction.getAmount(), transaction.getCategory(), transaction.getMerchant(), transaction.getDate()));
			return new ResponseEntity<>(_transaction, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
    // @PutMapping("/transactions/{id}")
	// public ResponseEntity<Transaction> updateTransaction(@PathVariable("id") long id, @RequestBody Transaction Transaction) {
	// 	Optional<Transaction> TransactionData = transactionRepository.findById(id);

	// 	if (TransactionData.isPresent()) {
	// 		Transaction _Transaction = TransactionData.get();
	// 		_Transaction.setId(Transaction.getId());
	// 		_Transaction.setUsername(Transaction.getUsername());
	// 		_Transaction.setEmail(Transaction.getEmail());
	// 		return new ResponseEntity<>(transactionRepository.save(_Transaction), HttpStatus.OK);
	// 	} else {
	// 		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	// 	}
	// }

	// @DeleteMapping("/transactions/{id}")
	// public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
	// 	try {
	// 		transactionRepository.deleteById(id);
	// 		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

	// @DeleteMapping("/transactions")
	// public ResponseEntity<HttpStatus> deleteAllTransactions() {
	// 	try {
	// 		transactionRepository.deleteAll();
	// 		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}

	// }
}
