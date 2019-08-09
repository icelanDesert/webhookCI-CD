const Express = require('express')
const app = Express()
const { exec } = require('child_process')

const cmd = 'cd ../webapp && git pull'

app.get('/', function (req, res) {
   exec(cmd, (err, out, code) => {
    if (err instanceof Error) {
      res.status(500).send(err)
      throw err 
    }   
    res.send('Deploy Done.');
   })
})

app.listen(7000, () => {
  console.log('Webhook app listening on port 7000')
})