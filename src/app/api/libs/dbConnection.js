import { createPool } from "mysql2/promise";

const connection = createPool({
    host: 'localhost',
    port: 3306,
    database: 'travelzone',
    user: 'root',
    password: 'Helloiris25'
})

export default connection;