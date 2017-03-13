class TopbarController {
  constructor(Authentication, $mdMedia, $scope, $mdSidenav) {
    "ngInject";
    $scope.screenIsSmall = !$mdMedia("gt-sm");
    $scope.$watch(() => {
      return $mdMedia("gt-sm");
    }, (big) => {
      $scope.screenIsSmall = !big;
    });

    this.toggleRight = () => {
      $mdSidenav("right")
        .toggle();
    };

    Object.assign(this, {
      Authentication
    });
  }
  isVerified() {
    if (this.Authentication) {
      return this.Authentication.data.mail_verified;
    }
    return false;
  }
  $onInit() {
    this.Authentication.update().then((data) => {
      this.loggedInUser = data;
    });
  }
}

export default TopbarController;
