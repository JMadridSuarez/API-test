const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/tasks.routes");
const cors = require("cors");


const app = express();
//listener
app.listen(4000);
//uses
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);

//middleware err
app.use((err, req,res,next) =>{
    return res.json({
        message: err.message
        
    })
})



console.log("server port 4000");