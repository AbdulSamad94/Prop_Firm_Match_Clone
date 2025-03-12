import mongoose, { Document, Schema } from 'mongoose';

export interface IInstrument {
  assetName: string;
  description?: string;
}

export interface ILeverage {
  accountType: string;
  leverageValue: string;
}

export interface ICommission {
  instrument: string;
  commissionValue: string;
}

export interface IRule {
  ruleTitle: string;
  ruleDescription: string;
}

export interface IPayoutPolicy {
  policyTitle: string;
  policyDescription: string;
}

export interface IFirm extends Document {
  name: string;
  slug: string;
  logoUrl?: string;
  rating?: number;
  reviewCount?: number;
  foundedYear?: number;
  yearsInOperation?: number;
  website?: string;
  overview?: string;
  instrumentsAndAssets: IInstrument[];
  leverage: ILeverage[];
  commissions: ICommission[];
  firmRules: IRule[];
  payoutPolicy: IPayoutPolicy[];
  challenges: mongoose.Types.ObjectId[];
  offers: mongoose.Types.ObjectId[];
  announcements: mongoose.Types.ObjectId[];
  reviews: mongoose.Types.ObjectId[];
}

/* The IFirmModel interface was removed as it added no additional members. */

const InstrumentSchema = new Schema<IInstrument>({
  assetName: { type: String, required: true },
  description: { type: String }
});

const LeverageSchema = new Schema<ILeverage>({
  accountType: { type: String, required: true },
  leverageValue: { type: String, required: true }
});

const CommissionSchema = new Schema<ICommission>({
  instrument: { type: String, required: true },
  commissionValue: { type: String, required: true }
});

const RuleSchema = new Schema<IRule>({
  ruleTitle: { type: String, required: true },
  ruleDescription: { type: String, required: true }
});

const PayoutPolicySchema = new Schema<IPayoutPolicy>({
  policyTitle: { type: String, required: true },
  policyDescription: { type: String, required: true }
});

const FirmSchema: Schema<IFirm> = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    logoUrl: { type: String },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    foundedYear: { type: Number },
    yearsInOperation: { type: Number },
    website: { type: String },
    overview: { type: String },
    instrumentsAndAssets: [InstrumentSchema],
    leverage: [LeverageSchema],
    commissions: [CommissionSchema],
    firmRules: [RuleSchema],
    payoutPolicy: [PayoutPolicySchema],
    challenges: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
    offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
    announcements: [{ type: Schema.Types.ObjectId, ref: 'Announcement' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
);

const Firm = mongoose.model<IFirm>('Firm', FirmSchema);
export default Firm;
