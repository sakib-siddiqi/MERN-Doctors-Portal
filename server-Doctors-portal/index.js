const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
/**
 * MIDDLE WARE
 */
app.use(cors());
app.use(express.json());
// ----------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLIENT_URL}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

(async () => {
    /**
    * connect client
    */
    await client.connect();
    /**
     * db and collection
     */
    const DB_doctors_portal = client.db("Doctors-Portal");
    const appointmentsCollection = DB_doctors_portal.collection("appointments");

    /**
     * get appointment
     */
    app.get('/appointments', async (req, res) => {
        const email = req.query.email;
        const appointmnetDate = req.query.appointmnetDate;
        const query = { email, appointmnetDate };
        const cursore = appointmentsCollection.find(query);
        const result = await cursore.toArray();
        res.json(result);
    });
    /**
     * post appointment
     */
    app.post('/appointments', async (req, res) => {
        const appointmentData = req.body;
        const result = await appointmentsCollection.insertOne(appointmentData);
        res.send(result);
    });

})();

app.get("/", (req, res) => res.send("Doctors portal"));
app.listen(port, () => console.log("running"));
