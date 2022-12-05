import { NFTStorage, File } from 'nft.storage'
import axios from 'axios'
import config from "../config.js";


class MetaData {
    metaData = {}
    blobs = {};
    url = null;

    constructor (md, blb, crd){
        this.metaData = md;
        this.blobs = blb;
        this.credentials = crd
    }

    async uploadBlobsToIpfs(){
        
    }

    async uploadMetadataToIpfs(){
        const client = new NFTStorage({ token: config.NFT_STORAGE_TOKEN })
        const metadata = await client.store({
            ...this.metaData,
        });
        this.url = metadata.url;
        return this.url;
    }

    getUrl(){
        return this.url
    }
}

MetaData.prototype.getMetadata = async (url)=>{
    let cid = url.split("ipfs://")[1];
    let response = await axios(`${config.IPFS_GATEWAY}/${cid}`)
    if(response.status == 200) {
        return response.data;
    }else {
        return null;
    }
}

MetaData.prototype.getMediaLink = (url)=>{
    let cid = url.split("ipfs://")[1];
    return `${config.IPFS_GATEWAY}/${cid}`;
}

export default MetaData;