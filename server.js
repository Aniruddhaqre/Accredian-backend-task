const express = require("express");
const bodyParser = require("body-parser");
const referralRoute = require("./routes/referralRoute");
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())

// RESTful endpoints
app.use("/api/referral" , referralRoute);

app.get("/test" , (req, res) => {
    res.status(200).send({msg: 'Working Test OK'})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
