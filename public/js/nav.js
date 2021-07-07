


const mediaQuery = window.matchMedia('(min-width: 1024px)');
function handleTabletChange(e) {
  // Check if the media query is true
const navBar =  document.querySelector('#mySidenav');

  if (e.matches) {
    // Then log the following message to the console
    navBar.style.display = 'block';
   document.getElementById("mySidenav").style.width = "227px";
   // document.getElementsByClassName('mapp').style.setProperty('width', '859px', 'important');
   // document.getElementsById("main").style.setProperty("margin-left", '0px', 'important');


   // document.getElementById("main").style.setProperty("margin-left", '0px', 'important');

   // .style.setProperty("background-color", "red", "important");

    console.log('Media Query Matched!');
  }
  else {
   console.log('Media do not match');
    navBar.style.display = 'none';
   document.getElementById("mySidenav").style.width = "0px";
   document.getElementById("main").style.marginLeft = " 0px";
  }

}


// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery);


// =====================================================================
  const  openNav =  () => {
   // const navBarz =  document.querySelector('#mySidenav');
  const navBar =  document.querySelector('#mySidenav');
     const showNavQuerry = window.matchMedia('(min-width: 1024px)');


   if (navBar.style.display === 'block') {
      navBar.style.display = 'none';

      document.getElementById("mySidenav").style.width = "0px";
     // document.getElementById("main").style.marginLeft = "0px";
   document.getElementById("main").style.setProperty("margin-left", '0px', 'important');
      
   }


   else {
    navBar.style.display = 'block';
    document.getElementById("mySidenav").style.width = "227px";
    document.getElementById("main").style.marginLeft = "200px";
    // elispIcon.style.transition = '  transition: 0.5s;'
   }

}

//code for ellipse toogle 

const  openEllips =  () => {
  const elispIcon =  document.querySelector('#ellipsis-toggle');
   // elispIcon.style.display = 'flex';
   if (elispIcon.style.display === 'flex') {
      elispIcon.style.display = 'none';
   }
   else {
    elispIcon.style.display = 'flex'
    elispIcon.style.transition = '  transition: 0.5s;'
   }

}