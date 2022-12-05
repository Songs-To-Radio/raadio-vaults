import axios from "axios";
import config from "../config.js";

export function parseUrl(link) {
    link = link.replace("ipfs://", "");
    return config.IPFS_GATEWAY + "/" + link;
}

export default class MaskedStream {
    maskStream(url, res, countStream){
        axios({
            method: "get",
            url: parseUrl(url),
            responseType: "stream",
        })
        .then((response)=>{
            countStream()
            res.writeHead(200, response.headers)
            response.data.pipe(res);
        }).catch(error=>{
            console.log(error);
        })
    }
}