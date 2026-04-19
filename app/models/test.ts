import mongoose, { Schema, Document, Model } from "mongoose";

export interface TestTypes extends Document {
    id:string,
    label: string,
    title: {
        en: string,
        ru: string,
        lv: string
    },
    content: {
        en: string,
        ru: string,
        lv: string
    },
    questions: {
        title: {
            en: string,
            ru: string,
            lv: string
        },
        variants: {
            id: string,
            title: {
                en: string,
                ru: string,
                lv: string
            },
            count: number
        }[]
    }[],
    createdAt: Date,
    updatedAt: Date

}

const TestSchema: Schema<TestTypes> = new Schema({
    label: { type: String, required: true },
    title: {
        en: { type: String, required: true },
        ru: { type: String, required: true },
        lv: { type: String, required: true }
    },
    content: {
        en: { type: String, required: true },
        ru: { type: String, required: true },
        lv: { type: String, required: true }
    },
    questions: [{
        title: {
            en: { type: String, required: true },
            ru: { type: String, required: true },
            lv: { type: String, required: true }
        },
        variants: [{
            id:{type:String, required:true},
            title:{
                en:{type:String, required:true},
                ru:{type:String, required:true},
                lv:{type:String, required:true}
            },
            count:{type:Number, default:0}
        }]
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export const Test: Model<TestTypes> = mongoose.models.Test || mongoose.model<TestTypes>("Test", TestSchema)