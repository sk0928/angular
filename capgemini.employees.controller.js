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
            function EmployeeController(){
            var vm=this
            vm.pageTitle = "Capgemini India Pvt. Ltd.";
            vm.pageSubTitle = "Employees Portal";
            vm.city="London";
        }
})();
