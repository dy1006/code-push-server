// Create service client module using CommonJS syntax.
const { S3Client } = require("@aws-sdk/client-s3");
var config = require("../config");
var _ = require("lodash");

// Create an Amazon S3 service client object.
const s3 = new S3Client({
  region: _.get(config, "s3.region"),
  credentials: {
    accessKeyId: _.get(config, "s3.accessKeyId"),
    secretAccessKey: _.get(config, "s3.secretAccessKey"),
  },
});
// Export 's3' constant.
module.exports = { s3 };
