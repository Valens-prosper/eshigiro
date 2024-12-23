const students = [
  {names: "Iradukunda valens",
   class: "s6mcb",
   gender: "male",
  },
   {names: "Iradukunda valens",
   class: "s6mcb",
   gender: "male",
  },
  {names: "Iradukunda valens",
   class: "s6mcb",
   gender: "male",
  },
  {names: "Iradukunda valens",
   class: "s6mcb",
   gender: "male",
  },
  {names: "Ishimwe cedric",
   class: "s6mcb",
   gender: "male",
  },
  {names: "tumukunde oscar",
   class: "s6mcb",
   gender: "male",
  },
  {names: "vashti ishimwe",
   class: "s6mcb",
   gender: "male",
  },
  {names: "sandrine niyigena",
   class: "s6mcb",
   gender: "male",
  },
  {names: "mugisha etienne",
   class: "s6mcb",
   gender: "male",
  },
  {names: "angelique iradukunda",
   class: "s6mcb",
   gender: "female",
  }
 ];

  let i = 0;
  while(i < students.length, i++){
   console.log("me");
  } 





const contentDiv = document.getElementById('content');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  if (contentDiv.style.backgroundColor === 'rgb(255, 204, 203)') {
    contentDiv.style.backgroundColor = '#f0f0f0'; // Default background
  } else {
    contentDiv.style.backgroundColor = '#ffcccb'; // Highlighted background
  }
});





document.getElementById("search-btn").addEventListener("click", function () {
  const searchText = document.getElementById("search").value.toLowerCase().trim();
  const listItems = document.getElementById("student-list");

  // Clear previous highlights
  listItems.forEach(item => item.classList.remove("highlight"));

  if (searchText) {
    let found = false;

    
    listItems.forEach(item => {
      const itemText = item.textContent.toLowerCase();

      if (itemText.includes(searchText)) {
        item.classList.add("highlight"); // Highlight matching item
        found = true;
      }
    });
    console.log(found);

    if (!found) {
      alert("No students found.");
    }
  } else {
    alert("Please enter a search term.");
  }
});

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("search").value = "";
  const listItems = document.querySelectorAll("student-list li");
  listItems.forEach(item => item.classList.remove("highlight"));
});



 function calculateGender(classId){
    const classGenderSection = document.querySelectorAll('gender-ration');
    }
   calculateGender('s1a');
  console.log(classGenderSection.innerContent);
   
    
