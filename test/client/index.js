'use strict';
window.setImmediate = process.nextTick;

require('../server/fluxapp');
require('../server/stores');
require('../server/actions');
require('../server/router');
require('./stores');
require('./actions');
require('./router');
