module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '33867d5bce441b879facffa5d3e0b449'),
  },
});
