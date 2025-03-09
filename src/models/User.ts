// src/models/User.ts
import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

// Interface for User document
export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified?: Date;
  verificationCode?: string;
  verificationCodeExpires?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Interface for User model
interface IUserModel extends Model<IUser> {
  comparePassword(email: string, password: string): Promise<IUser | null>;
}

const userSchema = new mongoose.Schema<IUser, IUserModel>(
  {
    fullname: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters']
    },
    emailVerified: {
      type: Date,
      default: null
    },
    verificationCode: {
      type: String,
      default: null
    },
    verificationCodeExpires: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

// Password hashing middleware
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Delete existing model if it exists to prevent OverwriteModelError
if (mongoose.models.User) {
  mongoose.deleteModel('User');
}

// Create and export the model
const User = mongoose.model<IUser, IUserModel>('User', userSchema);
export default User;