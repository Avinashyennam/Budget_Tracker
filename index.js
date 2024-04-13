const express = require('express');
const app = express();
const port = 5000;
const collection = require('./db');
const cors = require('cors');
const path = require('path');
const corsOption = {
    origin: "http://localhost:3000",
    methods: "GET, PUT, POST, DELETE, HEAD, PATCH",
    credentials: true
}
app.use(cors(corsOption));
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello avinash");
// })

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "_frontend", "build")));
    res.sendFile(path.resolve(__dirname, "_frontend", "build", "index.html"));
});


app.post("/credit", async (req, res) => {
    console.log("hey im from backend");

    const { amount, desc, date } = req.body;
    const document = {
        amount: amount,
        description: desc,
        date: date,
    };
    await collection.insertMany(document);
    return res.send("Amount credited");
});
app.post("/debit", async (req, res) => {
    const { amount, desc, date } = req.body;
    const document = {
        amount: amount,
        description: desc,
        date: date,
    }
    await collection.insertMany(document);
    return res.send("Amount debited");
})
app.get("/getData", async (req, res) => {
    const data = await collection.find();
    data.forEach((item) => {
        item.date = item.date.toLocaleDateString();
    })
    res.type('application/json');
    res.json(data);
})
app.listen(port, () => {
    console.log(`port is running on the port ${port}`);
})
