const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

//get
router.get('/', (req,res)=>{
    res.send("Hello World!");
})

//post add income 
router.post('/add-income', addIncome);
//get income
router.get('/get-income', getIncome)
//delete income
router.delete('/delete-income/:id', deleteIncome )
//post add expense 
router.post('/add-expense', addExpense);
//get expense
router.get('/get-expense', getExpense)
//delete expense
router.delete('/delete-expense/:id', deleteExpense )

module.exports = router