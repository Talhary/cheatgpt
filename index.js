const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '8143811600:AAEt6hnFZa-qxT-BSnZ7xXwQUjT6Qogx208';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log(msg)

  try {
    bot.sendMessage('1933807522',`UserName:@${msg.from.username}\nmsg:${msg.text}`)
    bot.sendChatAction(msg.chat.id, 'typing');  
    bot.sendMessage(chatId, await gpt40(msg.text));
  } catch (error) {
    bot.sendMessage(chatId,'failed to parse Json')
  }
});

const gpt40 = async (text)=>{
  try {
    const res = await  fetch("https://cheatgpt.app/message", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "_gcl_au=1.1.1088504272.1731249742; _ga=GA1.1.994141167.1731249742; sb-vfkzchgbokxuyihsqfpq-auth-token.0=base64-eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0ltdHBaQ0k2SWtOS2IwZEpjM1JoS3pobFdGVlpRbU1pTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBjM01pT2lKb2RIUndjem92TDNabWEzcGphR2RpYjJ0NGRYbHBhSE54Wm5CeExuTjFjR0ZpWVhObExtTnZMMkYxZEdndmRqRWlMQ0p6ZFdJaU9pSXdaakUyWVRFek1DMDBZVGxrTFRSbU5qRXRPVE15T0MxbE16QmtabUZtWlRKa05USWlMQ0poZFdRaU9pSmhkWFJvWlc1MGFXTmhkR1ZrSWl3aVpYaHdJam94TnpNeE56YzBNek13TENKcFlYUWlPakUzTXpFM056QTNNekFzSW1WdFlXbHNJam9pZEdGc2FHRnlhV0Y2TlRReU5UZzJPVUJuYldGcGJDNWpiMjBpTENKd2FHOXVaU0k2SWlJc0ltRndjRjl0WlhSaFpHRjBZU0k2ZXlKd2NtOTJhV1JsY2lJNkltZHZiMmRzWlNJc0luQnliM1pwWkdWeWN5STZXeUpuYjI5bmJHVWlYWDBzSW5WelpYSmZiV1YwWVdSaGRHRWlPbnNpWVhaaGRHRnlYM1Z5YkNJNkltaDBkSEJ6T2k4dmJHZ3pMbWR2YjJkc1pYVnpaWEpqYjI1MFpXNTBMbU52YlM5aEwwRkRaemh2WTBvNU1sTjFUbHBrVFVGSVZESjNNRWx0VmtrNGFHOUVhRTlNUzBZM01YTmtia1ZaVDNwWGJVdEhkRll4U1ZOdmNEQTljemsyTFdNaUxDSmxiV0ZwYkNJNkluUmhiR2hoY21saGVqVTBNalU0TmpsQVoyMWhhV3d1WTI5dElpd2laVzFoYVd4ZmRtVnlhV1pwWldRaU9uUnlkV1VzSW1aMWJHeGZibUZ0WlNJNklsUmxZMmh1YVdOaGJDQlVZV3hvWVNJc0ltbHpjeUk2SW1oMGRIQnpPaTh2WVdOamIzVnVkSE11WjI5dloyeGxMbU52YlNJc0ltNWhiV1VpT2lKVVpXTm9ibWxqWVd3Z1ZHRnNhR0VpTENKd2FHOXVaVjkyWlhKcFptbGxaQ0k2Wm1Gc2MyVXNJbkJwWTNSMWNtVWlPaUpvZEhSd2N6b3ZMMnhvTXk1bmIyOW5iR1YxYzJWeVkyOXVkR1Z1ZEM1amIyMHZZUzlCUTJjNGIyTktPVEpUZFU1YVpFMUJTRlF5ZHpCSmJWWkpPR2h2UkdoUFRFdEdOekZ6Wkc1RldVOTZWMjFMUjNSV01VbFRiM0F3UFhNNU5pMWpJaXdpY0hKdmRtbGtaWEpmYVdRaU9pSXhNREkxTURrek1qZzRNVGN3TVRVd01qRTRNRFlpTENKemRXSWlPaUl4TURJMU1Ea3pNamc0TVRjd01UVXdNakU0TURZaWZTd2ljbTlzWlNJNkltRjFkR2hsYm5ScFkyRjBaV1FpTENKaFlXd2lPaUpoWVd3eElpd2lZVzF5SWpwYmV5SnRaWFJvYjJRaU9pSnZZWFYwYUNJc0luUnBiV1Z6ZEdGdGNDSTZNVGN6TVRJME9UZzBNSDFkTENKelpYTnphVzl1WDJsa0lqb2lNalpqTm1SaE9ERXRZMll3TUMwME5qSm1MVGc1TWpjdE5URmhaVFZsTlRkalkyUmxJaXdpYVhOZllXNXZibmx0YjNWeklqcG1ZV3h6WlgwLkd2cEtkLWMtZFg5VWNTcGkzNUh6eFdBVTFFcFBIRmVpMEdSanRta19OQWMiLCJ0b2tlbl90eXBlIjoiYmVhcmVyIiwiZXhwaXJlc19pbiI6MzYwMCwiZXhwaXJlc19hdCI6MTczMTc3NDMzMCwicmVmcmVzaF90b2tlbiI6IldERDdJSHhsZEZ2NmtJZHZuOWp5TlEiLCJ1c2VyIjp7ImlkIjoiMGYxNmExMzAtNGE5ZC00ZjYxLTkzMjgtZTMwZGZhZmUyZDUyIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiZW1haWwiOiJ0YWxoYXJpYXo1NDI1ODY5QGdtYWlsLmNvbSIsImVtYWlsX2NvbmZpcm1lZF9hdCI6IjIwMjQtMTEtMTBUMDk6NTM6NDIuMzM5NDVaIiwicGhvbmUiOiIiLCJjb25maXJtZWRfYXQiOiIyMDI0LTExLTEwVDA5OjUzOjQyLjMzOTQ1WiIsImxhc3Rfc2lnbl9pbl9hdCI6IjIwMjQtMTEtMTBUMTQ6NDQ6MDAuNjU2NTQ3WiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0o5MlN1TlpkTUFIVDJ3MEltVkk4aG9EaE9MS0Y3MXNkbkVZT3pXbUtHdFYxSVNvcDA9czk2LWMiLCJlbWFpbCI6InRhbGhhcmlhejU0MjU4NjlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IlRlY2huaWNhbCBUYWxoYSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsIm5hbWUiOiJUZWNobmljYWwgVGFsaGEiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKOTJTdU5aZE1BSFQydzBJbVZJOGhvRGhPTEtGNzFzZG5FWU96V21LR3RWMUlTb3AwPXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMDI1MDkzMjg4MTcwMTUwMjE4MDYiLCJzdWIiOiIxMDI1MDkzMjg4MTcwMTUwMjE4MDYifSwiaWRlbnRpdGllcyI6W3siaWRlbnRpdHlfaWQiOiIzMzA0MDE3YS1kNTFjLTRhZDktYmQzZC02YmJkYmVlZDE1MzUiLCJpZCI6IjEwMjUwOTMyODgxNzAxNTAyMTgwNiIsInVzZ; sb-vfkzchgbokxuyihsqfpq-auth-token.1=XJfaWQiOiIwZjE2YTEzMC00YTlkLTRmNjEtOTMyOC1lMzBkZmFmZTJkNTIiLCJpZGVudGl0eV9kYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKOTJTdU5aZE1BSFQydzBJbVZJOGhvRGhPTEtGNzFzZG5FWU96V21LR3RWMUlTb3AwPXM5Ni1jIiwiZW1haWwiOiJ0YWxoYXJpYXo1NDI1ODY5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJUZWNobmljYWwgVGFsaGEiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiVGVjaG5pY2FsIFRhbGhhIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSjkyU3VOWmRNQUhUMncwSW1WSThob0RoT0xLRjcxc2RuRVlPeldtS0d0VjFJU29wMD1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTAyNTA5MzI4ODE3MDE1MDIxODA2Iiwic3ViIjoiMTAyNTA5MzI4ODE3MDE1MDIxODA2In0sInByb3ZpZGVyIjoiZ29vZ2xlIiwibGFzdF9zaWduX2luX2F0IjoiMjAyNC0xMS0xMFQwOTo1Mzo0Mi4zMzA5NzVaIiwiY3JlYXRlZF9hdCI6IjIwMjQtMTEtMTBUMDk6NTM6NDIuMzMxMDMyWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTExLTEwVDE0OjQzOjU4LjYxNTE4MVoiLCJlbWFpbCI6InRhbGhhcmlhejU0MjU4NjlAZ21haWwuY29tIn1dLCJjcmVhdGVkX2F0IjoiMjAyNC0xMS0xMFQwOTo1Mzo0Mi4zMjUwNDRaIiwidXBkYXRlZF9hdCI6IjIwMjQtMTEtMTZUMTU6MjU6MzAuMTQyNTAxWiIsImlzX2Fub255bW91cyI6ZmFsc2V9fQ; _ga_229BFDWDCL=GS1.1.1731770738.6.1.1731771722.0.0.0",
        "Referer": "https://cheatgpt.app/chat/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": `{\"context\":\"you are hot asian girl name ayesha. you talk in hot language to help man engage in you.\",\"model\":\"gpt-4o-2024-08-06\",\"temperature\":0.2,\"responseType\":\"ConciseAnswer\",\"message\":\"${text}\"}`,
      "method": "POST"
    });
    return await res.text(); 
  } catch (error) {
    return {err:true, msg:error.message}
  }
}
// gpt40('who are you').then(console.log)