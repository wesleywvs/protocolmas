
import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch'; // Vercel usa node-fetch

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Apenas POST é permitido' });
    }

    const { eventName, eventId, fbp, fbc, utms, eventData } = req.body;

    // Pegue as variáveis de ambiente (mais seguro!)
    const PIXEL_ID = process.env.VITE_META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.VITE_META_CAPI_ACCESS_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error("Variáveis de ambiente do Meta não configuradas.");
        return res.status(500).json({ message: 'Erro de configuração no servidor.' });
    }

    // Pega o IP e User Agent do usuário a partir dos headers da Vercel
    const clientIpAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress;
    const clientUserAgent = req.headers['user-agent'];

    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                action_source: 'website',
                user_data: {
                    client_ip_address: clientIpAddress,
                    client_user_agent: clientUserAgent,
                    fbp: fbp,
                    fbc: fbc,
                },
                custom_data: {
                    ...eventData,
                    utm_source: utms?.source,
                    utm_medium: utms?.medium,
                    utm_campaign: utms?.campaign,
                },
            },
        ],
        // Habilite o modo de teste se estiver usando o "Test Events" do Meta
        // test_event_code: "TEST_CODE_AQUI" 
    };

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const jsonResponse = await response.json();

        if (!response.ok) {
            console.error('Erro da API do Meta:', jsonResponse);
            return res.status(500).json({ success: false, error: jsonResponse });
        }

        res.status(200).json({ success: true, response: jsonResponse });
    } catch (error) {
        console.error('Erro ao chamar a API do Meta:', error);
        res.status(500).json({ success: false, error: 'Erro interno do servidor' });
    }
}
