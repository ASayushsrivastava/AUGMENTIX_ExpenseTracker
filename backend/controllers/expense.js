const expenseSchema = require("../models/expenseModel")

//add expense
exports.addExpense = async (req,res) => {
    const {title, amount, category, description, date} = req.body
    const expense = expenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validation
        if(!title ||!amount ||!category ||!description ||!date){
            return res.status(400).json({error: "All fields are required"})
        }
        if(amount <=0 || !amount === 'number' ){
            return res.status(400).json({error: "Enter valid number"});
        }
        await expense.save()
        res.status(200).json({message:"Expense saved successfully!"})
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}


//Get income 
exports.getExpense = async (req,res) => {
    try{
        const expenses = await expenseSchema.find().sort({createdAt: -1  })
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete income
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params; // Destructure the id directly
        const deletedExpense = await expenseSchema.findByIdAndDelete(id); // Use await for better handling
        
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found!" });
        }

        res.status(200).json({ message: "Expense deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};