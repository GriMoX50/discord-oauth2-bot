module.exports = {
  token: process.env['token'],
  port: "\u0033\u0030\u0030\u0030",
  prefix: "+",
  label: "Claim Your Reward!",
  client: "",
  client_id: process.env['cid'],
  client_secret: process.env['cs'],
  redirect_uri: process.env['uri'],
  footer: "\u0064\u0069\u0073\u0063\u006f\u0072\u0064\u002e\u0067\u0067\u002f\u0065\u0076\u0065\u006e\u0069\u006e\u0067",
  support: "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0064\u0069\u0073\u0063\u006f\u0072\u0064\u002e\u0067\u0067\u002f\u0065\u0076\u0065\u006e\u0069\u006e\u0067",
  wehbook: process.env['wb'], //webhook logs
  owner: ["your id"], 
  authLink: process.env['auth_uri'],

}
