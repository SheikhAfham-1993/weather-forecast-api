import * as mongoose from 'mongoose';

export const WeatherSchema = new mongoose.Schema({
  city: String,
  apiEndpoint: String,
  timeStamp: Date,
  status: Number,
  errorMessage: String,
});

export interface WeatherLogs {
  id: string;
  city: string;
  apiEndpoint: string;
  timeStamp: Date;
  status: number;
  errorMessage: string;
}
