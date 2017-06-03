require('babel-register');
import Sitemap from 'react-router-sitemap';
const router = require('./projects/wwf/common/routes.jsx').default;

(
	new Sitemap(router)
		.build('https://westwardmakers.com')
		.save('./sitemap.xml')
);
