const supertest = require('supertest');
const app = require('../app')
describe("GET /",()=>{
    it('respons json',(done)=>{
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZiZjg1OGNiYTcwZGE3YTQwYjQ3NyIsImlhdCI6MTY2MTMzNDI0NywiZXhwIjoxNjYxMzM2MDQ3fQ.pfm9Rl0PciPT3gZDqdwkc0cON5ow-OE1aU2m4cFeXOU'
        supertest(app)
            .get('/')
            .set('Accept', 'application/json')
            .set('Cookie',['token='+token])
            .expect((res)=>{
                res.body.error = 'authorized'
            })
            .expect(200,done)
    })
})