import angular from 'angular';

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl'
  }
};

export default angular.module('betterCloudApp', [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
