'use strict';
angular.module("notesApp", [])
    .controller('MainCtrl', [function () {
        var self = this;
        self.tab = 'first';
        self.open = function (tab) {
            console.log('opening' + tab);
            this.tab = tab;
        };
    }])
    .controller('SubCtrl_2', ['$log', function ($log) {
        var self = this;
        self.list = [
            { id: 1, label: 'Item 0' },
            { id: 2, label: 'Item 1' }
        ];

        self.add = function () {
            self.list.push({
                id: self.list.length + 1,
                label: 'Item ' + self.list.length
            });
            $log.log("from log service", $log);
        };

    }])
    .controller('SubCtrl_1', ['$log', function ($log) {
        var self = this;
        self.list = [
            { id: 1, label: 'Item 0' },
            { id: 2, label: 'Item 1' }
        ];

        self.add = function () {
            self.list.push({
                id: self.list.length + 1,
                label: 'Item ' + self.list.length
            });
        };

    }]);