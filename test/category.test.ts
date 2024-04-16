

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Category', ()=>{

    it('Testando post',async () => {
        const res = await request(app)
            .post('/category')
            .send({
            "nome": "categoria de teste",
            "cor": "cor de teste" 
        })
        expect(res.body).toEqual({"cor": "cor de teste", "id": 1, "nome": "categoria de teste"})
    })
    
    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/category')
        expect(res.status).toEqual(200)
    })

    it('Testando busca getById',async () => {
        const res = await request(app)
        .get('/category/1')
        expect(res.body).toEqual([{
            "id": 1,
            "nome": "categoria de teste",
            "cor": "cor de teste"
        }])
    })

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/category/1').send({
                "nome": "patch",
                "cor": "teste patch" 
            })
        expect(res.body).toEqual([{
            "id": 1,
            "nome": "patch",
            "cor": "teste patch" 
        }])
        await request(app)
            .delete('/category/1')
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/category/1')
        expect(res.status).toEqual(204)
    })

    
})

