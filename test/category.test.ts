

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Category', ()=>{
    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/category')
        expect(res.status).toEqual(200)
    })

    it('Testando busca getById',async () => {
        const res = await request(app)
        .get('/category/3')
        expect(res.body).toEqual([{
            "id": 3,
            "nome": "Hobbies",
            "cor": "yellow"
        }])
    })

    it('Testando post',async () => {
        const res = await request(app)
            .post('/category')
            .send({
            "nome": "categoria de teste",
            "cor": "cor de teste" 
        })
        expect(res.body).toEqual({"cor": "cor de teste", "id": 4, "nome": "categoria de teste"})
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/category/4')
        expect(res.body).toEqual([{"cor": "cor de teste", "id": 4, "nome": "categoria de teste"}])
    })

    it('Testando patch',async () => {
        await request(app)
            .post('/category')
            .send({
            "nome": "categoria de teste",
            "cor": "cor de teste" 
        })
        const res = await request(app)
            .patch('/category/4').send({
                "nome": "patch",
                "cor": "teste patch" 
            })
        expect(res.body).toEqual([{
            "id": 4,
            "nome": "patch",
            "cor": "teste patch" 
        }])
        await request(app)
            .delete('/category/4')
    })
})

