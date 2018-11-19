(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['instanceConstructor'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Constructors</h1>\r\n<section class=\"constructor\">\r\n<div class=\"details\">\r\n      <h3>Introduction</h3>\r\n      <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.examples : depth0)) != null ? stack1.intro : stack1), depth0))
    + "</p>\r\n      <img src=\"img/InstancesConstructor.PNG\" alt=\"Instances Constructor\" style=\"display: block; margin: 0 auto;\">\r\n</div>\r\n<div>\r\n  <h3>Example</h3>\r\n  <p>The original JSON is something like the following:</p>\r\n  </div>\r\n</section>\r\n<script src=\"./js/dist/prism.js\"></script>";
},"useData":true});
})();