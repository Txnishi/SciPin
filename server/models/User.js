import mongoose from "mongoose";
import { randomUUID } from "crypto";

const moodboardSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID,
    },
    title: {
      type: String,
      required: true,
    },
    pins: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pins",
          }],

    tags: [
        {
            type: String,
            required: true,
        },
    ],

  });


const userSchema = new mongoose.Schema({

    externalID: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    interest_tags: [
        {
          type: String,
          required: true,
        },
      ],
    
    moodboard: [moodboardSchema],

  },
    {
      timestamps: true,
    }
  );
  

  export default mongoose.model("User", userSchema);