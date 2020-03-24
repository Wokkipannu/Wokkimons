// Moving from having separate files for each monster to having them in one array
// In long the run this will be easier to handle
// Disregard the order when adding more monsters. ID should never change.
const allMonsters = [
  {"id": 0, "name": "Wab", "image": "https://i.imgur.com/zuBJBrK.png", "rarity": 1, "shinyImage": "https://i.imgur.com/zuBJBrK.png", "memberName": "Wabin"},
  {"id": 1, "name": "Toveri", "image": "https://i.imgur.com/ItfvElx.png", "rarity": 1, "shinyImage": "https://i.imgur.com/ItfvElx.png", "memberName": "Toverin"},
  {"id": 2, "name": "Pingala", "image": "https://i.imgur.com/qiqOPjY.png", "rarity": 1, "shinyImage": "https://i.imgur.com/1tvOdTL.png", "memberName": "Pingalan"},
  {"id": 3, "name": "Tuomo", "image": "https://i.imgur.com/trbXcd4.png", "rarity": 1, "shinyImage": "https://i.imgur.com/trbXcd4.png", "memberName": "Tuomon"},
  {"id": 4, "name": "Mimo", "image": "https://i.imgur.com/1IAVnRX.gif", "rarity": 1, "shinyImage": "https://i.imgur.com/1IAVnRX.gif", "memberName": "Mimon"},
  {"id": 5, "name": "Bagger", "image": "https://i.imgur.com/iaZYCB2.png", "rarity": 1, "shinyImage": "https://i.imgur.com/iaZYCB2.png", "memberName": "Baggerin"},
  {"id": 6, "name": "Pinokkio", "image": "https://i.imgur.com/HP0qPfv.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HP0qPfv.png", "memberName": "Pinokkion"},
  {"id": 7, "name": "Jose", "image": "https://i.imgur.com/9XteHON.png", "rarity": 1, "shinyImage": "https://i.imgur.com/0E3IU0K.png", "memberName": "Josen"},
  {"id": 8, "name": "Wokki", "image": "https://i.imgur.com/4ak9H6D.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/4ak9H6D.jpg", "memberName": "Wokin"},
  {"id": 9, "name": "Hjallis", "image": "https://i.imgur.com/66luRtV.png", "rarity": 1, "shinyImage": "https://i.imgur.com/66luRtV.png", "memberName": "Hjalliksen"},
  {"id": 10, "name": "Anssi", "image": "https://i.imgur.com/g7vEUgf.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/g7vEUgf.jpg", "memberName": "Anssin"},
  {"id": 11, "name": "Lakutoid", "image": "https://i.imgur.com/ZYpdkno.png", "rarity": 1, "shinyImage": "https://i.imgur.com/UlEZpJ4.png", "memberName": "Lakutoidin"},
  {"id": 12, "name": "Kari", "image": "https://i.imgur.com/cMaQvKw.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vvTqzox.png", "memberName": "Karin"},
  {"id": 13, "name": "Murina", "image": "https://i.imgur.com/RcM0OU7.png", "rarity": 1, "shinyImage": "https://i.imgur.com/RcM0OU7.png", "memberName": "Murinan"},
  {"id": 14, "name": "Pet Froge", "image": "https://i.imgur.com/ZnJ2Aj1.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/ZnJ2Aj1.gif", "memberName": "Pet Frogen"},
  {"id": 15, "name": "Niglet", "image": "https://i.imgur.com/TkQiFdM.png", "rarity": 1, "shinyImage": "https://i.imgur.com/TkQiFdM.png", "memberName": "Nigletin"},
  {"id": 16, "name": "Soy", "image": "https://i.imgur.com/HmXCFTI.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HmXCFTI.png", "memberName": "Soyn"},
  {"id": 17, "name": "Talla", "image": "https://i.imgur.com/9tsR64R.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/9tsR64R.jpg", "memberName": "Tallan"},
  {"id": 18, "name": "Grilli", "image": "https://i.imgur.com/HKkcjI5.png", "rarity": 1, "shinyImage": "https://i.imgur.com/HKkcjI5.png", "memberName": "Grillin"},
  {"id": 19, "name": "Greta", "image": "https://i.imgur.com/gIqzFLQ.png", "rarity": 1, "shinyImage": "https://i.imgur.com/NkGuKtm.png", "memberName": "Gretan"},
  {"id": 20, "name": "Karvinen", "image": "https://i.imgur.com/2MF6FYf.png", "rarity": 1, "shinyImage": "https://i.imgur.com/2MF6FYf.png", "memberName": "Karvisen"},
  {"id": 21, "name": "Rasila", "image": "https://i.imgur.com/QKlXBhB.png", "rarity": 1, "shinyImage": "https://i.imgur.com/QKlXBhB.png", "memberName": "Rasilan"},
  {"id": 22, "name": "Kimmo", "image": "https://i.imgur.com/nzzW2Yi.png", "rarity": 1, "shinyImage": "https://i.imgur.com/nzzW2Yi.png", "memberName": "Kimmon"},
  {"id": 23, "name": "Gruumer", "image": "https://i.imgur.com/vO3Q3ZS.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vO3Q3ZS.png", "memberName": "Gruumerin"},
  {"id": 24, "name": "Avaimet", "image": "https://i.imgur.com/5rL4gX5.png", "rarity": 1, "shinyImage": "https://i.imgur.com/5rL4gX5.png", "memberName": "Avaimet"},
  {"id": 25, "name": "Lakupena", "image": "https://i.imgur.com/rB6PWPo.png", "rarity": 1, "shinyImage": "https://i.imgur.com/rB6PWPo.png", "memberName": "Lakupenan"},
  {"id": 26, "name": "Tallapeli", "image": "https://i.imgur.com/tkxd5f8.png", "rarity": 1, "shinyImage": "https://i.imgur.com/tkxd5f8.png", "memberName": "Tallapelin"},
  {"id": 27, "name": "Olli", "image": "https://i.imgur.com/ZsITuUy.png", "rarity": 2, "shinyImage": "https://i.imgur.com/ZsITuUy.png", "memberName": "Ollin"},
  {"id": 28, "name": "Gerhard", "image": "https://i.imgur.com/a71IZJk.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/a71IZJk.jpg", "memberName": "Gerhardin"},
  {"id": 29, "name": "Göring", "image": "https://i.imgur.com/QnkB97h.png", "rarity": 2, "shinyImage": "https://i.imgur.com/QnkB97h.png", "memberName": "Göringin"},
  {"id": 30, "name": "Wabuu", "image": "https://i.imgur.com/GDERK1Z.png", "rarity": 2, "shinyImage": "https://i.imgur.com/GDERK1Z.png", "memberName": "Wabuun"},
  {"id": 31, "name": "Mamu", "image": "https://i.imgur.com/x8oa0zw.png", "rarity": 2, "shinyImage": "https://i.imgur.com/x8oa0zw.png", "memberName": "Mamun"},
  {"id": 32, "name": "Kiveskiertymä", "image": "https://i.imgur.com/8bwDN4d.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/8bwDN4d.jpg", "memberName": "Kiveskiertymän"},
  {"id": 33, "name": "Hampaaton läski", "image": "https://i.imgur.com/SxgsS2C.png", "rarity": 2, "shinyImage": "https://i.imgur.com/SxgsS2C.png", "memberName": "Hampaattoman läskin"},
  {"id": 34, "name": "Nigger Racer", "image": "https://i.imgur.com/V040C86.png", "rarity": 2, "shinyImage": "https://i.imgur.com/V040C86.png", "memberName": "Nigger Racerin"},
  {"id": 35, "name": "Mikko", "image": "https://i.imgur.com/1TioaPe.png", "rarity": 2, "shinyImage": "https://i.imgur.com/1TioaPe.png", "memberName": "Mikon"},
  {"id": 36, "name": "Chitti", "image": "https://i.imgur.com/ZzlgqZP.png", "rarity": 2, "shinyImage": "https://i.imgur.com/ZzlgqZP.png", "memberName": "Chittin"},
  {"id": 37, "name": "Pupu15", "image": "https://i.imgur.com/FWvjnLL.png", "rarity": 2, "shinyImage": "https://i.imgur.com/FWvjnLL.png", "memberName": "Pupu15:sta"},
  {"id": 38, "name": "Pena", "image": "https://i.imgur.com/04T1i78.png", "rarity": 2, "shinyImage": "https://i.imgur.com/04T1i78.png", "memberName": "Penan"},
  {"id": 39, "name": "Tallahasseessahallat", "image": "https://i.imgur.com/Q7YkWg8.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Q7YkWg8.gif", "memberName": "Tallahasseessahallatin"},
  {"id": 40, "name": "Yandex", "image": "https://i.imgur.com/OHWzczh.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/OHWzczh.gif", "memberName": "Yandexin"},
  {"id": 41, "name": "Pölysokerikakku", "image": "https://i.imgur.com/gZckwJI.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/gZckwJI.gif", "memberName": "Pölysokerikakun"},
  {"id": 42, "name": "Pepega", "image": "https://i.imgur.com/ZnJ2Aj1.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/ZnJ2Aj1.gif", "memberName": "Pepegan"},
  {"id": 43, "name": "Dala", "image": "https://i.imgur.com/JPaJiqy.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/JPaJiqy.gif", "memberName": "Dalan"},
  {"id": 44, "name": "Kolmio ukko", "image": "https://i.imgur.com/u4QidV6.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/u4QidV6.gif", "memberName": "Kolmio ukon"},
  {"id": 45, "name": "Ricardo", "image": "https://i.imgur.com/PhrGRGL.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/PhrGRGL.gif", "memberName": "Ricardon"},
  {"id": 46, "name": "Skeletoad", "image": "https://i.imgur.com/Kzh84zz.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Kzh84zz.gif", "memberName": "Skeletoadin"},
  {"id": 47, "name": "Justice", "image": "https://i.imgur.com/NTItTrO.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/NTItTrO.gif", "memberName": "Justicen"},
  {"id": 48, "name": "Augh", "image": "https://i.imgur.com/Sl9OMgj.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/Sl9OMgj.gif", "memberName": "Aughin"},
  {"id": 49, "name": "Ruokasooda", "image": "https://i.imgur.com/vVmZ8Bt.png", "rarity": 1, "shinyImage": "https://i.imgur.com/vVmZ8Bt.png", "memberName": "Ruokasoodan"},
  {"id": 50, "name": "Niilo22", "image": "https://i.imgur.com/6Oxzt5S.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/6Oxzt5S.jpg", "memberName": "Niilo22:n"},
  {"id": 51, "name": "Manne", "image": "https://i.imgur.com/gNmsExj.png", "rarity": 1, "shinyImage": "https://i.imgur.com/gNmsExj.png", "memberName": "Mannen"},
  {"id": 52, "name": "Breivik", "image": "https://i.imgur.com/4HJcpww.jpg", "rarity": 2, "shinyImage": "https://i.imgur.com/4HJcpww.jpg", "memberName": "Breivikin"},
  {"id": 53, "name": "Monimetallilamppu", "image": "https://i.imgur.com/IhvHWIR.png", "rarity": 1, "shinyImage": "https://i.imgur.com/IhvHWIR.png", "memberName": "Monimetallilampun"},
  {"id": 54, "name": "Gandalf", "image": "https://i.imgur.com/wK6dJU2.png", "rarity": 2, "shinyImage": "https://i.imgur.com/wK6dJU2.png", "memberName": "Gandalfin"},
  {"id": 55, "name": "Jesus", "image": "https://i.imgur.com/ESeqPEC.png", "rarity": 1, "shinyImage": "https://i.imgur.com/ESeqPEC.png", "memberName": "Jesuksen"},
  {"id": 56, "name": "Cold Brew", "image": "https://i.imgur.com/GsJAKvS.png", "rarity": 2, "shinyImage": "https://i.imgur.com/GsJAKvS.png", "memberName": "Cold Brew:n"},
  {"id": 57, "name": "Klonkku", "image": "https://i.imgur.com/HlHzfsE.jpg", "rarity": 1, "shinyImage": "https://i.imgur.com/HlHzfsE.jpg", "memberName": "Klonkun"},
  {"id": 58, "name": "Bean", "image": "https://i.imgur.com/QJjVCx6.gif", "rarity": 3, "shinyImage": "https://i.imgur.com/QJjVCx6.gif", "memberName": "Beanin"},
];

const commonMonsters = allMonsters.filter(monster => monster.rarity === 1);
const uncommonMonsters = allMonsters.filter(monster => monster.rarity === 2);
const rareMonsters = allMonsters.filter(monster => monster.rarity === 3);

function getLevel() {
  return Math.floor(Math.random() * 101);
}

module.exports = {
  allMonsters,
  commonMonsters,
  uncommonMonsters,
  rareMonsters,
  getLevel
};