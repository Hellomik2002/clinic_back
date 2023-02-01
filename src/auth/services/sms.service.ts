import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
export function makeNumber(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



@Injectable()
export class SMSService {
  constructor(private readonly httpService: HttpService) {}

  async sendCode(code: String, phoneNumber: String) {
    try {
      const xmlBody = `<?xml version="1.0" encoding="UTF-8"?> 
    <message>
         <login>skyline</login>
         <pwd>nev_tQn8</pwd>
         <id>${makeid(12)}</id>
         <sender>pulseorg.kg</sender>
             <time></time>
         <text>${code}</text>
    
         <phones>
              <phone>${phoneNumber}</phone>
    </phones>
    </message>`;
      const responce = await this.httpService.axiosRef.post(
        'https://smspro.nikita.kg/api/message',
        xmlBody,
        {
          headers: {
            'Content-Type': 'application/xml',
          },
        },
      );
      if (responce.status == 200) return;
      throw new Error(responce.data);
    } catch (e) {
      console.log(e);
    }
  }
}
