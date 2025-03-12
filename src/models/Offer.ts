import mongoose, { Document, Schema } from 'mongoose';

export interface IOffer extends Document {
  firm: mongoose.Types.ObjectId;
  title: string;
  discountPercentage?: number;
  code?: string;
  validUntil?: Date;
  description?: string;
}


const OfferSchema: Schema<IOffer> = new Schema(
  {
    firm: { type: Schema.Types.ObjectId, ref: 'Firm', required: true },
    title: { type: String, required: true },
    discountPercentage: { type: Number },
    code: { type: String },
    validUntil: { type: Date },
    description: { type: String }
  },
  { timestamps: true }
);

const Offer = mongoose.model<IOffer>('Offer', OfferSchema);
export default Offer;
