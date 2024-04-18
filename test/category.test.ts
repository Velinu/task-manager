

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Category', ()=>{

    it('Testando post',async () => {
        const res = await request(app)
            .post('/category')
            .send({
            "name": "categoria de teste",
            "color": "color de teste" 
        })
        expect(res.status).toEqual(201)
    })
    
    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/category')
        expect(res.body).toEqual([{"color": "color de teste", "id": 1, "name": "categoria de teste"}])
    })

    it('Testando busca getById',async () => {
        const res = await request(app)
        .get('/category/1')
        expect(res.body).toEqual({
            "id": 1,
            "name": "categoria de teste",
            "color": "color de teste"
        })
    })

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/category/1').send({
                "name": "patch",
                "color": "teste patch" 
            })
        expect(res.body).toEqual({
            "id": 1,
            "name": "patch",
            "color": "teste patch" 
        })
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/category/1')
        expect(res.status).toEqual(204)
    })

    
})

