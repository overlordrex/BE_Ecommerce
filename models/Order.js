import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    product: { type: Array, required: true },
    quantity: { type: Number, default: 1 },
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
