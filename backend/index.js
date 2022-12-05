import { connect } from "mongoose";
import config from "./config.js";
import Controller from "./components/controller.js";


connect(`mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.ndxe7ly.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    //initialise server
    new Controller().initializeListeners();
}).catch((error)=>{
    console.log(error);
})