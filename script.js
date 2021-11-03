function updateClock() {
    const now = new Date();
          dname = now.getDay();
          mo = now.getMonth();
          dnum = now.getDate();
          yr = now.getFullYear();
          hou = now.getHours();
          min = now.getMinutes();
          sec = now.getSeconds();
          pe = 'am';

          if(hou == 0){
            hou = 12;
          }
          if(hou > 0){
            hou = hou - 12;
            pe = 'pm';
          }

          Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n; 
          }

    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const ids = ['daytime', 'month', 'daynum', 'year', 'hour', 'minute', 'second', 'period'];
    const values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];


}

function initClock(time) {
    updateClock();
    window.setInterval('updateClock()', 1);
}


