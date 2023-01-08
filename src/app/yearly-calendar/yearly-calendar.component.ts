import { Component, OnInit , AfterViewInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import timeGridPlugin from '@fullcalendar/timegrid'
@Component({
  selector: 'app-yearly-calendar',
  templateUrl: './yearly-calendar.component.html',
  styleUrls: ['./yearly-calendar.component.scss']
})
export class YearlyCalendarComponent implements AfterViewInit{
  calendarOptions: CalendarOptions = {
    eventDisplay:"block",
    headerToolbar: {
      
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      right: `prev,title,next`,
      
    },
    
   
    views: {
      
      dayGridMonth: { 
        titleFormat: { year: 'numeric', month: 'short' },
        events: [
          { title: 'event 1', date: '2023-01-11' },
          { title: 'event 2', date: '2023-01-12' }
        ],
        isToday:true
      },
      timeGridWeek:{
        titleFormat: { year: 'numeric', month: 'short' },
        dayHeaderFormat :{ weekday: 'short', day: 'numeric',},
        events: [
          { title: 'event 1', date: '2023-01-11' },
          { title: 'event 2', date: '2023-01-12' }
        ],
        eventDisplay:"list-item",
        isToday:true,
      },
      timeGridDay:{
        titleFormat: { year: 'numeric', month: 'short' },
        dayHeaderFormat :{ weekday: 'short', day: 'numeric',},
        events: [
          { title: 'event 1', date: '2023-01-11' },
          { title: 'event 2', date: '2023-01-12' }
        ],
        eventDisplay:"list-item",
        isToday:true
      }
    },
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    // dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2023-01-11' },
          { title: 'event 2', date: '2023-01-12' }
    ],
   
    weekends: true,
    firstDay:1,
    // allDaySlot:false,
    scrollTime: "01:00:00",
    // slotMinTime: "01.00.00",
    // slotMaxTime: "12.00.pm",
    scrollTimeReset: false,
  
    dayHeaderFormat:{ weekday: 'short', 
    },
    slotDuration:'00:30',
    nowIndicator:true,
    // slotLabelFormat: [
      
    // ]
    
    
    
  };

  
  dayClrShowerLabel = {
    label1:"Working Day",
    label2:"Holiday",
    label3:"Week End",
    label4:"Working Hours"

  }

  handleDateClick(arg: { dateStr: string; }) {
    console.log('date click! ' + arg.dateStr)
  }
  ngAfterViewInit(): void{
    this.navBtnCss()
    this.addDefalutCss();
    // month navigation event emit 
    let monthBtn = document.querySelector('.fc-dayGridMonth-button');
    let weekBtn = document.querySelector('.fc-timeGridWeek-button');
    let dayBtn = document.querySelector('.fc-timeGridDay-button');
    monthBtn?.addEventListener('click',this.viewMonth)
    weekBtn?.addEventListener('click',this.viewWeek)
    dayBtn?.addEventListener('click',this.viewDay)

    // year next prv navigator event emit 
    let monthNavPrvBtn = document.querySelector('.fc-prev-button');
    let monthNavNxtBtn = document.querySelector('.fc-next-button');
    monthNavPrvBtn?.addEventListener('click',this.monthNavPrv)
    monthNavNxtBtn?.addEventListener('click',this.monthNavNext)


  }
  // adding working day html and css
  dayClrShower=()=>{
    try {
  
      if(!document.querySelector(".outer-container")){
        let divElement = document.createElement("div");
      
        divElement.innerHTML= `<div class='container'>
              <div class='day-container'>
              <div class='area  working-day'></div>
              <div class='text'>${this.dayClrShowerLabel.label1}</div>
            </div>
            <div class='day-container'>
                <div class='area holiday'></div>
                <div class='text'>${this.dayClrShowerLabel.label2}</div>
            </div>
            <div class='day-container'>
                <div class='area week-end'></div>
                <div class='text'>${this.dayClrShowerLabel.label3}</div>
            </div>
          </div>`
          divElement.classList.add('outer-container')
          let child = document.querySelector(".fc-view-harness")
          child?.parentNode?.insertBefore(divElement,child)
       
      }
      } catch (error) {
    
  }
  
  }
//adding current day css table header 
  currentDayCss = ()=>{
    try {
      let datecell = document.querySelector(".fc-day-today") as HTMLTableElement
      console.log(datecell)
      if(datecell.classList.contains("fc-day-other") == false){
        let dateclassname = datecell?.classList[1]
        console.log(datecell?.classList)
        let daynode = document.querySelector(`.${dateclassname}`)?.firstChild as HTMLDivElement
        daynode.classList.add('current-day')
        let daynodechild = daynode?.firstChild as HTMLAnchorElement
        daynodechild.classList.add('current-day-text');
         if(!document.querySelector(".fc-scrollgrid-shrink")){
          let splited = dateclassname.split("-")
         let day = splited[2]
          if(day == "mon"){
            daynode.classList.add('monday');
           }else if(day == "sun"){ 
            daynode.classList.add('sunday');
           }
         }
      }  
    } catch (error) {
     
    }
  }
  // table header current day css 
removeCurrentDayCss = ()=>{
if(document.querySelector(".current-day")){
  document.querySelector(".current-day")?.classList.remove('current-day')
  document.querySelector(".current-day-text")?.classList.remove('current-day-text')
 
}
   
}


// add Working Hours html css
addWorkingHours = ()=>{
let divElement = document.createElement("div");
divElement.innerHTML= `<div class='container'>
<div class='day-container'>
<div class='area  working-day'></div>
<div class='text'>${this.dayClrShowerLabel.label4}</div>
</div>
</div>`
divElement.classList.add('outer-container')
let child = document.querySelector(".fc-view-harness")
child?.parentNode?.insertBefore(divElement,child)
}
// event css
addEventCss = ()=>{
try {
  // if(){

  // }
  let eventdivs = document.querySelectorAll(".fc-daygrid-event-harness")
  eventdivs.forEach((item)=>{
      let parent = item?.parentNode?.parentNode as HTMLDivElement;
     parent?.classList.add('event-background')
  
  })

} catch (error) {
  console.log(error)
}
try {
  let eventdivs = document.querySelectorAll(".fc-daygrid-event-harness")
  eventdivs.forEach((item)=>{
      let parent = item?.parentNode?.parentNode as HTMLDivElement;
     parent?.classList.add('event-background')
  
  })

} catch (error) {
  console.log(error)
}
  }
   //Weekend css 
addWeekEndCss = ()=>{
  try {
    let div = document.querySelectorAll(".fc-day-sat")
    let div1 = document.querySelectorAll(".fc-day-sun")
    let saturdayDiv;
    let sundayDiv
    for(let i=0;i < div.length;i++){
      saturdayDiv =  div[i];
      saturdayDiv.classList.add("week-end")
      saturdayDiv.classList.add(".week-end-border")
    }
    for(let i=0; i < div1.length; i++){
      sundayDiv =  div1[i];
      sundayDiv.classList.add("week-end")
      sundayDiv.classList.add(".week-end-border")
    }
  } catch (error) {
    console.log(error)
  }
}


// month navigation function
viewMonth = ()=>{
if(document.querySelector(".outer-container")){
  let div = document.querySelector('.outer-container')
  div?.remove();
  }
  this.dayClrShower();
  this.addDefalutCss();

}

// Week navigation 
viewWeek = ()=> {
try {
  this.addDefalutCss();
  if(document.querySelector(".outer-container")){
  let div = document.querySelector('.outer-container')
  div?.remove();
  this.addWorkingHours();
  }
  
  
   
} catch (error) {
 
}
}

//Day Navigation
viewDay = ()=> {
try {
  this.addDefalutCss();  
  if(document.querySelector(".outer-container")){
    let div = document.querySelector('.outer-container')
    div?.remove();
    this.addWorkingHours();
    }
 

} catch (error) {
}
}

//adding current date css 
addDefalutCss = ()=> {
// adding current day css table header 
this.currentDayCss();

  // adding working hours html and css
  this.dayClrShower();
 
 
// adding event css 
this.addEventCss();
 //Weekend css
 this.addWeekEndCss();
document.querySelector(".fc-scroller")?.classList.add("header-overflow");

}

// navigation prv button
monthNavPrv = ()=>{
this.removeCurrentDayCss()
this.currentDayCss()
this.addEventCss();
this.addWeekEndCss();

}
// navigation nxt button
monthNavNext = ()=>{
this.removeCurrentDayCss()
this.currentDayCss()
this.addEventCss();
this.addWeekEndCss();


}

navBtnCss = () =>{
  try {
    // adding class on a year navigator
    let navigator  = document.querySelector(".fc-prev-button")?.parentElement as HTMLDivElement;
      if( navigator){
        navigator.classList.add('year-navigator')
        console.log(navigator)
      }
     
    
  } catch (error) {
    console.log(error)
  }
}
}
