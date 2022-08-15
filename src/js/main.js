import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex(0).addClass('test').ifIndex(null).ifIndex(1).addClass('work').ifIndex(null).ifIndex(4).removeClass('library');
});