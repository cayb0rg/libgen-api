const axios = require('axios');
const apiBaseURL = 'http://libgen.rs/json.php';

module.exports = async (ids, options) => {
    const response = await axios.get(apiBaseURL, {
        params: {
            ids: ids.join(','),
            fields: options.fields,
            lg_topic: options.lg_topic
        }
    }).catch(err => console.log(err));

    return response.data;
}