// Create service client module using ES6 syntax.
import { S3Client } from "@aws-sdk/client-s3";
var config = require("../config");
var _ = require("lodash");

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: _.get(config, "s3.region") });

export { s3Client };
