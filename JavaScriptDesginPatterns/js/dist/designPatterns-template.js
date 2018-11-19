(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['designPatterns'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h1>Design Patterns</h1>\r\n<section class=\"designPatterns\">\r\n    <div class=\"details\"><h3>History</h3><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.history : stack1), depth0))
    + "</p></div>\r\n    <img src=\"img/DesignBook.jpg\" alt=\"The book, 'A Pattern Lanugage: Towns, Buildings, Construction'\" style=\"display: block; margin: 0 auto;\">\r\n    <div class=\"details\"><h3>What Are Design Patterns?</h3><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.what_are_design_patterns : stack1), depth0))
    + "</p></div>\r\n    <div class=\"details\"><h3>Identifying Design Patterns</h3><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.identifying_design_patterns : stack1), depth0))
    + "</p></div>\r\n    <div class=\"details\"><h3>Benefits of Design Patterns</h3><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.benefits_of_design_patterns : stack1), depth0))
    + "</p></div>\r\n    <div class=\"details\">\r\n      <h4>Criticisms of Design Patterns</h4>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.criticisms : stack1)) != null ? stack1.crit_para1 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.criticisms : stack1)) != null ? stack1.crit_para2 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.criticisms : stack1)) != null ? stack1.crit_para3 : stack1), depth0))
    + "</p>\r\n      <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.designPatterns : depth0)) != null ? stack1.criticisms : stack1)) != null ? stack1.crit_para4 : stack1), depth0))
    + "</p>\r\n    </div>\r\n</section>";
},"useData":true});
})();