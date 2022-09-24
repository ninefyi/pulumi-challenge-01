import { CdnWebsite } from "./cdn-website";

const website = new CdnWebsite("your-startup", {});

export const websiteUrl = website.url;

// Monitoring with Checkly
// Demonstrates Standard Package usage
import * as checkly from "@checkly/pulumi";
import * as fs from "fs";

new checkly.Check("index-page", {
  activated: true,
  frequency: 10,
  type: "BROWSER",
  locations: ["eu-west-2"],
  script: websiteUrl.apply((url) =>
    fs
      .readFileSync("checkly-embed.js")
      .toString("utf8")
      .replace("{{websiteUrl}}", url)
  ),
});

// Comment out of below line of code for first time run!!!!
// import { Swag } from "./swag-provider";

// const swag = new Swag("your-startup", {
//   name: "<YOUR NAME>",
//   email: "<YOUR EMAIL>",
//   address: "<ADDRESS>",
//   size: "M",
// });