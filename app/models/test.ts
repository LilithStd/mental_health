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
    }[]
}