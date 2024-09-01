const incomeSchema = require("../models/incomemodel")

//add income
exports.addIncome = async (req,res) => {
    const {title, amount, category, description, date} = req.body
    const income = incomeSchema({
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
        await income.save()
        res.status(200).json({message:"Income saved successfully!"})
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}


//Get income 
exports.getIncome = async (req,res) => {
    try{
        const incomes = await incomeSchema.find().sort({createdAt: -1  })
        res.status(200).json(incomes)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete income
exports.deleteIncome = async (req, res) => {
    try {
        const { id } = req.params; // Destructure the id directly
        const deletedIncome = await incomeSchema.findByIdAndDelete(id); // Use await for better handling
        
        if (!deletedIncome) {
            return res.status(404).json({ message: "Income not found!" });
        }

        res.status(200).json({ message: "Income deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};