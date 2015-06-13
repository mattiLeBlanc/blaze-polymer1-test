
  var blazeRender,
    WebComponentsReady
  ;

  WebComponentsReady = new ReactiveVar(false);

  $(window).on("WebComponentsReady", function(e) {
    console.log("WEB COMPONENTS READY");
    return WebComponentsReady.set(true);

  });

  blazeRender = Blaze.render;

  return // uncomment to see normal render

  Blaze.render = function() {

    var renderArgs;

    renderArgs = arguments;
    return Tracker.autorun((function(_this) {
      return function() {
        if (WebComponentsReady.get()) {
          console.log("Execute deferred blaze render");
          return blazeRender.apply(_this, renderArgs);
        }
      };
    })(this));
  };

