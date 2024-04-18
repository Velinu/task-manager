import { Document, Schema, model } from 'mongoose'
import { Collections } from '../enums/collection.enum';
import { iTask } from '../interfaces/task.interface';

export type Task = iTask & Document;

const TaskSchema = new Schema({
    id:{
        type: Number,
        required: [true, 'id']
    },
    title: {
        type: String,
        required: [true, 'title']
    },
    description: {
        type: String,
        required: [true, 'description']
    },
    creationDate: {
        type:Date,
        required: [true, 'Creation Date']
    },
    completeDate: {
        type:Date,
        required: [true, 'Complete Date']
    },
    category: {
        type:Number,
        required: [true, 'Category']
    },
    status: {
        type: String,
        enum : ['Em andamento','Concluido', 'Pendente'],
        default: 'Em andament',
        required: [true, 'status']
    },
    userId: {
        type: Number,
        required: [true, 'active']
    }
}, {
    versionKey: false,
});

export default model<Task>(Collections.TASK_COLLECTION, TaskSchema);