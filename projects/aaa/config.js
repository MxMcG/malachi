

/**
 * COMPONENTS
 */
// require all components used in project
require('./components/TestA/index.jsx');
require('./components/TestB/index.jsx');

/**
 * STYLES
 */
// require all theme/settings styles used in project
require('./styles/settings.scss');
// require all component-styles used in project
require('./components/TestA/css/test.scss');
require('./components/TestB/css/test.scss');

/**
 * LIBS
 */
require('./libs/setup.js').requestContent();
