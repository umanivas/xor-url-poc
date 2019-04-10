const CID = require("cids");
const mHash = require("multihashes");

const getData = (data, typetag, version) => {
  return new Buffer.from(JSON.stringify({ data, typetag, version }));
};

const encData = mHash.encode(getData("hello world", 15001, 1), "sha1");
console.log("TCL: encData", encData);
const cid = new CID(1, 'raw', encData, "base32");
console.log(`safe://${cid.toString()}`)
const decData = mHash.decode(encData).digest;
const realData = JSON.parse(decData);
console.log("TCL: realData", realData)
