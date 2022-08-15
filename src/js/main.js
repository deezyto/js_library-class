import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex([0,2,3]).toggleClass('test', 'test1').ifIndex(null).ifIndex([0,2,3]).toggleClass('test', 'test1');
});