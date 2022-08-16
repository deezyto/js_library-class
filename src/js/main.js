import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex([0,2,3]).toggleClass('test', 'test1').event(0, 'click', 'mousemove');
  new $('.tab-nav li').event(new $('.tab-nav li').onTab, 'click');
});