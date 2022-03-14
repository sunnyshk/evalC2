const express = require('express');
// const { listen } = require('express/lib/application');
const mongoose = require('mongoose');

const app = express();

const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://juned:adminadmin@cluster0.yarct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    )
}

//User schema 

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String,required:false},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    address:{type:String, required:true},
    gender:{type:String,required:false,default:'customer'},

},
{
    timestamps:true
});

//User Model

const user = mongoose.model('user',userSchema);


//BranchDetail Schema

const BranchDetail = new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true},

},
{
    timestamps:true
});

//branch model 
const branchModel = mongoose.model('branch',BranchDetail)

//MasterAccount Schema

const MasterAccount = new mongoose.Schema({
   balance:{type:Number,required:true},

},
{
    timestamps:true
});

//Master Model

const masterModel = mongoose.model('master',MasterAccount)

//savings account schema

const SavingsAccount = new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},

},
{
    timestamps:true
})

//Saving model

const SavingAc = mongoose.model('savings',SavingsAccount);

//Fixed Account Schema
 const FixedAccount = new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    startDate:{type:Number,required:true},
    maturityDate:{type:Number,required:true}
 },
 {
     timestamps:true
 })



app.listen(5000,()=>{
    console.log('Listening on port 5000')
})