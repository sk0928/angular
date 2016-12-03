(function(){
     /* module is the file for a particular application */
    angular.module('app')
        // .controller('EmployeeController',function($scope){
        //     $scope.pageTitle = "Capgemini India Pvt. Ltd.";
        //     $scope.pageSubTitle = "Employees Portal";
        // })
        //  .controller('EmployeeController',["$scope",function(capscp){
        //     capscp.pageTitle = "Capgemini India Pvt. Ltd.";
        //     capscp.pageSubTitle = "Employees Portal";
        // }])
        
        //  .controller('EmployeeController',EmployeeController);
        //  EmployeeController.$inject = ['$scope',]
        //  function EmployeeController(capscp){
        //     capscp.pageTitle = "Capgemini India Pvt. Ltd.";
        //     capscp.pageSubTitle = "Employees Portal";
        //     capscp.city="London";
        // }
        .controller('EmployeeController',EmployeeController);
            EmployeeController.$inject=['$rootScope'];
            function EmployeeController($rootScope){
            var vm=this
            vm.pageTitle = $rootScope.companyName;
            vm.pageSubTitle = "Employees Portal";
            vm.city="London";

            vm.changeCompanyName=function(){
                $rootScope.companyName = "HS Inc."
            }
        }
})();
