Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

  Factory.define('institutions', Institutions, {
    name: function() { return Fake.word(); },
    country: function() { return Fake.word(); },
    city: function() { return Fake.word(); },
    history: function() { return Fake.paragraph(); },
    name: function() { return Fake.word(); },
    type: function() { return _.random(1, 2); },
    rating: function() { return _.random(1, 5); }
  });

  if (Institutions.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('institutions');
    });

  }

});
