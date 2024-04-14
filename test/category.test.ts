

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
        .get('/category/1')
        expect(res.body).toEqual([{
            "id": 1,
            "nome": "teste",
            "cor": "blue"
        }])
    })

    it('Testando post',async () => {
        const res = await request(app)
            .post('/category')
            .send({
            "nome": "testando post",
            "cor": "azulpora" 
        })
        expect(res.body).toEqual({
            "id": 5, // ultimo id salvo
            "nome": "testando post",
            "cor": "azulpora" 
        })
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/category/5')
        expect(res.body).toEqual({})
    })

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/category/1').send({
                "nome": "testando patch",
                "cor": "azulpora" 
            })
        expect(res.body).toEqual([{
            "id": 1,
            "nome": "testando patch",
            "cor": "azulpora" 
        }])
    })
})

