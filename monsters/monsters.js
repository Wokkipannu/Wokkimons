// Moving from having separate files for each monster to having them in one array
// In long the run this will be easier to handle
// Disregard the order when adding more monsters. ID should never change.
const allMonsters = [
  {"id": 0, "name": "Wab", "image": "https://i.imgur.com/zuBJBrK.png", "rarity": 1, "shinyImage": "https://i.imgur.com/zuBJBrK.png"},
  {"id": 1, "name": "Toveri", "image": "https://i.imgur.com/ItfvElx.png", "rarity": 1, "shinyImage": "https://i.imgur.com/ItfvElx.png"},
  {"id": 2, "name": "Pingala", "image": "https://i.imgur.com/qiqOPjY.png", "rarity": 1, "shinyImage": "https://i.imgur.com/1tvOdTL.png"},
  {"id": 3, "name": "Tuomo", "image": "https://i.imgur.com/trbXcd4.png", "rarity": 1, "shinyImage": "https://i.imgur.com/trbXcd4.png"},
  {"id": 4, "name": "Mimo", "image": "https://i.imgur.com/1IAVnRX.gif", "rarity": 1, "shinyImage": "https://i.imgur.com/1IAVnRX.gif"},
  {"id": 5, "name": "Bagger", "image": "https://i.imgur.com/iaZYCB2.png", "rarity": 1, "shinyImage": "https://i.imgur.com/iaZYCB2.png"},
  {"id": 6, "name": "Pinokkio", "image": "https://i.imgur.com/HP0qPfv.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HP0qPfv.png"},
  {"id": 7, "name": "Jose", "image": "https://i.imgur.com/9XteHON.png", "rarity": 1, "shinyImage": "https://i.imgur.com/0E3IU0K.png"},
  {"id": 8, "name": "Wokki", "image": "https://i.imgur.com/4ak9H6D.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/4ak9H6D.jpg"},
  {"id": 9, "name": "Hjallis", "image": "https://i.imgur.com/66luRtV.png", "rarity": 1, "shinyImage": "https://i.imgur.com/66luRtV.png"},
  {"id": 10, "name": "Anssi", "image": "https://i.imgur.com/g7vEUgf.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/g7vEUgf.jpg"},
  {"id": 11, "name": "Lakutoid", "image": "https://i.imgur.com/ZYpdkno.png", "rarity": 1, "shinyImage": "https://i.imgur.com/UlEZpJ4.png"},
  {"id": 12, "name": "Kari", "image": "https://i.imgur.com/cMaQvKw.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vvTqzox.png"},
  {"id": 13, "name": "Murina", "image": "https://i.imgur.com/RcM0OU7.png", "rarity": 1, "shinyImage": "https://i.imgur.com/RcM0OU7.png"},
  {"id": 14, "name": "Pet Froge", "image": "https://i.imgur.com/ZnJ2Aj1.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/ZnJ2Aj1.gif"},
  {"id": 15, "name": "Niglet", "image": "https://i.imgur.com/TkQiFdM.png", "rarity": 1, "shinyImage": "https://i.imgur.com/TkQiFdM.png"},
  {"id": 16, "name": "Soy", "image": "https://i.imgur.com/HmXCFTI.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HmXCFTI.png"},
  {"id": 17, "name": "Talla", "image": "https://i.imgur.com/9tsR64R.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/9tsR64R.jpg"},
  {"id": 18, "name": "Grilli", "image": "https://i.imgur.com/HKkcjI5.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HKkcjI5.png"},
  {"id": 19, "name": "Greta", "image": "https://i.imgur.com/gIqzFLQ.png", "rarity": 1, "shinyImage": "https://i.imgur.com/NkGuKtm.png"},
  {"id": 20, "name": "Karvinen", "image": "https://i.imgur.com/2MF6FYf.png", "rarity": 1, "shinyImage": "https://i.imgur.com/2MF6FYf.png"},
  {"id": 21, "name": "Rasila", "image": "https://i.imgur.com/QKlXBhB.png", "rarity": 1, "shinyImage": "https://i.imgur.com/QKlXBhB.png"},
  {"id": 22, "name": "Kimmo", "image": "https://i.imgur.com/nzzW2Yi.png", "rarity": 1, "shinyImage": "https://i.imgur.com/nzzW2Yi.png"},
  {"id": 23, "name": "Gruumer", "image": "https://i.imgur.com/vO3Q3ZS.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vO3Q3ZS.png"},
  {"id": 24, "name": "Avaimet", "image": "https://i.imgur.com/5rL4gX5.png", "rarity": 1, "shinyImage": "https://i.imgur.com/5rL4gX5.png"},
  {"id": 25, "name": "Lakupena", "image": "https://i.imgur.com/rB6PWPo.png", "rarity": 1, "shinyImage": "https://i.imgur.com/rB6PWPo.png"},
  {"id": 26, "name": "Tallapeli", "image": "https://i.imgur.com/tkxd5f8.png", "rarity": 1, "shinyImage": "https://i.imgur.com/tkxd5f8.png"},
  {"id": 27, "name": "Olli", "image": "https://i.imgur.com/ZsITuUy.png", "rarity": 2, "shinyImage": "https://i.imgur.com/ZsITuUy.png"},
  {"id": 28, "name": "Gerhard", "image": "https://i.imgur.com/a71IZJk.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/a71IZJk.jpg"},
  {"id": 20, "name": "Göring", "image": "https://i.imgur.com/QnkB97h.png", "rarity": 2, "shinyImage": "https://i.imgur.com/QnkB97h.png"},
  {"id": 30, "name": "Wabuu", "image": "https://i.imgur.com/GDERK1Z.png", "rarity": 2, "shinyImage": "https://i.imgur.com/GDERK1Z.png"},
  {"id": 31, "name": "Mamu", "image": "https://i.imgur.com/x8oa0zw.png", "rarity": 2, "shinyImage": "https://i.imgur.com/x8oa0zw.png"},
  {"id": 32, "name": "Kiveskiertymä", "image": "https://i.imgur.com/8bwDN4d.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/8bwDN4d.jpg"},
  {"id": 33, "name": "Hampaaton läski", "image": "https://i.imgur.com/SxgsS2C.png", "rarity": 2, "shinyImage": "https://i.imgur.com/SxgsS2C.png"},
  {"id": 34, "name": "Nigger Racer", "image": "https://i.imgur.com/V040C86.png", "rarity": 2, "shinyImage": "https://i.imgur.com/V040C86.png"},
  {"id": 35, "name": "Mikko", "image": "https://i.imgur.com/1TioaPe.png", "rarity": 2, "shinyImage": "https://i.imgur.com/1TioaPe.png"},
  {"id": 36, "name": "Chitti", "image": "https://i.imgur.com/ZzlgqZP.png", "rarity": 2, "shinyImage": "https://i.imgur.com/ZzlgqZP.png"},
  {"id": 37, "name": "Pupu15", "image": "https://i.imgur.com/FWvjnLL.png", "rarity": 2, "shinyImage": "https://i.imgur.com/FWvjnLL.png"},
  {"id": 38, "name": "Pena", "image": "https://i.imgur.com/04T1i78.png", "rarity": 2, "shinyImage": "https://i.imgur.com/04T1i78.png"},
  {"id": 39, "name": "Tallahasseessahallat", "image": "https://i.imgur.com/Q7YkWg8.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Q7YkWg8.gif"},
  {"id": 40, "name": "Yandex", "image": "https://i.imgur.com/OHWzczh.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/OHWzczh.gif"},
  {"id": 41, "name": "Pölysokerikakku", "image": "https://i.imgur.com/gZckwJI.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/gZckwJI.gif"},
  {"id": 42, "name": "Pepega", "image": "https://i.imgur.com/ZnJ2Aj1.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/ZnJ2Aj1.gif"},
  {"id": 43, "name": "Dala", "image": "https://i.imgur.com/JPaJiqy.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/JPaJiqy.gif"},
  {"id": 44, "name": "Kolmio ukko", "image": "https://i.imgur.com/u4QidV6.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/u4QidV6.gif"},
  {"id": 45, "name": "Ricardo", "image": "https://i.imgur.com/PhrGRGL.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/PhrGRGL.gif"},
  {"id": 46, "name": "Skeletoad", "image": "https://i.imgur.com/Kzh84zz.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Kzh84zz.gif"},
  {"id": 47, "name": "Justice", "image": "https://i.imgur.com/NTItTrO.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/NTItTrO.gif"},
  {"id": 48, "name": "Augh", "image": "https://i.imgur.com/Sl9OMgj.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Sl9OMgj.gif"},
  {"id": 49, "name": "Ruokasooda", "image": "https://i.imgur.com/vVmZ8Bt.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vVmZ8Bt.png"},
  {"id": 50, "name": "Niilo22", "image": "https://i.imgur.com/6Oxzt5S.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/6Oxzt5S.jpg"},
  {"id": 51, "name": "Manne", "image": "https://i.imgur.com/gNmsExj.png", "rarity": 1, "shinyImage": "https://i.imgur.com/gNmsExj.png"},
  {"id": 52, "name": "Breivik", "image": "https://i.imgur.com/4HJcpww.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/4HJcpww.jpg"},
  {"id": 53, "name": "Monimetallilamppu", "image": "https://i.imgur.com/IhvHWIR.png", "rarity": 1, "shinyImage": "https://i.imgur.com/IhvHWIR.png"},
  {"id": 54, "name": "Gandalf", "image": "https://i.imgur.com/wK6dJU2.png", "rarity": 2, "shinyImage": "https://i.imgur.com/wK6dJU2.png"},
  {"id": 55, "name": "Jesus", "image": "https://i.imgur.com/ESeqPEC.png", "rarity": 1, "shinyImage": "https://i.imgur.com/ESeqPEC.png"},
  {"id": 56, "name": "Cold Brew", "image": "https://i.imgur.com/GsJAKvS.png", "rarity": 2, "shinyImage": "https://i.imgur.com/GsJAKvS.png"},
  {"id": 57, "name": "Klonkku", "image": "https://i.imgur.com/HlHzfsE.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/HlHzfsE.jpg"},
];

const commonMonsters = allMonsters.filter(monster => monster.rarity === 1);
const uncommonMonsters = allMonsters.filter(monster => monster.rarity === 2);
const rareMonsters = allMonsters.filter(monster => monster.rarity === 3);

function getLevel() {
  return Math.floor(Math.random() * 100);
}

module.exports = {
  allMonsters,
  commonMonsters,
  uncommonMonsters,
  rareMonsters,
  getLevel
};