const games = require('./data/db');
const app = require('./app');
const request = require('supertest');



describe('GET/games', () => {
    it('let see 200 please', () => {
        return request(app).get('/games')
        .expect(200)
    });

    it('returns something', () => {
        return request(app).get('/games')
            .then(responce => {
                expect(Array.isArray(responce.body)).toBe(true)
            });
    });
    it('responds with 200 OK', async () => {
         request(app)
          .get('/')
          .expect('Content-Type', /json/i);
      });
});

describe('POST/games', () => {
    it('should get 201 status code if complete', () => {
        const game = { title: 'Pacman', genre: 'Arcade '};
        return request(app)
            .post('/games')
            .send(game)
            .expect(201)
    });

    it('getting a 422 when genre is missing', () => {
        const game = {title: 'Pacman'};
        return request(app)
        .post('/games')
        .send(game)
        .expect(422)
    });

    it('getting 422 status code if title is missing', () => {
        const game = { genre: "Arcade" };
        return request(app)
            .post('/games')
            .send(game)
            .expect(422)
    });
})