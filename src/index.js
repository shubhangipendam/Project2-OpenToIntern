const express = require('express')
const bodyparser = require('body-parser')
const route = require("./routes/router")
const { default: mongoose } = require('mongoose');
const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://yashrajsinh09:yashraj2727@assignment.lhpfmud.mongodb.net/group1Database", {
    useNewUrlParser: true
})
    .then(() => console.log("Mongoose is connected"))
    .catch(err => console.log(err));


app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app runing on port"+(process.env.PORT||3000))

})  
