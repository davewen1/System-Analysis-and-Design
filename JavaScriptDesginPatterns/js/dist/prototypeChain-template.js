(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['prototypeChain'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <ul>\r\n          <li>"
    + container.escapeExpression(((helper = (helper = helpers.txtitem || (depth0 != null ? depth0.txtitem : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"txtitem","hash":{},"data":data}) : helper)))
    + "</li>\r\n        </ul>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <ul>\r\n          <li>No data availble</li>\r\n        </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h1>Prototype Chain</h1>\r\n<section class=\"prototypeChain\">\r\n<div class=\"details\">\r\n      <h3>Continued from Constructor...</h3>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1["prototype-chain"] : stack1)) != null ? stack1.para1 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1["prototype-chain"] : stack1)) != null ? stack1.para2 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1["prototype-chain"] : stack1)) != null ? stack1.para3 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1["prototype-chain"] : stack1)) != null ? stack1.para4 : stack1), depth0))
    + "</p>\r\n      <img src=\"img/PrototypeChain.PNG\" alt=\"prototype chain\" style=\"display: block; margin: 0 auto;\">\r\n      <h3>Summary</h3>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1.Summary : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\r\n</section>\r\n";
},"useData":true});
})();