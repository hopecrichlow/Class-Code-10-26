import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


const APP_ID = '2DCVwvpCNpQZQ80kKvaU2OKgBG3X4XKMoiBp8nTH';
const APP_KEY = 'DF8DszA9C5M13Ed844wDnaiiLrPXNtheKUjUeqYB';


$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': APP_KEY
  }
});

import PeopleCollection from './people_collection';
import PersonTemplate from './person_template';

let people = new PeopleCollection();

function renderPeople() {
  // Creating an empty dom node
  let $ul = $('<ul>,</ul>');

  // Iterate each of the models
  people.each(function(person){

    // Person is an instance of PersonModel

    //Grab raw data from model
    let data = person.toJSON();
    console.log('data', data);

    // Pass the data to our template
    let templateString = PersonTemplate(data);
    console.log('templateString', templateString);

    //use templateString to create an li dom node
    let $li = $(templateString);

    //append li to the ul
    $ul.append($li);
  });

  //set ul to the body
  $('body').html($ul);
}

// Load the data to be used and THEN run renderPeople
people.fetch().then(renderPeople);


// window.people = people;
// window.renderPeople = renderPeople;


console.log('Hello, World');
