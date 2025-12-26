import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const leadData = await request.json();

        // Validate required fields
        if (!leadData.contactValue || !leadData.contactMethod) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Add server timestamp
        const lead = {
            ...leadData,
            submittedAt: new Date().toISOString(),
            id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };

        // Store lead in JSON file
        const dataDir = path.join(process.cwd(), 'data');
        const leadsFile = path.join(dataDir, 'leads.json');

        // Create data directory if it doesn't exist
        if (!existsSync(dataDir)) {
            await mkdir(dataDir, { recursive: true });
        }

        // Read existing leads or create new array
        let leads = [];
        if (existsSync(leadsFile)) {
            const fileContent = await readFile(leadsFile, 'utf-8');
            leads = JSON.parse(fileContent);
        }

        // Add new lead
        leads.push(lead);

        // Write back to file
        await writeFile(leadsFile, JSON.stringify(leads, null, 2));

        // Optional: Send email notification (implement if needed)
        // await sendEmailNotification(lead);

        // Optional: Send WhatsApp notification (implement if needed)
        // if (lead.contactMethod === 'whatsapp') {
        //   await sendWhatsAppMessage(lead);
        // }

        return NextResponse.json(
            { success: true, message: 'Lead submitted successfully', leadId: lead.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error submitting lead:', error);
        return NextResponse.json(
            { error: 'Failed to submit lead' },
            { status: 500 }
        );
    }
}

// Optional: GET endpoint to retrieve leads (protect with authentication in production)
export async function GET(request: NextRequest) {
    try {
        const leadsFile = path.join(process.cwd(), 'data', 'leads.json');

        if (!existsSync(leadsFile)) {
            return NextResponse.json({ leads: [] }, { status: 200 });
        }

        const fileContent = await readFile(leadsFile, 'utf-8');
        const leads = JSON.parse(fileContent);

        return NextResponse.json({ leads }, { status: 200 });
    } catch (error) {
        console.error('Error retrieving leads:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve leads' },
            { status: 500 }
        );
    }
}
