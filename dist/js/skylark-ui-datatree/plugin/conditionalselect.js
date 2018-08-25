/**
 * skylark-ui-datatree - The skylark datatree widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-datatree/
 * @license MIT
 */
define(["skylark-utils/langx","skylark-utils/browser","skylark-utils/eventer","skylark-utils/noder","skylark-utils/geom","skylark-utils/velm","skylark-utils/query","../tree","skylark-ui-swt/sbswt"],function(t,e,s,i,l,n,r,a,u){"use strict";if(!r.jstree.plugins.conditionalselect)return r.jstree.defaults.conditionalselect=function(){return!0},r.jstree.plugins.conditionalselect=function(t,e){this.activate_node=function(t,s){if(this.settings.conditionalselect.call(this,this.get_node(t),s))return e.activate_node.call(this,t,s)}},r});
//# sourceMappingURL=../sourcemaps/plugin/conditionalselect.js.map
