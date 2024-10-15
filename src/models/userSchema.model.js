const mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    displayName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, "passord is required"],
        minlength: [8, "password lenght minimum 8 character"]
    },
    phoneNumber:{
        type: String,
        unique: true
    },
    emailVerified:{
        type: Date,
    },
    resetPasswordToken :{
        type: String
    },
    role:{
        type: String,
        enum: ["user", "seller", "admin", "edditor"],
        lowercase: true
    },
    address:[
        {street: String}, {postalCode: String},{district: String},{country: String}, 
    ]
},{
    timestamps: true
})

export const User = mongoose.model("User", userSchema)
