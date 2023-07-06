import { Pool, types } from "pg";

const pool = new Pool({
    host: "",
    user: "",
    password: "",
    database: "",
    port: 5432,
    min: 10,
    max: 500,
    idleTimeoutMillis: 20000,
    connectionTimeoutMillis: 10000
})

pool.on('connect', client => {
    console.log('DB Connected')
})
pool.on('error', (err, client) => {
    console.log('Connection error', err)
})

class Postgres {
    static async getClient() {
        try {
            return await pool.connect()
        } catch (error) {
            throw error
        }
    }
    static async getResult(query: string) {
        try {
            const result = await pool.query(query)
            return result.rows
        } catch (error) {
            throw error
        }
    }
}
export default Postgres