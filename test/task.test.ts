

import { describe, it, expect } from "@jest/globals";
import * as request from 'supertest'
import app from "../src/app";

describe('testando endpoints usuario', ()=>{
    it('Deve inserir um usuario no banco',async () => {
        
        const res = await request.default(app).get('/task')
        expect(res.status).toEqual(200)
    })
})