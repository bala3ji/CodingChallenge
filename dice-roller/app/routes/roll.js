import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    saveRoll: function(rollName, numberOfDice, numberOfSides) {
      alert(`Rolling ${numberOfDice}D${numberOfSides} as "${rollName}"`);
    let result = 0;
    for (let i = 0; i < numberOfDice; ++i) {
        result += 1 + (parseInt(Math.random() * numberOfSides));
    }

    const store = this.get('store');
    // This requests that the store give us an instance of our "roll" model with the given data
    const roll = store.createRecord('roll', {
        rollName,
        numberOfDice,
        numberOfSides,
        result
    });
    // This tells our model to save itself to our backend
    roll.save();
}

}
});
