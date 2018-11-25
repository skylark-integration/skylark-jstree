/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","../tree"],function(e,s,t,r,l,n,d){"use strict";if(!n.jstree.plugins.changed)return n.jstree.plugins.changed=function(e,s){var t=[];this.trigger=function(e,r){var l,n;if(r||(r={}),"changed"===e.replace(".jstree","")){r.changed={selected:[],deselected:[]};var d={};for(l=0,n=t.length;l<n;l++)d[t[l]]=1;for(l=0,n=r.selected.length;l<n;l++)d[r.selected[l]]?d[r.selected[l]]=2:r.changed.selected.push(r.selected[l]);for(l=0,n=t.length;l<n;l++)1===d[t[l]]&&r.changed.deselected.push(t[l]);t=r.selected.slice()}s.trigger.call(this,e,r)},this.refresh=function(e,r){return t=[],s.refresh.apply(this,arguments)}},n});
//# sourceMappingURL=../sourcemaps/plugin/changed.js.map
