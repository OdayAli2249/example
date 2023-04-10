const express = require('express');
const { PORT } = require('./constants');
const authRoutes = require('./routers/authRouter');
const restaurantRoutes = require('./routers/restaurantRouter');
const orderRoutes = require('./routers/orderRouter');

const app = express();
// middleware
app.use(express.json());
app.listen(PORT);

// routes
app.use(authRoutes);
app.use(restaurantRoutes);
app.use(orderRoutes); 