const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const multer = require("multer");
const cors = require('cors');
const path = require('path');


const userRoute = require("./controllers/users");
const auths = require("./controllers/auth");
const post = require("./controllers/posts");
const category = require("./controllers/categories");


dotenv.config();
app.use(cors());
app.use("/imsges", express.static(path.join(__dirname,"/imsges")))

mongoose
    .connect(process.env.MONGO_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:true
        })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => { console.log(err); });

const starage=multer.diskStorage({
        destination:(req, file, cb)=> {cd(null,"images")},
        filename:(req, file, cb) =>{cd(null,"hello.jpg")},
})
const upload = multer({starage:starage})
app.post('/api/upload',upload.single("file"),(req, res) =>
{
    res.status(200).json("Your file has been uploaded")
})




// Then use it before your routes are set up:
app.use(express.json());

//calling the controller api
app.use("/api/users", userRoute);
app.use("/api/auth", auths);
app.use("/api/posts", post);
app.use("/api/category", category);

app.listen(5000, () =>
{
    console.log("Backend server is running!");
});
