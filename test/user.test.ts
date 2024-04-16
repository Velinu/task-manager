

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints User', ()=>{

    it('Testando post',async () => {
        const res = await request(app)
            .post('/user')
            .send({
                "userName": "joao123",
                "peso": 75.5,
                "senha": "senha123",
                "email": "joao123@example.com"
        })
        expect(res.body).toEqual({
            "id": 1,
            "userName": "joao123",
            "peso": 75.5,
            "senha": "senha123",
            "email": "joao123@example.com"
        })

    })

    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/user')
        expect(res.status).toEqual(200)
    })

    it('Testando busca getById', async () => {
        const res = await request(app)
        .get('/user/1')

        expect(res.body).toEqual([{
            "id": 1,
            "userName": "joao123",
            "peso": 75.5,
            "senha": "senha123",
            "email": "joao123@example.com"
        }])
    })

    

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/user/1')
            .send({
                "userName": "pedro",
                "peso": 55.5,
                "senha": "sssss",
                "email": "joao123dffr.com"
        })
        expect(res.body).toEqual([{
            "email": "joao123dffr.com",
            "id": 1,
            "peso": 55.5,
            "senha": "sssss",
            "userName": "pedro",
        }])
    })

    it('Testando delete',async () => {
        const res = await request(app)
        .delete('/user/1')
        expect(res.status).toEqual(204)
    }) 
})

