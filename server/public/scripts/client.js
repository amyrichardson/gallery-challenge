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

    self.addHeart = function (image) {
        $http({
            method: 'PUT',
            url: '/images/' + image.id,
            data: {}
        }).then(function(response){
            self.getImages();
        })
        .catch(function(error) {
            console.log('error: ', error);
        })
        
    }
    
    self.getImages = function () {
        $http({
            method: 'GET',
            url: '/images'
        }).then(function(response){
            self.imageGallery = response.data;
        });
    }

    self.getImages();    
}]);