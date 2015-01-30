function formatUserDate(date) {
  date = new Date(date);
  var month = date.getMonth();
  var day = date.getMonth();
  var year = date.getFullYear();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  month = months[month];
  return month + " " + day + ", " + year;
}

function shrink7(string) {
  return string.substring(0,7)
}
