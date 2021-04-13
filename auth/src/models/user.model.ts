import { Document, Model, model, Schema } from 'mongoose';
import { PasswordUtils } from '../utils/password.utils'; 

// Properties that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// Properties that a User Model (entire collection of users) has
interface UserModel extends Model<UserDocument> {
	build(attrs: UserAttrs): UserDocument;
}

// Properties that a User Document (a single user) has
interface UserDocument extends Document, UserAttrs {}

// Schema (JSON object) to define structure of the document
const userSchema = new Schema<UserDocument, UserModel>(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		toJSON: {
			transform: (document: UserDocument, ret: Partial<UserDocument>) => {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
			}
		}
	}
);

// Middleware Mongoose function to hash password
userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashed = await PasswordUtils.toHash(this.get('password'));
		this.set('password', hashed);
	}
	done();
});

// Add build function to schema
userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);

// Creates Mongoose user model
export const User = model<UserDocument, UserModel>('User', userSchema);