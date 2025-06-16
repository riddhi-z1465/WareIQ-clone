document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const topBanner = document.querySelector('.top-banner');
    let navbarOffset = navbar.offsetTop; // Get the initial top position of the navbar

    // If there's a top banner, the navbar's offset will be its height
    if (topBanner) {
        navbarOffset = topBanner.offsetHeight;
    }

    // Function to update the sticky state
    function updateStickyNavbar() {
        if (window.scrollY >= navbarOffset) {
            navbar.classList.add('navbar-sticky');
            // Add padding to the body to prevent content jump when navbar becomes fixed
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('navbar-sticky');
            document.body.style.paddingTop = '0'; // Remove padding when not sticky
        }
    }

    window.addEventListener('scroll', updateStickyNavbar);

    // Run on load in case page is already scrolled
    updateStickyNavbar();

    // Re-calculate offset if window resized or banner is closed (if you implement that)
    window.addEventListener('resize', () => {
        // Recalculate offset when window is resized
        navbarOffset = topBanner ? topBanner.offsetHeight : navbar.offsetTop;
        updateStickyNavbar(); // Apply sticky state immediately after resize
    });


    // --- Dropdown functionality (modified for new structure) ---
    const hasDropdowns = document.querySelectorAll('.nav-item.has-dropdown');

    hasDropdowns.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu'); // Get the specific dropdown for this item

        item.addEventListener('mouseenter', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'grid'; // Use 'grid' for the full-width dropdown
            }
        });

        item.addEventListener('mouseleave', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Optional: for touch devices or click behavior (e.g., for mobile hamburger menu)
        item.addEventListener('click', (event) => {
            if (dropdownMenu && window.innerWidth <= 992) { // Only for mobile/tablet where main nav is hidden
                event.preventDefault(); // Prevent default link behavior
                // Toggle display
                if (dropdownMenu.style.display === 'grid' || dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                } else {
                    // Close other open dropdowns first (optional)
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.display = 'none';
                        }
                    });
                    dropdownMenu.style.display = 'grid'; // Use 'grid' for this dropdown
                }
            }
        });
    });

    // --- Top Banner Close Functionality ---
    const bannerCloseButton = document.querySelector('.banner-close');
    if (bannerCloseButton) {
        bannerCloseButton.addEventListener('click', () => {
            if (topBanner) {
                topBanner.style.display = 'none';
                // Important: Recalculate navbarOffset after banner is gone
                navbarOffset = navbar.offsetTop;
                updateStickyNavbar(); // Re-check sticky state
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const topBanner = document.querySelector('.top-banner');
    let navbarOffset = navbar.offsetTop;

    if (topBanner) {
        navbarOffset = topBanner.offsetHeight;
    }

    function updateStickyNavbar() {
        if (window.scrollY >= navbarOffset) {
            navbar.classList.add('navbar-sticky');
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('navbar-sticky');
            document.body.style.paddingTop = '0';
        }
    }

    window.addEventListener('scroll', updateStickyNavbar);
    updateStickyNavbar();
    window.addEventListener('resize', () => {
        navbarOffset = topBanner ? topBanner.offsetHeight : navbar.offsetTop;
        updateStickyNavbar();
    });

    // --- Dropdown functionality ---
    const hasDropdowns = document.querySelectorAll('.nav-item.has-dropdown');

    hasDropdowns.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');

        item.addEventListener('mouseenter', () => {
            if (dropdownMenu) {
                // Close any other open dropdowns first (optional, but good UX)
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.style.display = 'none';
                    }
                });

                if (dropdownMenu.classList.contains('full-width-dropdown')) {
                    dropdownMenu.style.display = 'grid'; // For Services dropdown
                } else if (dropdownMenu.classList.contains('platform-dropdown')) {
                    dropdownMenu.style.display = 'flex'; // For Platform dropdown
                } else if (dropdownMenu.classList.contains('network-dropdown')) {
                    dropdownMenu.style.display = 'block'; // For Network dropdown (simple list)
                } else {
                    dropdownMenu.style.display = 'block'; // Default for any other standard dropdowns
                }
            }
        });

        item.addEventListener('mouseleave', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Click functionality for mobile/tablet (if you implement a hamburger menu)
        item.addEventListener('click', (event) => {
            if (dropdownMenu && window.innerWidth <= 992) {
                event.preventDefault();
                // Toggle display
                if (dropdownMenu.style.display === 'grid' || dropdownMenu.style.display === 'flex' || dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                } else {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.display = 'none';
                        }
                    });

                    if (dropdownMenu.classList.contains('full-width-dropdown')) {
                        dropdownMenu.style.display = 'grid';
                    } else if (dropdownMenu.classList.contains('platform-dropdown')) {
                        dropdownMenu.style.display = 'flex';
                    } else if (dropdownMenu.classList.contains('network-dropdown')) {
                        dropdownMenu.style.display = 'block';
                    } else {
                        dropdownMenu.style.display = 'block';
                    }
                }
            }
        });
    });

    // --- Top Banner Close Functionality ---
    const bannerCloseButton = document.querySelector('.banner-close');
    if (bannerCloseButton) {
        bannerCloseButton.addEventListener('click', () => {
            if (topBanner) {
                topBanner.style.display = 'none';
                navbarOffset = navbar.offsetTop;
                updateStickyNavbar();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing sticky navbar and dropdown functionality) ...

    // --- Search Bar functionality ---
    const searchIconWrapper = document.querySelector('.search-icon-wrapper');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input'); // Get the input field

    if (searchIconWrapper && searchOverlay) {
        searchIconWrapper.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from bubbling up and closing immediately

            // Close any open dropdowns when search is clicked
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });

            // Toggle the display of the search overlay
            if (searchOverlay.style.display === 'flex') {
                searchOverlay.style.display = 'none';
            } else {
                searchOverlay.style.display = 'flex';
                searchInput.focus(); // Automatically focus the input field
            }
        });

        // Close search overlay if clicking anywhere outside of it
        document.addEventListener('click', function(event) {
            if (searchOverlay.style.display === 'flex' && !searchOverlay.contains(event.target) && !searchIconWrapper.contains(event.target)) {
                searchOverlay.style.display = 'none';
            }
        });

        // Optional: Close search overlay if 'Escape' key is pressed
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && searchOverlay.style.display === 'flex') {
                searchOverlay.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-button');
  

    // Function to open the modal (you'd call this when a user clicks something)
    function openModal() {
        modal.style.display = 'flex'; // Make the modal visible
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);

    // Event listener to close the modal if clicked outside the content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

   
    // --- Form Validation (Basic Example) ---
    const form = document.querySelector('.modal-content form');

    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        let isValid = true;
        const requiredInputs = form.querySelectorAll('input[required], select[required]');

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red'; // Highlight empty fields
                isValid = false;
            } else {
                input.style.borderColor = '#ddd'; // Reset border color
            }
        });

        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.borderColor = '#ddd';
        }

        const phoneInput = document.getElementById('phone');
        const phonePattern = /^[0-9]{10}$/; // Basic 10-digit phone number check
        if (!phonePattern.test(phoneInput.value)) {
            phoneInput.style.borderColor = 'red';
            isValid = false;
        } else {
            phoneInput.style.borderColor = '#ddd';
        }

        const robotCheckbox = document.getElementById('robot');
        if (!robotCheckbox.checked) {
            alert("Please confirm you're not a robot.");
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully! (This is a placeholder. You would send data to a server here.)');
         
            closeModal(); // Close the modal for this example
            form.reset(); // Clear the form
        } else {
            alert('Please fill in all required fields and correct the errors.');
        }
    });

  
});







