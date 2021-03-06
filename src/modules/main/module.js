var Controller = require('./controller');
var Router = require('./router');
var Marionette = require('backbone.marionette');

var LayoutView = require('./views/layout/layout');

module.exports = Marionette.Module.extend({

    initialize: function(){

    },

    onStart: function(){

        var layoutView = new LayoutView();

        this.addInitializer(function(){
            this.app.addRegions({
                appContainer: 'body'
            });

            this.app.appContainer.show(layoutView);
        });

        this.addInitializer(function(){
            this.controller = new Controller({
                module: this,
                regions: this.app.appContainer.currentView
            });

            this.router = new Router({
                controller: this.controller
            });
        });

        this.addFinalizer(function(){
            this.controller.destroy();
        });

    }

});
