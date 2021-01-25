var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
 client.request('SET_ACTIVITY', {
   pid: process.pid,
   activity : {
    details : "Botumu Eklemeye Ne Dersin?",
    assets : {
      large_image : "31",
      large_text : "deneme" 
    },
     buttons : [{label : "Ekle ⭐" , url : "https://discord.com/oauth2/authorize?client_id=784517399314432050&scope=bot&permissions=805314622"}] 
   }
 })
})


client.login({ clientId : "BOTUNİDSİ" }).catch(console.error)