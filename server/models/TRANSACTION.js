import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const TransactionSchema = new mongoose.Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PRODUCT",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const TRANSACTION = mongoose.model("TRANSACTION", TransactionSchema);

export default TRANSACTION;
