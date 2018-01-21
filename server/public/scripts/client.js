console.log('js sourced');

var app = angular.module('galleryApp', []);

app.controller('GalleryController', ['$http', function($http){
    console.log('GalleryController loaded');
    var self = this;
    self.imageGallery = [];
    self.imageRevealed = {};

    for (var i = 0, length = self.imageGallery.length; i < length; i++) {
        self.imageRevealed[self.imageGallery[i].id] = false;
      }

    self.flipCard = function (image) {
        if(!self.imageRevealed[image.id]){
            self.imageRevealed[image.id] = true;
        } else {
            self.imageRevealed[image.id] = false;
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