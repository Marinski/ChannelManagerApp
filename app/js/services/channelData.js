'use strict';
// channelApp.factory('channelData', function($http, $q) {
//     return {
//         getChannel: function(id) {
//             var defer = $q.defer();
//             $http({
//                 method: 'GET',
//                 url: 'data/channel/' + id
//             }).success(function(data, status, headers, config) {
//                 defer.resolve(data);
//             }).error(function(data, status, headers, config) {
//                 defer.reject(data);
//             });
//             return defer.promise;
//         }
//     };
// });
channelApp.factory('channelData', function($resource) {
    
    var resource = $resource('/data/channel/:id', {id: '@id'});

    return {
        getChannel: function(id) {
        	return resource.get({id: id});
        },
        saveChannel: function(channel) {
            if (!channel.id) {
                resource.query().$promise.then(function(data) {
                    channel.id = data.length + 1;
                    resource.save(channel);
                });
            }
            else {
                resource.save(channel);
            }
        },
        getAllChannels: function () {
            return resource.query();
        }
    };
});