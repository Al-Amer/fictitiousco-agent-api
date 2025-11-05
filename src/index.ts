import  express  from 'express';

const PORT = 3003
const app = express();

app.get("/", (req, res)=>{
    res.send("Hallo MOTO");
})

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
})