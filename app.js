const googleIt = require('google-it')
const fetchUrl = require("fetch").fetchUrl
const sanitizeHtml = require('sanitize-html')
const write = require('write')

googleIt({'query': 'codeigniter'}).then(results => {
	results.forEach(result => {
    fetchUrl(result.link, function(error, meta, body) {
    	
    })
  })
}).catch(err => {
  if(err) console.error(err)
})