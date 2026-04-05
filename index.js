const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CA2 - CI/CD Pipeline App - v1</title>
    </head>
    <body style="background-color: #0f172a; color: white; font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center;">
        <h1 style="margin-bottom: 8px;">CA2 - CI/CD Pipeline App - v1</h1>
        <h3 style="font-weight: 400; color: #94a3b8; margin-top: 0;">Deployed via GitHub Actions + Docker + Watchtower</h3>
        <p style="font-size: 1.1rem; color: #e2e8f0; margin-bottom: 30px;">Server is running on AWS EC2</p>
        
        <div style="background-color: #1e293b; padding: 20px 40px; border-radius: 12px; border: 1px solid #334155; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <p style="margin: 0; font-size: 1.25rem; font-weight: bold;">App Version: 1.0.0</p>
        </div>

        <p style="color: #cbd5e1; font-size: 0.9rem;">Server Time: ${currentTime}</p>
    </body>
    </html>
    `;
    
    res.send(html);
});

app.get('/health', (req, res) => {
    res.json({ status: "ok", version: "1.0.0" });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
