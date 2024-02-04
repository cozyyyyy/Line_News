function contactLine(message) {
  const url = 'https://api.line.me/v2/bot/message/push';
  const token = 'xtOGYtUgl03yrW86SUoprwBGLAPv+nZbvYIyea4FoF+5iadzcAH0CSOhc5qPhehoU2ttT0d/9AKDnA8rWIr/JxEuYwSwoARco3CzpOpaWiep/nt0cq3qv1RNWlZAC9J1U/cAS9ruswcS8hQ1Il54mwdB04t89/1O/w1cDnyilFU=';

  if (!message) return; 
  Logger.log(message);

  const payload = {
    to: 'U388ff398cf50beb759e9f10d4cad8b45',
  messages: [
      { type: 'text', text: message }
    ]
  };

  const params = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + token
    },
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, params);
}
