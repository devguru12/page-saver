const googleIt = require('google-it')
const fetchUrl = require("fetch").fetchUrl
const sanitizeHtml = require('sanitize-html')
const write = require('write')

googleIt({'query': 'search'}).then(results => {
  results.forEach(result => {
    fetchUrl(result.link, function(error, meta, body) {
      if(body) {
        const text = sanitizeHtml(body.toString(), {
          allowedTags: [],
          nonTextTags: [ 'style', 'script', 'textarea', 'noscript', 'xml', 'svg' ]
        })
        write.sync('foo.txt', text, { newline: true, flag: 'as' }); 
      }
    })
  })
}).catch(err => {
  if(err) console.error(err)
})