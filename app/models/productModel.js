define([
  'jquery',
  'underscore',
  'backbone'

], function($, _, Backbone){

    var productModel = Backbone.Model.extend({

        defaults: {
          'productQuantity': 1
        }
        
    });

    return productModel;
});
