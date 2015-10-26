import Backbone from 'backbone';

let PersonModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/People',

  idAttribute: 'objectId'

});

export default PersonModel;