// Sticky header functionality
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Enhanced Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress-bar");
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  scrollProgress.style.width = scrollPercent + "%";

  if (scrollPercent > 50) {
    scrollProgress.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8)";
  } else {
    scrollProgress.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  }
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  backToTopBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    backToTopBtn.style.transform = "scale(1)";
  }, 100);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mobile menu functionality
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

let flag = true;
menu.addEventListener("click", (e) => {
  if (flag) {
    menu.src = "./images/close.svg";
    nav.classList.add("active");
    flag = false;
    menu.style.transform = "rotate(180deg)";
    menu.style.transition = "transform 0.3s ease";
  } else {
    menu.src = "./images/menu.svg";
    nav.classList.remove("active");
    flag = true;
    menu.style.transform = "rotate(0deg)";
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) {
      menu.src = "./images/menu.svg";
      nav.classList.remove("active");
      flag = true;
    }
  });
});

// Project data for modal
const projectData = {
  "crop-prediction": {
    key: "crop-prediction",
    title: "Crop Prediction App",
    description:
      "A machine learning-powered web application that predicts optimal crop selection based on environmental factors, soil conditions, and historical data. Built during the Slash Mark internship with 85% prediction accuracy.",
    techStack: [
      "React",
      "JavaScript",
      "MySQL",
      "Machine Learning",
      "Python",
      "Django",
    ],
    features: [
      "ML-powered predictions",
      "Real-time data integration",
      "Interactive visualizations",
      "85% prediction accuracy",
      "Responsive design",
      "Full-stack application",
    ],
    liveLink: "https://agropredicta.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Crop-Prediction-System",
  },
  "github-finder": {
    key: "github-finder",
    title: "GitHub Profile Finder",
    description:
      "A web application that allows users to search for GitHub profiles and view detailed information including repositories, followers, and activity statistics.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub API"],
    features: [
      "Profile search",
      "Repository display",
      "Follower statistics",
      "Real-time data",
      "Responsive design",
    ],
    liveLink: "https://githubfinder-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/GitHub-Profile-Finder",
  },
  "code-editor": {
    key: "code-editor",
    title: "Code Editor",
    description:
      "A feature-rich online code editor with syntax highlighting, supports HTML, CSS, and JavaScript with real-time preview.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "HTML, CSS, JavaScript",
      "Real-time preview",
      "Responsive design",
      "Dark / Light mode",
    ],
    liveLink: "https://codebrew-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Code-Editor",
  },
  "link-shortener": {
    key: "link-shortener",
    title: "Link Shortener",
    description:
      "A URL shortening service that creates compact, shareable links. It uses tinyurl api to shorten the links.",
    techStack: ["HTML", "CSS", "JavaScript", "TinyURL API"],
    features: [
      "URL shortening",
      "TinyURL API",
      "Responsive design",
      "Shareable links",
      "Copy to clipboard",
    ],
    liveLink: "https://link-shortener-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Link-Shortener",
  },
  "weather-forecast": {
    key: "weather-forecast",
    title: "Weather Forecast App",
    description:
      "A real-time weather application that provides current weather conditions and forecasts for any location worldwide.",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    features: [
      "Real-time weather data",
      "Location search",
      "5-day forecast",
      "Responsive design",
    ],
    liveLink: "https://weather-forecast-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/weather-Forecast--v1",
  },
  "todo-app": {
    key: "todo-app",
    title: "Todo App",
    description:
      "A task management application that helps users organize and track their daily tasks and activities.",
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: [
      "Add/Delete tasks",
      "Mark as complete",
      "Local storage persistence",
      "Responsive design",
    ],
    liveLink: "https://todo-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Todo-App",
  },
  calculator: {
    key: "calculator",
    title: "Calculator",
    description:
      "A fully functional calculator with a modern design, supporting basic arithmetic operations and advanced calculations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Basic arithmetic operations",
      "Clear and delete functions",
      "Responsive design",
      "Keyboard support",
    ],
    liveLink: "https://calc-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Calculator",
  },
  "temperature-converter": {
    key: "temperature-converter",
    title: "Temperature Converter",
    description:
      "A utility application that converts temperatures between Celsius, Fahrenheit, and Kelvin with real-time updates and a clean, intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time conversion",
      "Multiple temperature scales",
      "Clean UI design",
      "Responsive layout",
    ],
    liveLink: "https://tempconv-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Temperature-Converter",
  },
  "stephen-hawking": {
    key: "stephen-hawking",
    title: "Stephen Hawking Tribute",
    description:
      "A tribute page dedicated to the legendary physicist Stephen Hawking, showcasing his life, achievements, and contributions to science.",
    techStack: ["HTML", "CSS"],
    features: [
      "Interactive timeline",
      "Biography sections",
      "Achievements highlights",
    ],
    liveLink: "https://hawking-tribute-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Stephen_Hawking",
  },
  "landing-page": {
    key: "landing-page",
    title: "Landing Page",
    description:
      "A modern, responsive landing page with smooth animations and engaging user interface design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Modern UI/UX",
      "Cross-browser compatibility",
    ],
    liveLink: "https://landingpg-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/fm-sunnyside-landing-page",
  },
  "color-generator": {
    key: "color-generator",
    title: "Color Generator App",
    description:
      "A dynamic color generator tool that allows users to input a base color and generate tints and shades instantly. The app visually displays color variations and provides hex codes, making it useful for designers and developers.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Dynamic color generation",
      "Tints and shades",
      "Hex code display",
      "Responsive UI",
      "Color algorithm logic",
    ],
    liveLink: "https://clrgen-ganeshp.vercel.app/",
    githubLink: "https://github.com/Ganeshdojo/Random-Colour-Generator-v1",
  },
};

