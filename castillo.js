function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function scrollToSection(event, id) {
  event.preventDefault(); // Prevent the default jump behavior


 const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');


  if(id==="home"){
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'end',     // Align to the top of the viewport
      inline: 'nearest'
    });
  }else{
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling

    });
  }
 
}


console.log("Screen Width: " + window.screen.width + "px");

  // Get the viewport width (width of the browser window)
  console.log("Viewport Width: " + window.innerWidth + "px");