import Backbone from 'backbone';
import PersonModel from './person_model';

// Responsible for loading all the data and creating an instance of the model
// Url is the same as the model's

let PeopleCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/People',

  model: PersonModel,

  parse: function(data) {
    return data.results;
  }

});

export default PeopleCollection;