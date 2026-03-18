import pg from 'pg';

export const TigerConnect = async () => {
    const { Client } = pg;
    const dbUrl = process.env.DB_URL;

    console.log("DB_URL:", dbUrl);
    console.log("Connecting...");

    const client = new Client({ 
        connectionString: dbUrl,
        ssl: {
                rejectUnauthorized: false
            }});

    await client.connect();

    console.log("Connected to DB");

    try {
        const { rows } = await client.query(
            'select extname, extversion from pg_extension'
        );

        rows.forEach(e => console.log(e));
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
};