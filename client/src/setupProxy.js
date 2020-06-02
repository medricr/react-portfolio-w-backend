
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		'/contact',
		createProxyMiddleware({
			targer: 'http://localhost:3001',
			changeOrigin: true
		})
	)
}
