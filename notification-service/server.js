import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 9902

app.use(bodyParser.json());

app.post('/notifications', (req, res) => {
  // Simulate failure
  if (req.body.order_id === 2) {
    return res.status(500).json({
      success: false,
      message: 'Failed to send notification'
    })
  }

  console.log("Notification received: ", req.body.message)

  res.json({
    success: true,
    message: 'Notification sent successfully'
   })
})

app.listen(port, () => {
  console.log(`Notification service listening on port ${port}`)
})