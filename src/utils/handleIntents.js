import patBotImg from '../img/headshot_wpap_ico.png';

function handleIntents(intents){
  const CONFIDENCE_THRESHOLD = 0.75;
  console.dir(intents.entities)
  const intentsList = Object.keys(intents.entities);
  const returnPhrases = [];
  intentsList.forEach( intent => {
    switch (intent){
      case 'greetings':
        const greetingPhrases = ["Oh hai!", 'Welcome!', 'Hi there!'];
        returnPhrases.push(makeRespObject(greetingPhrases));
        break;
      case 'name':
        const namePhrases = ["I am PatBot3000, but I was programmed by Patrick Franz"];
        returnPhrases.push(makeRespObject(namePhrases));
        break;
      case 'location':
        const locPhrases =  ["I live in the San Francisco Bay area", 'I live in Redwood City, CA, USA'];
        returnPhrases.push(makeRespObject(locPhrases));
        break;
      default:
        const noComprende = ['Sorry I don\'t understand', 'Hmmm... not really getting you.', 'Can you be more specific?'];
        returnPhrases.push(makeRespObject(noComprende));
    }
  });
  return returnPhrases;

}

function makeRespObject(phrases){
  const respText = phrases[Math.floor(Math.random() * phrases.length)];
  return (
    {user: 'PatBot', icon: patBotImg, text: respText, timestamp: Date.now()}
  )
}

export default handleIntents;