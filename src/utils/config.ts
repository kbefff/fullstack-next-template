export const {
  NODE_ENV = 'production',
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';