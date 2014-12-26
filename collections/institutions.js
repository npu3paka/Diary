Institutions = new Mongo.Collection('Institutions');

Institutions.helpers({

});

Institutions.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
