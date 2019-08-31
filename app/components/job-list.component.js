angular.module('jobFinder').
  component('jobList', {
    templateUrl: '/app/templates/job-list.template.html',
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