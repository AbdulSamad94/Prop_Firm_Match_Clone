import mongoose, { Document, Schema } from 'mongoose';

export interface IPhase {
  phaseName: string;
  profitTarget: string;
  timeLimit: string;
  otherRules?: string;
}

export interface IChallenge extends Document {
  firm: mongoose.Types.ObjectId;
  name: string;
  entryFee: number;
  accountSize: number;
  profitTarget: string;
  maxDrawdown: string;
  maxDailyDrawdown: string;
  timeLimit: string;
  description?: string;
  phases: IPhase[];
}


const PhaseSchema = new Schema<IPhase>({
  phaseName: { type: String, required: true },
  profitTarget: { type: String, required: true },
  timeLimit: { type: String, required: true },
  otherRules: { type: String }
});

const ChallengeSchema: Schema<IChallenge> = new Schema(
  {
    firm: { type: Schema.Types.ObjectId, ref: 'Firm', required: true },
    name: { type: String, required: true },
    entryFee: { type: Number, required: true },
    accountSize: { type: Number, required: true },
    profitTarget: { type: String, required: true },
    maxDrawdown: { type: String, required: true },
    maxDailyDrawdown: { type: String, required: true },
    timeLimit: { type: String, required: true },
    description: { type: String },
    phases: [PhaseSchema]
  },
  { timestamps: true }
);

const Challenge = mongoose.model<IChallenge>('Challenge', ChallengeSchema);
export default Challenge;
