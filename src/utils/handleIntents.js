function handleIntents(intents){
  const CONFIDENCE_THRESHOLD = 0.75;
  // console.log(intents.entities[Object.keys(intents.entities)[0]][0].confidence);
  console.log(intents.entities);
  const intentsList = Object.keys(intents.entities)
  switch (intentsList[0]){
    case 'greetings':
      return ["Oh hai!", 'Welcome!', 'Hi there!'];
    case 'name':
      return ["I am PatBot3000, but I was programmed by Patrick Franz"];
    case 'location':
      return ["I live in the San Francisco Bay area", 'I live in Redwood City, CA, USA'];
    default:
      return ['Sorry I don\'t understand', 'Hmmm... not really getting you.', 'Can you be more specific?'];
  }
}

export default handleIntents;