// Initialize project cards with modal functionality
document.querySelectorAll(".project-link").forEach((link) => {
  const projectKey = link.getAttribute("data-project");
  const project = projectData[projectKey];

  if (project) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(project);
    });
  }
});

// Modal functionality - Updated with new structure
function openProjectModal(project) {
  let projectImage = "./images/calculator.jpg"; // default

  const projectImages = {
    "crop-prediction": "./images/crop_prediction.png",
    "github-finder": "./images/github_finder.png",
    "code-editor": "./images/code_editor.png",
    "link-shortener": "./images/link_shortener.png",
    "weather-forecast": "./images/weather.jpg",
    "todo-app": "./images/todo.jpg",
    calculator: "./images/calculator.jpg",
    "temperature-converter": "./images/temperature_converter.png",
    "stephen-hawking": "./images/stephen.jpg",
    "landing-page": "./images/landing_page.jpg",
    "color-generator": "./images/color_gen.png",
  };

  if (projectImages[project.key]) {
    projectImage = projectImages[project.key];
  }

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">×</button>
      <div class="modal-body">
        <div class="modal-image">
          <img src="${projectImage}" alt="${project.title}">
        </div>
        <div class="modal-info">
          <div class="modal-info-content">
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            
            <div class="tech-stack">
              <h3>Tech Stack</h3>
              <div class="tech-tags">
                ${project.techStack
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
              </div>
            </div>
            
            <div class="features">
              <h3>Key Features</h3>
              <ul>
                ${project.features
                  .map((feature) => `<li>${feature}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
          
          <div class="project-links">
            <a href="${
              project.liveLink
            }" target="_blank" class="btn btn-primary">Live Demo</a>
            <a href="${
              project.githubLink
            }" target="_blank" class="btn btn-secondary">View Code</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  const closeBtn = modalOverlay.querySelector(".modal-close");
  const closeModal = () => {
    modalOverlay.remove();
  };

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Contact form functionality with Formspree
const contactForm = document.querySelector("#contact form");
const formMessages = document.getElementById("form-messages");

contactForm.addEventListener("submit", function (e) {
  const submitBtn = document.querySelector('#fsubmit[type="submit"]');
  const originalText = submitBtn.value;
  submitBtn.value = "Sending...";
  submitBtn.disabled = true;

  formMessages.textContent = "";
  formMessages.className = "form-messages";

  setTimeout(() => {
    submitBtn.value = originalText;
    submitBtn.disabled = false;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      formMessages.textContent = "Message sent successfully!";
      formMessages.className = "form-messages success";
      contactForm.reset();
    } else if (urlParams.get("error")) {
      formMessages.textContent = "Failed to send message. Please try again.";
      formMessages.className = "form-messages error";
    }
  }, 2000);
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document
  .querySelectorAll(".fade-in, #about, #skills, #intern, #projects, #contact")
  .forEach((el) => {
    observer.observe(el);
  });

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
