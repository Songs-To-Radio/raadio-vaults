import { model, Schema, connect } from "mongoose";
import web2MetadataSchema from "./shemas/web2_metadata_schema.js";

export default class Database {
  MediaModel = model(
    "metadataRecord",
    new Schema(
      {
        ipfsUrl: {
          type: String,
          required: true,
          unique: true,
        },

        controller: {
          type: String,
          required: true,
        },

        mediaTitle: {
          type: String,
          required: true,
        },

        streamCount: {
          type: Number,
          default: 0,
        },

        clients: {
          type: [String],
          default: [],
        },

        regions: {
          type: [String],
          default: [],
        },

        blackList: {
          type: [String],
          default: [],
        },
      },
      { timestamps: true }
    )
  );

  UserModel = model(
    "user",
    new Schema(
      {
        controller: {
          type: String,
          required: true,
        },

        whiteList: {
          type: [String],
          default: ["localhost:3001"],
        },

        blackList: {
          type: [String],
          default: [],
        },
      },
      { timestamps: true }
    )
  );

  Web2MetadataModel = model("musicMetadata", web2MetadataSchema);

  saveTrials = 6;

  async save(ipfsUrl, controller, mediaTitle) {
    try {
      let toSave = new this.MediaModel({ ipfsUrl, controller, mediaTitle });
      await toSave.save();
    } catch (error) {
      throw(error);
    }
  }

  async getMetadataRecord(field, value) {
    try {
      let doc = await this.MediaModel.findOne({ [field]: value }).exec();
      return doc;
    } catch (error) {
      console.log(error);
    }
  }

  async getMetadataRecordById(id) {
    try {
      let doc = await this.MediaModel.findById(id).exec();
      return doc;
    } catch (error) {
      throw(error)
    }
  }

  async getUserMetadataRecords(id) {
    try {
      let docs = await this.MediaModel.find({controller: id}).exec();
      let values = [];
      docs.forEach((doc)=>{
        values.push(doc);
      });
      return values;
    } catch (error) {
      throw(error);
    }
  }

  async incrementStreamCount(id){
    try {
       let doc = await this.MediaModel.findById(id).exec();
       doc.$inc("streamCount", 1);
       await doc.save();
       return doc;
    }catch(error){
        console.log(error);
    }
  }

  async getUserById(id){
    try {
      let doc = await this.UserModel.findById(id).exec();
      return doc
    } catch (error) {
      throw(error);
    }
  }

  async getUser(field, value){
    try {
      let doc = await this.UserModel.findOne({[field]: value}).exec();
      return doc;
    } catch (error) {
      throw(error);
    }
  }

  async checkWhiteList(id, domain){
    try {
      let doc = await this.getUserById(id);
      let whiteList = doc.whiteList;
      return whiteList.includes(domain);
    } catch (error) {
      throw(error);
    }
  }

  async whiteListDomain(id, domain){
    try {
      let doc = await this.getUserById(id);
      doc.whiteList.includes(domain) || doc.whiteList.push(domain);
      await doc.save();
    } catch (error) {
      throw(error);
    }
  }

  async removeFromWhiteList(id, domain){
    try {
      let doc = await this.getUserById(id);
      doc.whiteList.includes(domain) && doc.whiteList.splice(doc.whiteList.indexOf(domain), 1);
      await doc.save();
    } catch (error) {
      throw(error);
    }
  }


  async addUser(controller) {
    try {
      let toSave = new this.UserModel({controller});
      await toSave.save();
    } catch (error) {
      throw(error);
    }
  }
}
