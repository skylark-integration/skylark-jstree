/**
 * skylark-ui-datatree - The skylark datatree widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-datatree/
 * @license MIT
 */
define(["skylark-utils/langx","skylark-utils/browser","skylark-utils/eventer","skylark-utils/noder","skylark-utils/geom","skylark-utils/velm","skylark-utils/query","../tree","skylark-ui-swt/sbswt"],function(e,s,t,r,l,i,n,c,a){"use strict";if(!n.jstree.plugins.changed)return n.jstree.plugins.changed=function(e,s){var t=[];this.trigger=function(e,r){var l,i;if(r||(r={}),"changed"===e.replace(".jstree","")){r.changed={selected:[],deselected:[]};var n={};for(l=0,i=t.length;l<i;l++)n[t[l]]=1;for(l=0,i=r.selected.length;l<i;l++)n[r.selected[l]]?n[r.selected[l]]=2:r.changed.selected.push(r.selected[l]);for(l=0,i=t.length;l<i;l++)1===n[t[l]]&&r.changed.deselected.push(t[l]);t=r.selected.slice()}s.trigger.call(this,e,r)},this.refresh=function(e,r){return t=[],s.refresh.apply(this,arguments)}},n});
//# sourceMappingURL=../sourcemaps/plugin/changed.js.map
