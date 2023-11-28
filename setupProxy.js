const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Если ваш запрос начинается с /api
    createProxyMiddleware({
      target: 'https://swapi.co',
      changeOrigin: true,
    })
  );
};
