import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex([0,2,3]).addClass('test', 'test1').ifIndex(null).addClass('work');
});