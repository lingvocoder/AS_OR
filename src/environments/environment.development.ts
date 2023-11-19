import {EnvName} from "../app/enums/environments.enum";

const scheme = 'http://';
const host = 'localhost';
const port = ':5000';
const path = '/api/';

const baseURL = `${scheme}${host}${port}${path}`;

export const environment = {
    production: false,
    name:'OperationalRisks',
    envName: EnvName.LOCAL,
    defaultLanguage:'en',
    apiBaseURL: baseURL
};