document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.getElementById('emailInput');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();

        if (email === '') {
            alert('Please enter your email address.');
            emailInput.focus();
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // For this example, we'll just show an alert and clear the input
        alert(`Thank you for subscribing with: ${email}`);
        emailInput.value = ''; // Clear the input field after "submission"
    });
});


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});






document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all feature items
            featureItems.forEach(i => i.classList.remove('active'));

            // Add 'active' class to the clicked feature item
            this.classList.add('active');
        });
    });
});


let slideIndex = 0; // Start with the first slide
let autoSlideInterval; // Variable to hold the interval ID

// Function to show slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Increment slideIndex for auto-play
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide if at the end
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to control manual slide navigation (prev/next buttons)
function plusSlides(n) {
    // Clear the auto-slide interval and restart it after manual interaction
    clearInterval(autoSlideInterval);
    slideIndex += n - 1; // Adjust index based on n (-1 for prev, 1 for next)
    showSlides(); // Show the new slide
    startAutoSlide(); // Restart auto-play
}

// Function to go to a specific slide using dots
function currentSlide(n) {
    // Clear the auto-slide interval and restart it after manual interaction
    clearInterval(autoSlideInterval);
    slideIndex = n - 1; // Set index directly
    showSlides(); // Show the new slide
    startAutoSlide(); // Restart auto-play
}

