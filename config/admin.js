module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7bb763a8b7c93b27aaedc05d8ecee38'),
  },
});
