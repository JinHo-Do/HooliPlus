angular.module('HooliPlus.content', ['ngAnimate'])

.controller('ContentController', function ($scope, $interval) {
  $scope.data = {}

  $scope.items = [
    {
      id: 1,
      username : 'khseok',
      createdAt: '2017.11.31',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex mauris, imperdiet ut imperdiet sit amet, accumsan a augue.',
      like: 120,
      comments: [
        {
          username: '1111',
          comment: 'Everything is awesome! Everything is cool when you are part of team.'
        },
        {
          username: '2222',
          comment: 'Quisque cursus odio ut diam dignissim.'
        }
      ]
    },
    {
      id: 2,
      username : 'Doveloper',
      createdAt: '2017.10.21',
      text: 'In consequat vehicula est at maximus. Quisque cursus odio ut diam dignissim, sed dictum lacus dignissim.',
      youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ',
      like: 9 
    },
    {
      id: 'seongchan1',
      username : 'seongchan',
      createdAt: '2017.10.20',
      text: 'Vivamus et nibh cursus, finibus sapien vel, congue orci. Mauris a rutrum eros. Nulla sed volutpat metus.',
      photoUrl: 'https://d13yacurqjgara.cloudfront.net/users/3132/screenshots/2138242/hooli.jpg',
      like: 10,
      comments: [
        {
          username: '3333',
          comment: 'Everything is awesome! Everything is cool when you are part of team.'
        },
        {
          username: '4444',
          comment: 'Quisque cursus odio ut diam dignissim.'
        }
      ]
    },
    {
      id: 'hyojeong1',
      username : 'hyojeong',
      createdAt: '2017.9.20',
      text: 'Aliquam consAliquam consequat justo in bi porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisisAliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem. fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.equat justo in bibendum volutpat. Suspendisse neque nisi, Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem. suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.',
      youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ',
      like: 10
    },
    {
      id: 'hyojeong2',
      username : 'hyojeong',
      createdAt: '2017.9.20',
      text: 'Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque nequc porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.',
      youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ',
      like: 10,
      comments: [
        {
          username: '555',
          comment: '5555555555555'
        }
      ]
    },
    {
      id: 'hyojeong3',
      username : 'hyojeong',
      createdAt: '2017.9.20',
      text: 'Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.',
      photoUrl: 'https://d13yacurqjgara.cloudfront.net/users/3132/screenshots/2138242/hooli.jpg',
      like: 10,
      comments: [
        {
          username: '777',
          comment: '777777777'
        }
      ]
    },
    {
      id: 'hyojeong4',
      username : 'hyojeong',
      createdAt: '2017.9.20',
      text: 'Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.',
      photoUrl: 'https://d13yacurqjgara.cloudfront.net/users/3132/screenshots/2138242/hooli.jpg',
      like: 10
    },
    {
      id: 'hyojeong5',
      username : 'hyojeong',
      createdAt: '2017.9.20',
      text: 'Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem. Aliquam consequat justo in bibendum volutpat. Suspendisse neque nisi, suscipit ac dolor sit amet, lacinia scelerisque neque. Sed pulvinar ut tellus ac porta. Nullam convallis dictum leo, in dignissim nunc vulputate a. Suspendisse posuere lectus eros. Curabitur ac maximus nibh. Donec sollicitudin, diam ut facilisis fermentum, dui leo lobortis lacus, sed blandit nulla mi a augue. Praesent ullamcorper, mi a porttitor scelerisque, ex lacus consectetur erat, eget venenatis augue dui eget sem.',
      photoUrl: 'https://d13yacurqjgara.cloudfront.net/users/3132/screenshots/2138242/hooli.jpg',
      like: 10
    }
  ];

  

  $scope.textAnimation = ['123','456','789'];

  

});
