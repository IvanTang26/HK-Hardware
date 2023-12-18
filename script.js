import React from 'react'
import Data from './Data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
} 
  
//Real-Time Clock
window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
});


// For search function
myFunction = () => {
  const columns = [
    { name: 'Intel / Ryzen', index: 0, isFilter: true },
    { name: 'Name', index: 1, isFilter: true },
    { name: 'Core', index: 2, isFilter: false },
    { name: 'Lithography', index: 3, isFilter: false },
    { name: 'Max GHz', index: 4, isFilter: false },
    { name: 'Value', index: 5, isFilter: false },
    { name: 'Price', index: 6, isFilter: false }
  ]
  const filterColumns = columns.filter(c => c.isFilter).map(c => c.index)
  const trs = document.querySelectorAll(`#myTable tr:not(.header)`)
  const filter = document.querySelector('#myInput').value
  const regex = new RegExp(escape(filter), 'i')
  const isFoundInTds = td => regex.test(td.innerHTML)
  const isFound = childrenArr => childrenArr.some(isFoundInTds)
  const setTrStyleDisplay = ({ style, children }) => {
    style.display = isFound([
      ...filterColumns.map(c => children[c]) // <-- filter Columns
    ]) ? '' : 'none'
  }
  
  trs.forEach(setTrStyleDisplay)
}

// For Pagination
function App(){

  return (
    <div>
      <table>
        <thead className ='table'>
          <th style="width:5%">Intel / Ryzen</th>
          <th style="width:35%">Name</th>
          <th style="width:5%">Core</th>
          <th style="width:5%">Threads</th>
          <th style="width:5%">Lithography</th>
          <th style="width:25%">Max GHz</th>
          <th style="width:10%">Value</th>
          <th style="width:10%">Price</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}