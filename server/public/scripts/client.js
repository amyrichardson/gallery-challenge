console.log('js sourced');

var app = angular.module('galleryApp', []);

app.controller('GalleryController', ['$http', function($http){
    console.log('GalleryController loaded');
    var self = this;
    self.imageGallery = [];

    self.getImages = function () {
        $http({
            method: 'GET',
            url: '/images'
        }).then(function(response){
            self.imageGallery = response;
        });
    }

}]);