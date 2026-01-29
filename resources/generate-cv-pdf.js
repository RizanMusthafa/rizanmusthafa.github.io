import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    const htmlPath = path.join(__dirname, 'rizan-mohomed-cv.html');
    const pdfPath = path.join(__dirname, 'Rizan-Mohomed-CV.pdf');
    
    console.log('🚀 Starting PDF generation...');
    
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });
    
    // Generate PDF with A4 format
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        margin: {
            top: '0.5in',
            right: '0.6in',
            bottom: '0.5in',
            left: '0.6in'
        },
        printBackground: true,
        preferCSSPageSize: false
    });
    
    await browser.close();
    
    console.log(`✅ PDF generated successfully: ${pdfPath}`);
}

generatePDF().catch(console.error);
