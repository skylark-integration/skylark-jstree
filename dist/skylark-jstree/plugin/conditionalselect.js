/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(t,e,i,s,n,l,o){"use strict";if(!l.jstree.plugins.conditionalselect)return l.jstree.defaults.conditionalselect=function(){return!0},l.jstree.plugins.conditionalselect=function(t,e){this.activate_node=function(t,i){if(this.settings.conditionalselect.call(this,this.get_node(t),i))return e.activate_node.call(this,t,i)}},l});
//# sourceMappingURL=../sourcemaps/plugin/conditionalselect.js.map
