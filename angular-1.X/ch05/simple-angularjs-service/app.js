'use strict';

angular.module('notesApp', [])
    .controller('MainCtrl', [function () {
        var self = this;
        self.tab = 'first';
        self.open = function (tabName) {
            self.tab = tabName; 
            console.log("Opening " + tabName);
        }
    }])
    .controller('SubCtrl', ['ItemService', function (ItemService) {
        var self = this;
        self.list = function () {
            return ItemService.list();
        };
        self.add = function () {
            var index = {
                id: ItemService.list().length + 1,
                label: 'Item '+ItemService.list().length
            };
            console.log( index);
            ItemService.add(index);
        };
    }])
    .factory('ItemService', [function () {
        var items = [
            { id: 1, label: 'Item 0' },
            { id: 2, label: 'Item 1' }
        ];
        return {
            list: function () {
                return items;
            },
            add: function (item) {
                items.push(item);
            }
        };
    }]);