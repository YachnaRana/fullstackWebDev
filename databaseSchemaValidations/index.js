const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connection open...")
})
.catch(err =>{   
    console.log("err")
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type:Number,
        required: true,
        min:[0,'price must be positive']
    },
    onSale:{
        type:Boolean,
        default:false
    }
});

productSchema.methods.greet() = function(){
    console.log("hello....yachna here")
}

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({
//     name: "honda",
//     price:999,
//     color:"red"
// })
// bike.save()
// .then(data => console.log(data))
// .catch(err => console.log(err.errors.name.properties.message))

// Product.findOneAndUpdate({name:"honda"}, {price:-12}, {new:true, runValidators:true})
// .then(data => console.log(data))
// .catch(err => console.log(err))