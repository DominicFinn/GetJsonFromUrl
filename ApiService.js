const fetch = require('node-fetch');
const logger = require('pino')();


module.exports = class ApiService {
    constructor(apiKey) {
        this._apiKey = apiKey;
    }

    async getJsonFromUrl(url, jsonTransform) {
        return await fetch(url, {
            method: 'get',
            headers: {
                'authorization': 'Basic ' + this._apiKey,
                'content-type': 'application/json',
            }
        })
            .then(res => {
                // some naughty endpoints don't obey the request headers
                logger.info(`URL: ${url} Response: ${res.status} ContentType:${res.headers.get('content-type')}`)
                return res.json()
            })
            .then(json => jsonTransform(json))
            .catch(error => {
                logger.error(`Failed on call to ${url} with error ${error}`);

                return null;
            });
    }
}

