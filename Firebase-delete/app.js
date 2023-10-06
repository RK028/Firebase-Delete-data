
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const firebase = require('firebase/database')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://curd-798f5-default-rtdb.firebaseio.com"
});

const express = require('express');
const cors = require('cors');
const app = express();
const Port = 8000;
app.use(express());
app.use(express.json());
app.use(cors())

const db = admin.database();


const adminRef = db.ref("/Admin");

app.post('/signin', (req, res) => {
  const { phoneNumber } = req.body;
  adminRef.orderByChild("phoneNumber").equalTo(phoneNumber).once('value', (snapshot) => {
    const admin = snapshot.val();
    console.log(admin);
    if (admin) {
      res.json(admin) ;
    } else {
      res.status(403).send("Invalid phone number");
    }
  });
});

app.get('/Admin/:id', (req, res) => {
  const adminId = req.params.id;
  const adminData = adminRef.child(adminId);
  adminData.once('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Admin not found");
    }
  });
});

app.put('/admin/:id', (req, res) => {
  const adminId = req.params.id;
  const newData = req.body;
  adminRef.child(adminId).update(newData, (error) => {
    if (error) {
      res.status(500).send("Error updating admin data: " + error);
    } else {
      res.status(200).send("Admin data updated successfully");
    }
  });
});

app.delete('/admin/:id', (req, res) => {
  const adminId = req.params.id;
  const adminData = adminRef.child(adminId);
  adminData.remove((error) => {
    if (error) {
      res.status(500).send("Error deleting store data: " + error);
    } else {
      res.status(200).send("Store data deleted successfully");
    }
  });
});

app.listen(Port, ()=>{
    try {
        console.log("Port is Runing");
    } catch (error) {
        console.log("Port is Not Runing" + error);
    }
})

