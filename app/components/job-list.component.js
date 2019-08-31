angular.module('jobFinder').
  component('jobList', {
    template:
      '<ul>' +
        '<li ng-repeat="job in $ctrl.jobs">' +
          '<img alt="logo" title="{{ job.company }}" src="{{ job.logo }}" />' +
          '<p>{{ job.position }}</p>' + 
          '<p>{{ job.location }}</p>' + 
        '</li>' +
      '</ul>',
    controller: function JobListController() {
      this.jobs = [
        {
          'id': 101,
          'company': 'Space-X',
          'logo': '',
          'position': 'Rocket scientist',
          'location': 'Hawthorne, California, U.S.',
          'fulltime': true
        },
        {
          'id': 102,
          'company': 'DELL',
          'logo': '',
          'position': 'Senior software developer',
          'location': 'Round Rock, Texas, U.S.',
          'fulltime': true
        },
        {
          'id': 103,
          'company': 'IBM',
          'logo': '',
          'position': 'System administrator',
          'location': 'Armonk, New York, U.S.',
          'fulltime': true
        },
      ];
    }
  });