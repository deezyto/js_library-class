import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex([0,2,3]).toggleClass('test', 'test1').event(0, 'click', 'mousemove');
  new $('#tab .tab-nav li').event(new $('#tab .tab-nav li').onTab, 'click');
  new $('#tab1').tabCreate(3).event(new $('.tab-nav li').onTab, 'click');
  new $('[data-modal-id]').modal();
});