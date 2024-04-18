import { Document, FilterQuery, Model, UpdateQuery, UpdateWithAggregationPipeline, UpdateWriteOpResult } from "mongoose";

export class BaseRepository<T extends Document> {

    constructor(private model: Model<T>) { }

    async create(data: Partial<T>): Promise<T> {
        const tBuffer = await this.findLast()
        if(tBuffer){
            data.id = tBuffer!.id + 1
        }else{
            data.id = 1
        }
        return await this.model.create(data);
    }

    async findLast(){
        return await this.model.findOne({}, {}, {}).sort({ id: -1 }).limit(1)
    }

    async findAll(): Promise<T[] | null>{
        return await this.model.find({})
    }

    async find(filter: FilterQuery<T>): Promise<T[] | null> {
        return await this.model.find(filter);
    }

    async updateOneById(filter: FilterQuery<T>, update: UpdateWithAggregationPipeline | UpdateQuery<T>):  Promise<T | null>{
        await this.model.findOneAndUpdate(filter, update);
        return await this.model.findOne(filter, {_id: 0})
    }

    async deleteOneById(filter: FilterQuery<T>): Promise<T | null>{
        const ret = await this.model.findOne(filter, {_id: 0})
        await this.model.findOneAndDelete(filter);
        return ret
    }
}