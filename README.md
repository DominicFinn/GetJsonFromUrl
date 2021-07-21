# GetJsonFromUrl

Simple class to get JSON from a URL the endpoint requires basic authorization. 


Usage example: 

```
    const ApiService = require('./ApiService');

    const apiKey = Buffer.from('username:password').toString('base64');

    const apiService = new ApiService(apiKey);

    const results = await apiService.getJsonFromUrl('https://api.testurl.com/v1/results', (json) => {
        // return json.results (or whatever transform you need to do)

        return json;
    });

    // results will return null and write to log if there's an issue 
    if(results) {
        ...
    }

```