// Function to start automatic slideshow
function startAutoSlide() {
    autoSlideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds (3000 ms)
}

// Pause slideshow on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
});


// Initial call to display the first slide and start auto-play
showSlides();
startAutoSlide();



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateSlider() {
        const translateX = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateX + ')';
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active-dot', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        updateSlider();
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            currentIndex = Array.from(dots).indexOf(e.target);
            updateSlider();
        }
    });

    // Initial update
    updateSlider();
});



    // JavaScript for Dropdown functionality (re-included for completeness)
    const hasDropdowns = document.querySelectorAll('.nav-item.has-dropdown');

    hasDropdowns.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Optional: for touch devices or click behavior
        item.addEventListener('click', (event) => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu && window.innerWidth <= 992) { // Only for mobile/tablet
                event.preventDefault(); // Prevent default link behavior
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });







document.addEventListener('DOMContentLoaded', function() {
    const mainNavbar = document.getElementById('mainNavbar');
    const stickyOffset = mainNavbar.offsetTop; // Get the initial top offset of the navbar

    function updateStickyNavbar() {
        if (window.scrollY > stickyOffset) {
            mainNavbar.classList.add('navbar-sticky');
        } else {
            mainNavbar.classList.remove('navbar-sticky');
        }
    }

    // Call the function on scroll and on page load
    window.addEventListener('scroll', updateStickyNavbar);
    updateStickyNavbar(); // Initial check in case the page is loaded scrolled down

    // --- Dropdown functionality (existing) ---
    const navItems = document.querySelectorAll('.navbar-nav .has-dropdown');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                // Close any other open dropdowns first
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdown) {
                        menu.style.display = 'none';
                    }
                });
                dropdown.style.display = 'block'; // Show dropdown
            }
        });

        item.addEventListener('mouseout', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.display = 'none'; // Hide dropdown
            }
        });
    });

    // Close dropdowns if clicking anywhere outside the navbar
    document.addEventListener('click', function(event) {
        if (!mainNavbar.contains(event.target)) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });

    // --- Search Bar functionality (existing) ---
    const searchIconWrapper = document.querySelector('.search-icon-wrapper');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');

    if (searchIconWrapper && searchOverlay) {
        searchIconWrapper.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from bubbling up and closing immediately

            // Close any open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            // Close login/contact modals
            const loginModal = document.getElementById('loginModal');
            if (loginModal) loginModal.style.display = 'none';
            const contactModal = document.getElementById('contactModal');
            if (contactModal) contactModal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling

            // Toggle the display of the search overlay
            if (searchOverlay.style.display === 'flex') {
                searchOverlay.style.display = 'none';
            } else {
                searchOverlay.style.display = 'flex';
                searchInput.focus(); // Automatically focus the input field
            }
        });

        // Close search overlay if clicking anywhere outside of it
        document.addEventListener('click', function(event) {
            if (searchOverlay.style.display === 'flex' && !searchOverlay.contains(event.target) && !searchIconWrapper.contains(event.target)) {
                searchOverlay.style.display = 'none';
            }
        });

        // Optional: Close search overlay if 'Escape' key is pressed
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && searchOverlay.style.display === 'flex') {
                searchOverlay.style.display = 'none';
            }
        });
    }

});





// header
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-text').style.opacity = 1;
    document.querySelector('.hero-map').style.opacity = 1;
  });





   const featureItems = document.querySelectorAll(".feature-item");

  featureItems.forEach(item => {
    item.addEventListener("click", () => {
      featureItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });



   const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => observer.observe(fader));




  //typing text
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Explore Our Virtual Warehouse";
    const typingTarget = document.querySelector('.typing-text');
    let index = 0;

    function type() {
      if (index < text.length) {
        typingTarget.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
      } else {
        // Wait 4 seconds, then clear and restart
        setTimeout(() => {
          typingTarget.innerHTML = '';
          index = 0;
          type();
        }, 4000);
      }
    }

    type();
  });


