(function(){
     /* module is the file for a particular application */
    angular.module('app')
        // .controller('DepartmentController',function($scope){
        //     $scope.pageTitle = "Capgemini India Pvt. Ltd.";
        //     $scope.pageSubTitle = "Employees Portal";
        // })
        //  .controller('EmployeeController',["$scope",function(capscp){
        //     capscp.pageTitle = "Capgemini India Pvt. Ltd.";
        //     capscp.pageSubTitle = "Employees Portal";
        // }])
        
         .controller('DepartmentController',DepartmentController);
         function DepartmentController(){
            var vm =this;
            vm.projectName = "GSP SABB";
            vm.location = "Talwade MIDC";
            vm.city="Pune";
        }
})();
