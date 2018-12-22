// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  });

// Require external modules
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage').then(
    () => {console.log('MongoDB connected....')},
    err =>  {console.log('Error, Database not connected')}
);

  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { Hello: 'Welcome to the fast cool API' }
  });
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()