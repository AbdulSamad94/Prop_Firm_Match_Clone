import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  firm: mongoose.Types.ObjectId;
  user?: mongoose.Types.ObjectId;
  rating: number;
  title?: string;
  comment?: string;
  reviewDate?: Date;
}

const ReviewSchema: Schema<IReview> = new Schema(
  {
    firm: { type: Schema.Types.ObjectId, ref: 'Firm', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true },
    title: { type: String },
    comment: { type: String },
    reviewDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Review = mongoose.model<IReview>('Review', ReviewSchema);
export default Review;
