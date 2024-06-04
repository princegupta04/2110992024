const express=require("express");
const app=express();

app.use(express.json());

const authRote=require("./routes/auth");
app.use("/auth",authRote);

app.listen(3000,()=>{
    console.log("Server is running")
})