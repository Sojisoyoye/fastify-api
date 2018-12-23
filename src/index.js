// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  });

// Require external modules
const mongoose = require('mongoose');

const routes = require('./routes');

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage').then(
    () => {console.log('MongoDB connected....')},
    err =>  {console.log('Error, Database not connected')}
);

// Loop over routes array and initiliaze with fastify
routes.forEach((route, index) => {
  fastify.route(route);
 });

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