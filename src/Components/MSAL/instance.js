import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "RDIRECT_URL",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
