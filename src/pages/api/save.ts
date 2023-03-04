
import { google } from 'googleapis';

import { NextApiRequest, NextApiResponse } from 'next';

const save = async ( req:NextApiRequest, res:NextApiResponse ) => {

    const { name, email } = req.body

    // Auth for google apis
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_MAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
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
        spreadsheetId:  process.env.GOOGLE_SHEET_ID,
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

