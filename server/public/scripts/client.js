console.log('js sourced');

var app = angular.module('galleryApp', []);

app.controller('GalleryController', ['$http', function($http){
    console.log('GalleryController loaded');
    var self = this;
    self.imageGallery = [];
    self.imageRevealed = true;
    self.synopsisRevealed = false;

    self.flipCard = function () {
        if(self.imageRevealed) {
            self.imageRevealed = false;
            self.synopsisRevealed = true; 
        } else {
            self.imageRevealed = true;
            self.synopsisRevealed = false;
        }
    }
    
    self.getImages = function () {
        $http({
            method: 'GET',
            url: '/images'
        }).then(function(response){
            console.log('response from get:', response);
            
            self.imageGallery = response.data;
            console.log('images: ', self.imageGallery);
        });
    }

    self.getImages();    
}]);