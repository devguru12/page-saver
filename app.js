const googleIt = require('google-it')
const fetchUrl = require("fetch").fetchUrl
const sanitizeHtml = require('sanitize-html')
const write = require('write')

googleIt({'query': 'codeigniter'}).then(results => {
	
}).catch(err => {
  if(err) console.error(err)
})