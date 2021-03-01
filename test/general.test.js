const supertest = require("supertest");
const request = supertest("http://localhost:3131");

test("A aplicação deve responder na porta 3131", () => {

    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
})