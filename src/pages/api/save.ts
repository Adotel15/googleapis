
import { google, sheets_v4 } from 'googleapis';
import keys from '../../../apikey.json';

import { NextApiRequest, NextApiResponse } from 'next';

const save = async ( req:NextApiRequest, res:NextApiResponse ) => {

    const { name, email } = req.body

    // Auth for google apis
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: keys.client_email,
            private_key: keys.private_key.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    });

    // Select the sheet
    const sheets = google.sheets({ 
        version: "v4", 
        auth 
    });


    const params = {
        spreadsheetId: "1DegdQRfAPeSSu73cMgDr5aW97BKik7C46ZPUnArEIDg",
        range: 'A1:B1',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
            values: [[ name , email ]]
        },
    };

    try {
      
        await sheets.spreadsheets.values.append(params);
      
        res.status(200).json({ message: "Correo electrónico guardado con éxito." });

    } catch (error) {
        console.error(error);

        res.status(500).json({ message: "Error al guardar el correo electrónico." });
    }   
}

export default save;

