import mongoose from "mongoose";
import { randomUUID } from "crypto";

const pinSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    
    author: {
        type: String,
    },
    
    image: {
      type: String,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
});

const Pins = mongoose.model("Pins", pinSchema);