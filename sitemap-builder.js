require('babel-register');
import Sitemap from 'react-router-sitemap';
const router = require('./projects/wwf/common/routes.jsx').default;

(
	new Sitemap(router)
		.build('https://westwardfoundation.com')
		.save('./sitemap.xml')
);
