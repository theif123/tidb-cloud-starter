import dotenv from 'dotenv';

dotenv.config();

const { TIDB_USER = 'AFpd8DTgHBR37xk.root', TIDB_PASSWORD = '19700405Ba', TIDB_HOST = 'gateway01.us-east-1.prod.aws.tidbcloud.com', TIDB_PORT = '4000', TIDB_DB_NAME = 'bookshop', DATABASE_URL = 'gateway01.us-east-1.prod.aws.tidbcloud.com' } = process.env;
// Notice: When using TiDb Cloud Serverless Tier, you **MUST** set the following flags to enable tls connection.
const SSL_FLAGS = 'pool_timeout=60&sslaccept=accept_invalid_certs';

if(TIDB_USER && TIDB_HOST && TIDB_PORT) {
    console.log(`mysql://${TIDB_USER}:${TIDB_PASSWORD}@${TIDB_HOST}:${TIDB_PORT}/${TIDB_DB_NAME}?${SSL_FLAGS}`);
} else {
    console.log(`${DATABASE_URL}?${SSL_FLAGS}`);
}