import DS from 'ember-data';
var Item = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Item.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Title A', body: 'Body A' },
    { id: 2, title: 'Title B', body: 'Body B' },
    { id: 2, title: 'Title B', body: 'Body B' },
    { id: 2, title: 'Title B', body: 'Body B' }
  ]
});

export default Item;
