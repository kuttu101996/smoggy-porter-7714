const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image: [String],
    name:{
        type:String,
        required:true
    },
    desc: String,
    price: {
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    addedAt:{
        type: Date,
        default: Date.now()
    },
    women: Boolean,
    men: Boolean,
    men_shoe: Boolean,
    women_shoe: Boolean
})

const ProductModel = mongoose.model("product", productSchema)



module.exports = {
    ProductModel
}