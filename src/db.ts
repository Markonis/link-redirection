import { Pool, QueryResult } from 'pg';

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: parseInt(process.env.DB_PORT || '5432'),
});

// Add the following function below the pool initialization
async function createTableIfNotExists(): Promise<QueryResult> {
	const query = `
    CREATE TABLE IF NOT EXISTS link_clicks (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) NOT NULL,
      country VARCHAR(2) NOT NULL,
      tags TEXT[] NOT NULL,
      resolved_url TEXT NOT NULL,
      video_id VARCHAR(255),
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `;

	return pool.query(query);
}

// Call the function to create the table if it doesn't exist
createTableIfNotExists().catch((err) => {
	console.error('Error creating table:', err);
});

export async function logLinkClick(
	slug: string,
	country: string,
	tags: string[],
	resolvedUrl: string,
	videoId?: string
): Promise<void> {
	const query = `
    INSERT INTO link_clicks (slug, country, tags, resolved_url, video_id)
    VALUES ($1, $2, $3, $4, $5);
  `;

	const values = [slug, country, tags, resolvedUrl, videoId];

	try {
		await pool.query(query, values);
	} catch (err) {
		console.error('Error inserting link click:', err);
	}
}

