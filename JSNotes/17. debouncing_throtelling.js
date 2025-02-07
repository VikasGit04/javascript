// Debouncing and Throttling in JavaScript


// Debouncing and Throttling are both techniques used to control how often a function gets triggered, especially 
// when dealing with events that can fire rapidly, like scrolling, resizing, or keypress events.

// 1. Debouncing:
// Debouncing is a technique where you ensure that a function is only executed after a certain amount of time has 
// passed since the last time it was triggered. It prevents the function from being called too often in quick succession.
// How does it work?
// Whenever an event is triggered (like a user typing in a text box), the function is delayed for a certain period.
// If the event is triggered again before that period ends, the delay is reset, and the function is not called.
// The function will only be executed after the event stops being triggered for a specified duration.
// Use case for Debouncing:
// Searching as you type: When a user types in a search box, you don't want to trigger a search request on every keystroke. Instead, you wait for the user to stop typing for a moment before triggering the search.
// Debouncing Example (Typing Search)
// Imagine you're typing in a search box, and you only want to trigger the search once you've stopped typing for a moment, not on every keystroke.
// Debounce Logic:
// Wait for the user to stop typing for 1 second before running the search.

// // Debounce function: waits for 1 second after the last event before executing
function debounce(func, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout); // Clear any previous timeouts
    timeout = setTimeout(() => {
      func(); // Run the function after the delay
    }, delay);
  };
}

// Simple search function that just logs the query
function search() {
  console.log("Search triggered!");
}

// Apply debounce to the search function (wait 1000ms)
const debouncedSearch = debounce(search, 1000);

// Simulating typing in the search box
debouncedSearch(); // Will not trigger immediately
debouncedSearch(); // Will still not trigger
setTimeout(debouncedSearch, 1500); // This will trigger the search after 1 second

// Explanation:
// If you keep calling debouncedSearch, it will only run the search function once after you stop typing for 1 second.


// 2. Throttling:
// What is Throttling?
// Throttling ensures that a function is only called once in a specified period, no matter how many times an event is 
// triggered.
// How does it work?
// Instead of allowing a function to run every time an event is triggered, throttling ensures the function runs at a 
// fixed rate.
// The function will run once every defined interval, even if the event continues to be triggered during that time.
// Use case for Throttling:
// Scrolling or resizing: If you want to handle a scroll or resize event but not overburden the system with too 
// many function calls.

// Throttling Example (Scrolling)
// Imagine you're scrolling down a page, and you want to log a message every 2 seconds, but you don't want it to 
// log too frequently as you scroll.
// Throttle Logic:
// Run the function at most once every 2 seconds, no matter how often the event happens.

// Throttle function: runs once every 2 seconds
function throttle(func, delay) {
  let lastTime = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      func(); // Run the function
      lastTime = now; // Update last execution time
    }
  };
}

// Simple function to log the scroll
function handleScroll() {
  console.log("Scrolling...");
}

// Apply throttle to the scroll handler (every 2000ms or 2 seconds)
const throttledScroll = throttle(handleScroll, 2000);

// Simulating scroll events (only one log will appear every 2 seconds)
setInterval(throttledScroll, 500); // Triggers every 0.5 seconds

// Explanation:
// Even if the throttledScroll is called multiple times in quick succession, the handleScroll function will only be called once every 2 seconds


// Key Differences:
// Debouncing delays the execution of a function until a certain period of inactivity.
// Throttling limits the function to run only once per defined interval, no matter how often the event happens.
// Summary:
// Debouncing is ideal when you want to wait until the user stops an action (like typing in a search box).
// Throttling is ideal when you want to control the frequency of an action that happens continuously (like scrolling).

// Example HTML File for Debouncing and Throttling:
// html
// Copy code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Debouncing and Throttling Examples</title>
// </head>
// <body>

//   <!-- Simple search input for debouncing -->
//   <h2>Debouncing Example: Search</h2>
//   <input type="text" id="searchBox" placeholder="Type to search..." style="width: 300px; padding: 10px; margin-bottom: 20px;"/>

//   <hr>
  
//   <!-- Scroll area for throttling -->
//   <h2>Throttling Example: Scroll</h2>
//   <div style="height: 3000px; background-color: lightgray;">
//     <p>Scroll down this area to see throttling in action!</p>
//   </div>

//   <script>
//     // Debounce function: waits for 1 second after the last event before executing
//     function debounce(func, delay) {
//       let timeout;
//       return function() {
//         clearTimeout(timeout); // Clear any previous timeouts
//         timeout = setTimeout(() => {
//           func(); // Run the function after the delay
//         }, delay);
//       };
//     }

//     // Simple search function that logs the query
//     function search() {
//       console.log("Search triggered!");
//     }

//     // Apply debounce to the search function (wait 1000ms)
//     const debouncedSearch = debounce(search, 1000);

//     // Bind to the search input box for debouncing
//     const searchBox = document.getElementById("searchBox");
//     searchBox.addEventListener("input", debouncedSearch);

//     // Throttle function: runs once every 2 seconds
//     function throttle(func, delay) {
//       let lastTime = 0;
//       return function() {
//         const now = new Date().getTime();
//         if (now - lastTime >= delay) {
//           func(); // Run the function
//           lastTime = now; // Update last execution time
//         }
//       };
//     }

//     // Simple function to log the scroll
//     function handleScroll() {
//       console.log("Scrolling...");
//     }

//     // Apply throttle to the scroll handler (every 2000ms or 2 seconds)
//     const throttledScroll = throttle(handleScroll, 2000);

//     // Bind the throttled scroll event on window scroll
//     window.addEventListener("scroll", throttledScroll);
//   </script>
// </body>
// </html>