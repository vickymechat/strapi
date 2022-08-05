module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ad1162d80e9a7058575bae129cf325d'),
  },
});
