export const dateConverter = (epochDate: number) => {
    var a = new Date(epochDate * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
} 

export const secondConverter = (seconds: number) => {
  var hrs = ~~(seconds / 3600);
  var mins = ~~((seconds % 3600) / 60);
  var secs = ~~seconds % 60;

  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + "h:" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + "m:" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}