

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Task', ()=>{

    it('Testando post',async () => {

        const res = await request(app)
            .post('/task')
            .send({
                "title": "primeira task",
                "descr": "primeira task para teste",
                "type":  "primeira task",
                "categoryId": 1,
                "userId": 1
        })
        expect(res.body).toEqual({
            "id": 1,
            "title": "primeira task",
            "descr": "primeira task para teste",
            "type":  "primeira task",
            "status": "Em andamento",
            "categoryId": 1,
            "userId": 1
        })

    })

    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/task')
        expect(res.status).toEqual(200)
    })

    it('Testando busca getById', async () => {
        const res = await request(app)
        .get('/task/1')

        expect(res.body).toEqual([{
            "id": 1,
            "categoryId": 1,
            "title": "primeira task",
            "descr": "primeira task para teste",
            "type":  "primeira task",
            "status": "Em andamento",
            "userId": 1
        }])
    })

    

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/task/1')
            .send({
            "title": "primeira task patch",
            "descr": "primeira task para teste patch",
            "type":  "primeira task patch",
            "categoryId": 2,
            "userId": 1
        })
        expect(res.body).toEqual([{
            "id": 1,
            "categoryId": 2,
            "status": "Em andamento",
            "title": "primeira task patch",
            "descr": "primeira task para teste patch",
            "type":  "primeira task patch",
            "userId": 1
        }])
    })

    it('Testando delete',async () => {
        const res = await request(app)
        .delete('/task/1')
        expect(res.status).toEqual(204)
    }) 
})

describe('testando endpoints extras', ()=>{
    

    it('Testando busca por categoria',async () => {
        await request(app)
        .post('/task')
        .send({
            "title": "primeira task",
            "descr": "primeira task para teste",
            "type":  "primeira task",
            "categoryId": 1,
            "userId": 1
        })

    await request(app)
    .post('/task')
    .send({
        "title": "primeira task",
        "descr": "primeira task para teste",
        "type":  "primeira task",
        "categoryId": 1,
        "userId": 3
    })

    await request(app)
    .post('/task')
    .send({
        "title": "primeira task",
        "descr": "primeira task para teste",
        "type":  "primeira task",
        "categoryId": 2,
        "userId": 3
    })

        const res = await request(app)
        .get('/task/category/1')
        expect(res.body).toEqual([{
            "id": 1,
            "title": "primeira task",
            "status": "Em andamento",
            "descr": "primeira task para teste",
            "type":  "primeira task",
            "categoryId": 1,
            "userId": 1,
        },
        {
            "id": 2,
            "title": "primeira task",
            "status": "Em andamento",
            "descr": "primeira task para teste",
            "type":  "primeira task",
            "categoryId": 1,
            "userId": 3,
        }])
    }) 
})

