import express, { request, response } from "express"
const app=express();
const port=3000;

app.get("/",(request,response)=>{
response.send("<h1>ji</h1>");
})
app.get("/contact",(req,res)=>{
res.send("<p>my contact:222222</p>");
})
app.get("/about",(req,re)=>{
re.send("<p>my name is pooja</p>");
})
app.listen(port,()=>{
console.log(`servder live at port:${port}`)
})