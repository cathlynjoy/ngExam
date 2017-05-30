'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:NonvoiceCtrl
 * @description
 * # NonvoiceCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('NonvoiceCtrl', function($scope) {
  $scope.clerical = [
    {
      title: 'Data Checking',
      url: 'http://aptitude-test.com/fla/datachecking.swf',
      desc: 'You are presented with two addresses or invoices. You have to determine whether the two displayed addresses or invoices are exactly the same or different',
      code: 'absrea',
      time: '2 Mins'
    }, {
      title: 'Workload and Concentration',
      url: 'http://aptitude-test.com/fla/workload.swf',
      desc: 'You are to answer what may seem like short and simple questions.',
      code: 'absrea',
      time: '2 Mins'
    }, {
      title: 'Attention to Detail',
      url: 'http://aptitude-test.com/fla/attention.swf',
      desc: 'You are presented with three names, numbers, or addresses. You have to determine whether one of these are different from the other two, or if there is no difference between the three.',
      code: 'absrea',
      time: '3 Mins'
    }, {
      title: 'Alphabetical and Numerical Filing',
      url: 'http://aptitude-test.com/fla/filing.swf',
      desc: 'You are first to sort names and company names according to alphabetic filing, later you are to sort numerical sequences according to numerical filing.',
      code: 'absrea',
      time: '3 Mins'
    }
  ];

  $scope.aptitude = [
    {
      title: 'Mixed Numerical Aptitude',
      url: 'http://aptitude-test.com/fla/freetest.swf',
      desc: 'Includes 15 numerical aptitude questions with topics from:',
      topics: [
        'Numerical Logic', 'Numerical Reasoning', 'Data Interpretation', 'Math Knowledge'
      ],
      code: 'numapti',
      time: '20 Mins'
    }, {
      title: 'Mixed Non-Verbal Aptitude',
      url: 'http://aptitude-test.com/fla/freetest.swf',
      desc: 'Includes 15 mixed non-verbal aptitude questions with topics from:',
      topics: [
        'Non-verbal Reasoning', 'Abstract Reasoning', 'Spatial Visualization'
      ],
      code: 'nonapti',
      time: '15 Mins'
    }, {
      title: 'Mixed Verbal Aptitude',
      url: 'http://aptitude-test.com/fla/freetest.swf',
      desc: 'Includes 15 mixed verbal aptitude questions:',
      topics: [
        'Verbal Logic',
        'Verbal Reasoning',
        'Verbal Comprehension',
        'Vocabulary',
        'Word Relations',
        'Synonyms & Antonyms',
        'Homonyms',
        'Spelling & Grammar',
        'Word Meanings'
      ],
      code: 'verbalaptitude',
      time: '10 Mins'
    }
  ];
});
