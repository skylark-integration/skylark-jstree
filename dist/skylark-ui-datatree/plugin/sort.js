/**
 * skylark-ui-datatree - The skylark datatree widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-datatree/
 * @license MIT
 */
define(["skylark-utils/langx","skylark-utils/browser","skylark-utils/eventer","skylark-utils/noder","skylark-utils/geom","skylark-utils/velm","skylark-utils/query","../tree"],function(t,e,r,s,n,i,o,l){"use strict";if(!o.jstree.plugins.sort)return o.jstree.defaults.sort=function(t,e){return this.get_text(t)>this.get_text(e)?1:-1},o.jstree.plugins.sort=function(t,e){this.bind=function(){e.bind.call(this),this.element.on("model.jstree",o.proxy(function(t,e){this.sort(e.parent,!0)},this)).on("rename_node.jstree create_node.jstree",o.proxy(function(t,e){this.sort(e.parent||e.node.parent,!1),this.redraw_node(e.parent||e.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",o.proxy(function(t,e){this.sort(e.parent,!1),this.redraw_node(e.parent,!0)},this))},this.sort=function(t,e){var r,s;if(t=this.get_node(t),t&&t.children&&t.children.length&&(t.children.sort(o.proxy(this.settings.sort,this)),e))for(r=0,s=t.children_d.length;r<s;r++)this.sort(t.children_d[r],!1)}},o});
//# sourceMappingURL=../sourcemaps/plugin/sort.js.map
