(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['source'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <ul>\r\n          <li>Text: "
    + container.escapeExpression(((helper = (helper = helpers.txtitem || (depth0 != null ? depth0.txtitem : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"txtitem","hash":{},"data":data}) : helper)))
    + "</li>\r\n        </ul>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <ul>\r\n          <li>No data availble</li>\r\n        </ul>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <ul>\r\n          <li>Link: <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n        </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h1>Sources</h1>\r\n<section class=\"source\">\r\n    <div class=\"details\">\r\n      <h3>Texts</h3>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.sources : depth0)) != null ? stack1.text : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"details\">\r\n      <h3>Links</h3>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.sources : depth0)) != null ? stack1.weblinks : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</section>";
},"useData":true});
})();