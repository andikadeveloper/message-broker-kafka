import express from 'express';
import bodyParser from 'body-parser';
import { sendNotification } from './notification-service.js';

const app = express()
const port = 9901

app.use(bodyParser.json());

app.post('/orders', async (req, res) => {
  // Order validation
  if (!req.body?.order_id) {
    return res.status(400).json({
      success: false,
      message: 'orderId is required'
    })
  }

  // Notification payload
  const orderId = req.body.order_id
  const notification = {
      order_id: orderId,
      message: `New order ${orderId} has been placed`
  }

  // Send notification
  const result = await sendNotification(notification)
  if (!result) {
    return res.status(500).json({
      success: false,
      message: 'Failed to send notification'
    })
  }
  
  res.json({
    success: true,
    message: 'Order placed successfully'
  })
})

app.listen(port, () => {
  console.log(`Order service listening on port ${port}`)
})
