// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})
const Pool = require('pg-pool');

const config = {
    user: 'postgres',
    password: '9889',
    host: '127.0.0.1',
    port: 5432,
    database: 'postgres'
};
fastify.register(require('fastify-cors'),{

})
const pool = new Pool(config);

// Declare a route
fastify.get('/get-content', async function (request, reply) {
    let img = null;
    let client = await pool.connect()
    try {
        img = await client.query(`select * from "NT"`)
        reply.send(img.rows)
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
})

fastify.listen(8081, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})