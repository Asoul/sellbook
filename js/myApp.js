var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate'])

app.controller('BookCarouselCtrl', function ($scope, $http) {
  
  $scope.myInterval = 5000000;
  $scope.books = []

  $scope.load = function() {
    $http.get('https://spreadsheets.google.com/feeds/list/1FjiemWDOuEpE00c0mA1L_WMgB4_WoDfIAp9GHVylOQE/od6/public/values?alt=json')
    .success(function (response) {
      books = response.feed.entry
      numOfBook = books.length

      for (var i = numOfBook - 1; i >= 0; i--) {
        bookID = books[i].gsx$博客來編號.$t
        $scope.books.push({
          title: books[i].gsx$書名.$t,
          originPrice: books[i].gsx$原價.$t,
          price: books[i].gsx$售價.$t,
          discount: books[i].gsx$折扣.$t,
          image: 'http://www.books.com.tw/img/' + bookID.substring(0, 3) + '/' + bookID.substring(3, 6) + '/' + bookID.substring(6, 8) + '/' + bookID + '.jpg',
          author: books[i].gsx$作者.$t,
          isbn: books[i].gsx$isbn.$t,
          comment: books[i].gsx$註解.$t,
          buyDate: books[i].gsx$購入日期.$t,
          buySource: books[i].gsx$購入管道.$t,
          link: 'http://www.books.com.tw/products/' + bookID,
          greenLabel: books[i].gsx$greenlabel.$t,
          blueLabel: books[i].gsx$bluelabel.$t,
          orangeLabel: books[i].gsx$orangelabel.$t,
          redLabel: books[i].gsx$redlabel.$t
        })
      }
    })
  }

})