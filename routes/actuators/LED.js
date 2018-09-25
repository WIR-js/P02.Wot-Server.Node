var express = require('express'),
  router = express.Router(),
  resources = require('../../resources/model');



var observe = function(model){

  

  var model_Proxy = new Proxy(model,{

    set: function(target,key,value){
      var ledplugin = require('../../plugins/leds')

      try{

        ledplugin.switching(target,value);

        return Reflect.set(target,key,value);}

        catch(err){

          console.log(err)

        }

    }

  });

  return model_Proxy;

}



router.route('/').get(function (req, res, next) {
  req.result = resources.pi.actuators.leds;
  next();
});

router.route('/:id').get(function (req, res, next) { //#A

  req.result = resources.pi.actuators.leds[req.params.id];

  next();

}).put(function(req, res, next) { //#B

  var selected_led = observe(resources.pi.actuators.leds[req.params.id]);

  selected_led.value = req.body.value;

  req.result = selected_led;
  next();

})


module.exports = router;