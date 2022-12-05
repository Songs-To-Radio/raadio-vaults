import express from "express";
import config from "../config.js";
import Database from "./database.js";
import MaskedStream from "./mask_stream.js";
import MetaData from "./metadata.js";
import bodyParser from "body-parser";
import cors from "cors";

export default class Controller {
  app = express();
  db = new Database();

  initializeListeners() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.get("/metadata/:id", async (req, res) => {
      // let c = req.headers.origin;
      // let d = req.headers.host;

      // console.log(c, d);
      try {
        let id = req.params.id;
        let metadata;
        let record = await this.db.getMetadataRecordById(id);
        if (!record) {
          res.status(404).json({ success: false });
          return;
        }
        let url = record.ipfsUrl;
        metadata = await MetaData.prototype.getMetadata(url);
        if (metadata.video)
          metadata.video = `${config.DOMAIN}/media/video/${id}`;
        if (metadata.image)
          metadata.image = `${config.DOMAIN}/media/video/${id}`;
        if (metadata.audio)
          metadata.audio = `${config.DOMAIN}/media/audio/${id}`;
        res.status(200).json({ ...metadata });
      } catch (error) {
        console.log(error);
        res.status(404).json({ success: false });
      }
    });

    this.app.get("/media/:type/:id", async (req, res) => {
      try {
        let id = req.params.id;
        let type = req.params.type;
        let client = req.headers.referer || req.headers.host;

        
        // res.status(404).json({ success: false });
        client = client.replace("http://", "").replace("https://","").split("/")[0];
        console.log(client);

        let { record, metadata } = await this.getMetadata(id);
        let ipfsUrl = metadata[type];
        if (!ipfsUrl)
          res.status(404).json({ success: false, error: "media not found" });

        let user = await this.db.getUser("controller", record.controller);
        let whiteListed = user ? user.whiteList.includes(client) : true;
        whiteListed &&
          MaskedStream.prototype.maskStream(ipfsUrl, res, async () => {
            record.$inc("streamCount", 1);
            await record.save();
          });
        if (!whiteListed) res.status(403).json({ error: "permission denied" });
      } catch (error) {
        console.log(error);
        res.status(404).json({ success: false });
      }
    });

    this.app.get("/get-user/:address", async (req, res) => {
      try {
        let address = req.params.address;
        let user = await this.db.getUser("controller", address);
        let metadatas = await this.db.getUserMetadataRecords(address);
        if (!user) {
          await this.db.addUser(address);
          user = await this.db.getUser("controller", address);
          metadatas = await this.db.getUserMetadataRecords(address);
        }
        res.status(200).json({ user, metadatas });
      } catch (error) {
        console.log(error);
        res.status(404).json({ error: "User not found" });
      }
    });

    this.app.post("/edit-user/:address", async (req, res) => {
      try {
        let address = req.params.address;
        let whitelist = req.body;
        let user = await this.db.getUser("controller", address);
        if (!user) {
          await this.db.addUser(address);
          user = await this.db.getUser("controller", address);
        }
        user.whiteList = whitelist;
        await user.save();
        let metadatas = await this.db.getUserMetadataRecords(address);
        res.status(200).json({ user, metadatas });
      } catch (error) {
        console.log(error);
        res.status(404).json({ error: "User not found" });
      }
    });

    this.app.post("/create-vault", async (req, res) => {
      try {
        let metadata = req.body;
        console.log(metadata);
        let user = await this.db.getUser("controller", metadata.controller);
        if (!user) {
          await this.db.addUser(metadata.controller);
        }
        let vault = await this.db.save(
          metadata.ipfsUrl,
          metadata.controller,
          metadata.mediaTitle
        );
        res.status(201).end();
      } catch (error) {
        console.log({ error });
        res.status(500).json(error);
      }
    });

    this.app.get("/get-vaults/:address", async (req, res) => {
      try {
        let address = req.params.address;
        let metadatas = await this.db.getUserMetadataRecords(address);
        res.status(200).json({ metadatas });
      } catch (error) {
        console.log({ error });
        res.status(500).json(error);
      }
    });

    this.app.get("/get-vault/:id", async (req, res) => {
      try {
        let id = req.params.id;
        let metadata = await this.db.getMetadataRecordById(id);
        res.status(200).json({ metadata });
      } catch (error) {
        console.log({ error });
        res.status(500).json(error);
      }
    });

    this.app.listen(config.PORT, () => {
      console.log("listening");
    });
  }

  async getMetadata(id) {
    try {
      let record = await this.db.getMetadataRecordById(id);
      let url = record.ipfsUrl;
      let metadata = await MetaData.prototype.getMetadata(url);
      return { record, metadata };
    } catch (error) {
      throw error;
    }
  }
}


/**
 * 
 * 
 */