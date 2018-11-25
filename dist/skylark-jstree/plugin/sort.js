/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(t,e,r,n,s,o,i){"use strict";if(!o.jstree.plugins.sort)return o.jstree.defaults.sort=function(t,e){return this.get_text(t)>this.get_text(e)?1:-1},o.jstree.plugins.sort=function(t,e){this.bind=function(){e.bind.call(this),this.element.on("model.jstree",o.proxy(function(t,e){this.sort(e.parent,!0)},this)).on("rename_node.jstree create_node.jstree",o.proxy(function(t,e){this.sort(e.parent||e.node.parent,!1),this.redraw_node(e.parent||e.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",o.proxy(function(t,e){this.sort(e.parent,!1),this.redraw_node(e.parent,!0)},this))},this.sort=function(t,e){var r,n;if(t=this.get_node(t),t&&t.children&&t.children.length&&(t.children.sort(o.proxy(this.settings.sort,this)),e))for(r=0,n=t.children_d.length;r<n;r++)this.sort(t.children_d[r],!1)}},o});
//# sourceMappingURL=../sourcemaps/plugin/sort.js.map
