import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Category', ()=>{

    it('Testando post',async () => {
        const res = await request(app)
            .post('/user')
            .send({
                "id": 1,
                "username": "exemplo_usuario",
                "weight": 70,
                "password": "senha123",
                "email": "exemplo@email.com"
              })
        expect(res.status).toEqual(201)
    })
    
    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/user')
        expect(res.body).toEqual([{
            "id": 1,
            "username": "exemplo_usuario",
            "weight": 70,
            "password": "senha123",
            "email": "exemplo@email.com"
          }])
    })

    it('Testando busca getById',async () => {
        const res = await request(app)
        .get('/user/1')
        expect(res.body).toEqual({
            "id": 1,
            "username": "exemplo_usuario",
            "weight": 70,
            "password": "senha123",
            "email": "exemplo@email.com"
          })
    })

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/user/1').send({
                "username": "exemplos",
                "weight": 90,
                "password": "senha178",
                "email": "exemplo@gmail.com"
              })
        expect(res.body).toEqual({
            "id": 1,
            "username": "exemplos",
            "weight": 90,
            "password": "senha178",
            "email": "exemplo@gmail.com"
          })
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/user/1')
        expect(res.status).toEqual(204)
    })

    
})

