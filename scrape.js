const baseSearchUrl = 'http://libgen.rs/search.php';
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

scrapeIds = async (options) => {
    const response = await axios.get(baseSearchUrl, {
        params: {
            req: options.searchReq,
            sort: options.sort,
            sortmode: options.sortmode
        },
        responseType: 'text'
    }).catch(err => {
        console.log(err);
    });

    const dom = new JSDOM(response.data);

    const [...nodes] = dom.window.document.querySelectorAll('.c tbody tr:not(:first-child) td:first-child');

    const ids = nodes.map(node => node.textContent)

    return ids;
}


module.exports = scrapeIds;

        // const nodes = dom.window.document.querySelectorAll('#tablelibgen tbody tr td:first-child b:first-child a:first-child');

        // var ids = [];
    
        // nodes.forEach(node => {
        //     ids.push(node.href.slice(32));
        // })
    
        // return ids;