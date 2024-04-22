

import { describe, it, expect } from "@jest/globals";
import request from 'supertest';
import app from "../src/app";

describe('testando endpoints Task', ()=>{

    it('Testando post',async () => {
        request(app)
            .post('/task')
            .send({
                "name": "categoria de teste",
                "color": "color de teste" 
            })
        const res = await request(app)
            .post('/task')
            .send({
                "title": "Título da Tarefa",
                "description": "Descrição da tarefa",
                "creationDate": "2024-04-18T12:00:00Z",
                "completeDate": "2024-04-20T12:00:00Z",
                "category": 1,
                "status": "Em andamento",
                "userId": 1
              })
        expect(res.status).toEqual(201)
    })
    
    it('Testando busca getAll',async () => {
        const res = await request(app)
        .get('/task')
        expect(res.body).toEqual([{
            "id": 1,
            "title": "Título da Tarefa",
            "description": "Descrição da tarefa",
            "completeDate": "2024-04-20T12:00:00.000Z",
            "creationDate": "2024-04-18T12:00:00.000Z",
            "category": 1,
            "status": "Em andamento",
            "userId": 1
          }])
    })

    it('Testando busca getById',async () => {
        const res = await request(app)
        .get('/task/1')
        expect(res.body).toEqual({
            "id": 1,
            "title": "Título da Tarefa",
            "description": "Descrição da tarefa",
            "completeDate": "2024-04-20T12:00:00.000Z",
            "creationDate": "2024-04-18T12:00:00.000Z",
            "category": 1,
            "status": "Em andamento",
            "userId": 1
          })
    })

    it('Testando patch',async () => {
        const res = await request(app)
            .patch('/task/1').send({
                "id": 1,
                "title": "Título",
                "description": "Descrição",
                "creationDate": "2024-04-18T12:00:00Z",
                "completeDate": "2024-04-20T12:00:00Z",
                "category": 1,
                "status": "Em andamento",
                "userId": 1
              })
        expect(res.body).toEqual({
            "id": 1,
            "title": "Título",
            "description": "Descrição",
            "completeDate": "2024-04-20T12:00:00.000Z",
            "creationDate": "2024-04-18T12:00:00.000Z",
            "category": 1,
            "status": "Em andamento",
            "userId": 1
          })
    })

    it('Testando delete',async () => {
        const res = await request(app)
            .delete('/task/1')
        expect(res.status).toEqual(204)
    })

    it('Teste de get todas as tasks de um usuario', async () => {
        await request(app)
            .post('/task')
            .send({
                "title": "Título da Tarefa",
                "description": "Descrição da tarefa",
                "creationDate": "2024-04-18T12:00:00Z",
                "completeDate": "2024-04-20T12:00:00Z",
                "category": 2,
                "status": "Concluido",
                "userId": 1
            })

        await request(app)
        .post('/task')
        .send({
                "title": "Título da Tarefa",
                "description": "Descrição da tarefa",
                "creationDate": "2024-04-18T12:00:00Z",
                "completeDate": "2024-04-20T12:00:00Z",
                "category": 3,
                "status": "Em andamento",
                "userId": 2
            })

        await request(app)
        .post('/task')
        .send({
                "title": "Título da Tarefa",
                "description": "Descrição da tarefa",
                "creationDate": "2024-04-18T12:00:00Z",
                "completeDate": "2024-04-20T12:00:00Z",
                "category": 1,
                "status": "Pendente",
                "userId": 3
            })

        const res = await request(app)
                            .get('/user/1/tasks')
        
        expect(res.body).toEqual([{
            "id": 1,
            "title": "Título da Tarefa",
            "description": "Descrição da tarefa",
            "completeDate": "2024-04-20T12:00:00.000Z",
            "creationDate": "2024-04-18T12:00:00.000Z",
            "category": 2,
            "status": "Concluido",
            "userId": 1
        }])
    })    
    it('Teste get todas as tarefas pendentes ou concluidas', async () =>{
        const res = await request(app)
                            .get('/task/status/pending')

        expect(res.body).toEqual([{
            "id": 3,
            "title": "Título da Tarefa",
            "description": "Descrição da tarefa",
            "creationDate": "2024-04-18T12:00:00.000Z",
            "completeDate": "2024-04-20T12:00:00.000Z",
            "category": 1,
            "status": "Pendente",
            "userId": 3
        }])
    })
})

