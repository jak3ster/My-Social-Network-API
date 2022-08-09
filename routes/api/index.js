const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
// const apiRoutes = require('../api');

// add prefix of `/api` to all of the api routes imported from the `api` directory
// router.use('/api', apiRoutes);

const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router;
