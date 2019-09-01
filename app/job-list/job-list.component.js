angular.module('jobList').
  component('jobList', {
    templateUrl: '/app/job-list/job-list.template.html',
    controller: ['$http', function JobListController($http) {
      const self = this;
      self.orderProp = 'position';
      self.employmentType = '';
      $http.get('https://job-listings-67a80.firebaseio.com/openings.json')
        .then(res => {
          console.log(res.data);
          self.jobs = res.data;
        });
    }]
  });