import { iCategoryService } from "src/interfaces/category/categoryInterface";
import { categoryModel } from "../model/category/categoryModel";
import { Category } from "../model/category/categoryClass";

class categoryService implements iCategoryService{

    async getById(id: number) {
        try{
            const res = await categoryModel.find({id: id}, {_id: 0})
            if (res.length == 0){
                throw new Error();
            } 
            return res
        }catch(e){
            throw new Error();
        }
        
    }

    async getAll() {
        try{
            const res = await categoryModel.find({}, {_id: 0})
            if (res.length == 0){
                throw new Error();
            } 
            return res 
        }catch(e){
            throw new Error();
        }
    }

    async post(category: Category) {
        try{
            const lastCategory = await categoryModel.findOne({}, {_id: 0}, { sort: { id: -1 } });
            if (lastCategory) {
                category.id = lastCategory.id + 1
            } else {
                category.id = 1
            }

            const newCategory = new categoryModel(category)
            await newCategory.save()
            return newCategory 
        }catch(e){
            console.log(e)
            throw new Error(`Error creating category: ${e}`);
        }
    }

    async patch(id: number,dataPatch: any) {
        try{
            await categoryModel.findOneAndUpdate({id: id}, dataPatch)
            const categoryPatch = await categoryModel.find({id: id},{_id: 0})
            return categoryPatch;
        }catch(e) {
            throw new Error(`Error patching category: ${e}`);
        }
    }

    async delete(id: number) {
       try{
            await categoryModel.deleteOne({id: id})
            return
       }catch(e){
            throw new Error(`Error delete category: ${e}`)
       }
    }
}

export default new categoryService()