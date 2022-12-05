import { NFTStorage, File } from "nft.storage";
import axios from "axios";
import { v4 } from "uuid";

export const endPoint = "http://localhost:2000";
export const nftStorageEndPoint = "https://nftstorage.link/ipfs";

async function uploadToServer(ipfsUrl, wallet_address, title) {
  try {
    let res = await fetch(`${endPoint}/create-vault`, {
      method: "POST",
      body: JSON.stringify({
        controller: wallet_address,
        ipfsUrl,
        mediaTitle: title,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    return res.status;
  } catch (error) {
    throw error;
  }
}

const API_KEY =
  process.env.NFT_STORAGE_API_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE5M0I4NGFlNThkMDNkOTAwQjc5MzExOGEzNDQ2ZEZCZUU5NTVERmEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MTUxMDYyMDg2MCwibmFtZSI6IlNUUiAtIE1hcmtldHBsYWNlICJ9.D71kmGtnh1wOLBF2BfVqMtuCPk79wvEiFxuhpuKgqwA";
const client = new NFTStorage({ token: API_KEY });

export async function uploadToIpfsAndServer(
  image,
  name,
  description,
  wallet_address,
  web2
) {
  try {
    let url = URL.createObjectURL(image);
    let res = await fetch(url);
    let blob = await res.blob();
    const content = new File([image], v4() + "." + blob.type.split("/")[1]);

    const baseURI = await client.store({
      name,
      video: content,
      image: content,
      description,
      description,
      collection: name,
      web2_metadata: web2,
    });
    console.log(baseURI);
    return await uploadToServer(baseURI.url, wallet_address, name);
  } catch (error) {
    throw error;
  }
}

export async function getVaults(address) {
  try {
    let res = await fetch(`${endPoint}/get-vaults/${address}`);
    // if(res.status != 200 || res.status != 201) throw(res);
    res = await res.json();
    return res;
  } catch (error) {
    throw error;
  }
}

export function parseUrl(link, neg) {
  link = link.replace("ipfs://", "");
  if (neg) return link;
  return nftStorageEndPoint + "/" + link;
}

export async function getMetadata(link, id) {
  try {
    link = link.replace("ipfs://", "");
    link = nftStorageEndPoint + "/" + link;
    let res = await axios(link);
    let res2;
    if (id) {
      res2 = await axios(`${endPoint}/metadata/${id}`);
    }
    return id ? res2.data : res.data;
  } catch (error) {
    throw error;
  }
}

export async function getUser(addr) {
  try {
    let res = await axios(`${endPoint}/get-user/${addr}`);
    if (res.status != 200) {
      throw "error";
    }
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function saveWhiteList(whitelist, addr) {
  try {
    let res = await fetch(`${endPoint}/edit-user/${addr}`, {
      method: "POST",
      body: JSON.stringify(whitelist),
      headers: {
        "content-type": "application/json",
      },
    });
    if(res.status != 200) throw("error");
    return await res.json();
  } catch (error) {
    throw error;
  }
}
