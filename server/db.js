import Pool from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: '3957',
  host: 'localhost',
  port: '5432',
  database: 'marketplace_postgres'
})

export default pool
