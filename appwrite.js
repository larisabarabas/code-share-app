import { Client, Account } from "appwrite";

const PROJECT_ID = "66792db6003cdb394cb7";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

export const account = new Account(client);

export { ID } from "appwrite";
