/**
 * skylark-ui-datatree - The skylark datatree widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-datatree/
 * @license MIT
 */
define(["skylark-utils/langx","skylark-utils/browser","skylark-utils/eventer","skylark-utils/noder","skylark-utils/geom","skylark-utils/velm","skylark-utils/query","../tree","skylark-ui-swt/sbswt"],function(t,s,a,i,l,e,n,o,r){"use strict";if(!n.jstree.plugins.massload)return n.jstree.defaults.massload=null,n.jstree.plugins.massload=function(t,s){this.init=function(t,a){this._data.massload={},s.init.call(this,t,a)},this._load_nodes=function(t,a,i,l){var e,o,r,d=this.settings.massload,u=(JSON.stringify(t),[]),h=this._model.data;if(!i){for(e=0,o=t.length;e<o;e++)h[t[e]]&&(h[t[e]].state.loaded||h[t[e]].state.failed)&&!l||(u.push(t[e]),r=this.get_node(t[e],!0),r&&r.length&&r.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},u.length){if(n.isFunction(d))return d.call(this,u,n.proxy(function(e){var n,o;if(e)for(n in e)e.hasOwnProperty(n)&&(this._data.massload[n]=e[n]);for(n=0,o=t.length;n<o;n++)r=this.get_node(t[n],!0),r&&r.length&&r.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,t,a,i,l)},this));if("object"==typeof d&&d&&d.url)return d=n.extend(!0,{},d),n.isFunction(d.url)&&(d.url=d.url.call(this,u)),n.isFunction(d.data)&&(d.data=d.data.call(this,u)),n.ajax(d).done(n.proxy(function(e,n,o){var d,u;if(e)for(d in e)e.hasOwnProperty(d)&&(this._data.massload[d]=e[d]);for(d=0,u=t.length;d<u;d++)r=this.get_node(t[d],!0),r&&r.length&&r.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,t,a,i,l)},this)).fail(n.proxy(function(e){s._load_nodes.call(this,t,a,i,l)},this))}}return s._load_nodes.call(this,t,a,i,l)},this._load_node=function(t,a){var i,l=this._data.massload[t.id],e=null;return l?(e=this["string"==typeof l?"_append_html_data":"_append_json_data"](t,"string"==typeof l?n(n.parseHTML(l)).filter(function(){return 3!==this.nodeType}):l,function(t){a.call(this,t)}),i=this.get_node(t.id,!0),i&&i.length&&i.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[t.id],e):s._load_node.call(this,t,a)}},n});
//# sourceMappingURL=../sourcemaps/plugin/massload.js.map
