module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-34-242-89-204.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd100egqn9518gb'),
      user: env('DATABASE_USERNAME', 'qbulwcawipcfyt'),
      password: env('DATABASE_PASSWORD', '563679f94ef3b4a047c784a9f25c577fff1a1a9dda999c3005facb50dcce1f91'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
