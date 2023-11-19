import {EnvName} from "../app/enums/environments.enum";

const scheme = 'http://';
const host = 'localhost';
const port = ':5000';
const path = '/api/';

const baseURL = `${scheme}${host}${port}${path}`;
export const environment = {
  production: true,
  name: 'OperationalRisks',
  envName: EnvName.PROD,
  defaultLanguage: 'en',
  apiBaseURL: baseURL
};
