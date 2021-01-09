const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/personName', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connection open...")
})
.catch(err =>{   
    console.log("err")
})

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

// personSchema.virtual('fullName').get(function(){
//     return `${this.first} ${this.last}`
// })
// personSchema.virtual('fullName').set(function(v){
//     this.first = v.substr(0, v.indexOf(' '));
//     this.last = v.substr(v.indexOf(' ')+1);
// });

personSchema.pre('save', async function(){
    console.log(`${this.first} ${this.last}`);
    console.log('about to save...');
    console.log('********************')
})
personSchema.post('save', async function(){
    this.first = 'yo';
    this.last = 'mama';
    console.log('...saved already...');
    console.log(`${this.first} ${this.last}`);
    console.log('********************')  
})

const Person = mongoose.model('Person', personSchema);


































// const productSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minlength:5,
//         uppercase:true
//     },
//     price:{
//         type:Number,
//         required:true,
//         min:[0, 'why want to add negativity lol']
//     },
//     onSale:{
//         type:Boolean,
//         default:false
//     },
//     catagories: [String],
//     qty:{
//         online:{
//             type:Number,
//             default:0
//         },
//         offline:{
//             type:Number,
//             default:5
//         }
//     },
//     size:{
//         type:String,
//         enum:['s','m','l']
//     }
// })
// productSchema.methods.changeQty = function(newQty){
//     this.qty.offline = newQty;
//     return this.save();
// }
// productSchema.methods.toggleSale = function(){
//     if(this.onSale === false){
//         return this.changeQty(444);
//     }
//     else{
//         return this.changeQty(555);
//     } 
// }
// productSchema.methods.addCatagory = function(addCat){
//     this.catagories.push(addCat);
//     return this.save()
// }

// productSchema.statics.changeIt = function(){
//     return this.updateMany({},{onSale:true, price:0})
// }

// const Product = mongoose.model("Product",productSchema);

// const findProduct = async ()=>{
//     const foundProduct =await Product.findOne({name: 'scooty'});
//     console.log(foundProduct);
//     await foundProduct.toggleSale();
//     // await foundProduct.addCatagory('bikin');
//     // await foundProduct.changeQty(10000000000000)
//     console.log(foundProduct);
// }
// Product.changeIt().then(data=>console.log(data))

// findProduct();



// const scooty = new Product({
//     name:"scooty",
//     price:'30',
//     size:'s'
// })
// scooty.save()
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


