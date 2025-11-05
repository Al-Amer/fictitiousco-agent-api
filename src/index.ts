import  express  from 'express';
import { agintRouter } from './routes/agent.ts';


const PORT = 3003
const app = express();

app.get("/", (req, res)=>{
    res.send("Hallo MOTO");
})
app.use("/agent", agintRouter);
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})