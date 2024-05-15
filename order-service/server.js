import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

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

  // Save order
  // ...

  // Send notification
  try {
    const orderId = req.body.order_id
    const notification = {
      order_id: orderId,
      message: `New order ${orderId} has been placed`
    }
    const result = await axios.post('http://localhost:9902/notifications', notification)

    if (!result.data.success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send notification'
      })
    }
  } catch (error) {
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
