const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const session = require('express-session');
app.use(session({
    secret:'thisisnotmysecret',
    resave:false,
    saveUninitialized:false
}));
const flash = require('connect-flash')
app.use(flash());

app.use((req,res,next)=>{
    res.locals.messages = req.flash('success');
    next();
})

const Product = require('./models/product.js')
const Farm = require('./models/farm.js')

mongoose.connect('mongodb://localhost:27017/farmStandTake2', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongo connection open...")
})
.catch(err =>{   
    console.log("mongo error")
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));


//farm routes
app.get('/farms',async (req, res)=>{
    const farms =await Farm.find({});
    res.render('farms/index',{farms})
})
app.get('/farms/new', (req, res)=>{
    res.render('farms/new');
})
app.get('/farms/:id',async (req, res)=>{
    const farm =await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{farm})
})

app.post('/farms',async (req, res)=>{
    const farm = new Farm(req.body);
    await farm.save()
    req.flash('success', 'successfully made a farm')
    res.redirect('/farms')
})
app.get('/farms/:id/products/new',async (req, res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{catagories,farm})
})
app.post('/farms/:id/products',async (req, res)=>{
    const {id} = req.params;
    const {name, price, catagory} = req.body;
    const farm =await Farm.findById(id)
    const product =new Product({name, price, catagory});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    req.flash('success', 'successfully made a product')
    res.redirect(`/farms/${id}`)
})
app.delete('/farms/:id',async (req, res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})













const catagories = ['fruit', 'vegetable', 'dairy', 'bread', 'mushroom'];
//index
app.get('/products', async (req,res)=>{
    const {catagory} = req.query;
    if(catagory){
        const products = await Product.find({catagory});
        res.render("products/index",{products, catagory});
    }else{
        const products = await Product.find({});
        res.render("products/index",{products, catagory:'All'});
    }
})
//new route
app.get('/products/new', (req, res)=>{
    res.render('products/new',{catagories})
})
//show route
app.get('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id).populate('farm','name')
    res.render('products/show',{foundProduct})
})
//post route
app.post('/products', async (req, res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})
//edit route
app.get('/products/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id)
    res.render('products/edit',{foundProduct,catagories})
})
//patch
app.put('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{runValidators:true, new:true});
    console.log(updatedProduct)
    res.redirect(`/products/${updatedProduct._id}`)
})
app.delete('/products/:id', async (req, res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})


app.listen(3000, ()=>{ 
    console.log('app is listening')
})