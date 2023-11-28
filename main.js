//first section images changer

document.addEventListener("DOMContentLoaded", function () {
        // Get the section element
        const section = document.querySelector(".section.image-infinite-bg");

        // Get the array of image URLs from the data-images attribute
        const images = section.dataset.images
          ? JSON.parse(section.dataset.images)
          : [];

        // Get the index of the current image
        let currentIndex = 0;

        // Function to change the background image
        function changeImage() {
          section.style.backgroundImage = `url('${images[currentIndex]}')`;
          currentIndex = (currentIndex + 1) % images.length;
        }

        // Add animation to the section using the keyframes
        section.style.animation = "background_animation 8s infinite";

        // Call the changeImage function after each iteration of the animation
        section.addEventListener("animationiteration", changeImage);

        // Initial call to set the first image
        changeImage();
      });

      // form validation code

  
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
      var fields = form.querySelectorAll(":required");
      var valid = true;

      fields.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add("is-invalid");
        } else {
          field.classList.remove("is-invalid");
        }
      });

      if (!valid) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });

    // Reset validation when input fields are changed
    form.addEventListener("input", function () {
      form.classList.remove("was-validated");

      var fields = form.querySelectorAll(":required");
      fields.forEach(function (field) {
        field.classList.remove("is-invalid");
      });
    });
  });

