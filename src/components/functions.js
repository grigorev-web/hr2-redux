

export function formatDate(str){
  if(!str) return '';
  let date = new Date(str);

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear().toString().slice(-2);
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  //let weekDay = date.getDay();
  const months = {
    0:'Янв',
    1:'Фев',
    2:'Мар',
    3:'Апр',
    4:'Мая',
    5:'Июн',
    6:'Июл',
    7:'Авг',
    8:'Сен',
    9:'Окт',
    10:'Ноя',
    11:'Дек',
  }

  // const weekDays = {
  //   0:'вс',
  //   1:'пн',
  //   2:'вт',
  //   3:'ср',
  //   4:'чт',
  //   5:'пт',
  //   6:'сб',
  // }

  //weekDay = weekDays[weekDay];
  //let today = new Date();
  //if(date.toDateString() == today.toDateString()) weekDay = 'сегодня';
  return `${day} ${months[month]}'${year} ${hours}:${minutes}`;
}
