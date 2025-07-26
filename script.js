// Enhanced Loading screen functionality
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loaderProgress = document.querySelector(".loader-progress");
  const loaderText = document.querySelector(".text-line");

  // Simulate loading progress
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);

      // Add completion animation
      // Add more effects to the loader text on completion (no rotate)
      loaderText.style.transition =
        "transform 0.4s, color 0.4s, text-shadow 0.5s, letter-spacing 0.4s";
      loaderText.style.transform = "scale(1.15)";
      loaderText.style.color = "#fc405a";
      loaderText.style.letterSpacing = "12px";
      setTimeout(() => {
        loaderText.style.transform = "scale(1)";
        loaderText.style.color = "#ffffff";
        loaderText.style.letterSpacing = "5px";
        loaderText.style.textShadow = "none";
      }, 400);

      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        // Enable scrolling after loading
        document.body.style.overflow = "auto";
      }, 500);
    }
  }, 100);

  // Disable scrolling during loading
  document.body.style.overflow = "hidden";
});

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

  // Smooth progress animation
  scrollProgress.style.width = scrollPercent + "%";

  // Add glow effect based on scroll position
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
  // Add click animation
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

    // Add menu opening animation
    menu.style.transform = "rotate(180deg)";
    menu.style.transition = "transform 0.3s ease";
  } else {
    menu.src = "./images/menu.svg";
    nav.classList.remove("active");
    flag = true;

    // Add menu closing animation
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
    title: "Crop Prediction App",
    description:
      "A machine learning-powered web application that predicts optimal crop selection based on environmental factors, soil conditions, and historical data. Built during the Slash Mark internship.",
    techStack: ["React", "JavaScript", "MySQL", "Machine Learning", "Python"],
    features: [
      "ML-powered predictions",
      "Real-time data integration",
      "Interactive visualizations",
      "85% prediction accuracy",
      "Responsive design",
    ],
    liveLink: "https://github.com/Ganeshdojo/crop-recommendation-system",
    githubLink: "https://github.com/Ganeshdojo/crop-recommendation-system",
  },
  "temperature-converter": {
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
    liveLink: "https://ganeshdojo.github.io/Temperature-Converter/",
    githubLink: "https://github.com/Ganeshdojo/Temperature-Converter",
  },
  "link-shortener": {
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
    liveLink: "https://ganeshdojo.github.io/link-shortener/",
    githubLink: "https://github.com/Ganeshdojo/Link-Shortener",
  },
  "github-finder": {
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
    liveLink: "https://ganeshdojo.github.io/GitHub-Profile-Finder/",
    githubLink: "https://github.com/Ganeshdojo/GitHub-Profile-Finder",
  },
  "code-editor": {
    title: "Code Editor",
    description:
      "A feature-rich online code editor with syntax highlighting, supports HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "HTML, CSS, JavaScript",
      "Responsive design",
      "Dark / Light mode",
    ],
    liveLink: "https://ganeshdojo.github.io/Code-Editor/",
    githubLink: "https://github.com/Ganeshdojo/Code-Editor",
  },
  "stephen-hawking": {
    title: "Stephen Hawking Tribute",
    description:
      "A tribute page dedicated to the legendary physicist Stephen Hawking, showcasing his life, achievements, and contributions to science.",
    techStack: ["HTML", "CSS"],
    features: [
      "Interactive timeline",
      "Biography sections",
      "Achievements highlights",
    ],
    liveLink: "https://ganeshdojo.github.io/Stephen_Hawking/",
    githubLink: "https://github.com/Ganeshdojo/Stephen_Hawking",
  },
  "weather-forecast": {
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
    liveLink: "https://ganeshdojo.github.io/weather-Forecast--v1/",
    githubLink: "https://github.com/Ganeshdojo/weather-Forecast--v1",
  },
  calculator: {
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
    liveLink: "https://ganeshdojo.github.io/Calculator/",
    githubLink: "https://github.com/Ganeshdojo/Calculator",
  },
  "todo-app": {
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
    liveLink: "https://ganeshdojo.github.io/Todo-App/",
    githubLink: "https://github.com/Ganeshdojo/Todo-App",
  },
  "landing-page": {
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
    liveLink: "https://ganeshdojo.github.io/fm-sunnyside-landing-page/",
    githubLink: "https://github.com/Ganeshdojo/fm-sunnyside-landing-page",
  },
};

// Modal functionality
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

// Add click event to project containers
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const projectKey = link.getAttribute("data-project");
    const project = projectData[projectKey];

    if (project) {
      openModal(project);
    }
  });
});

// Add click event to regular project links (non-modal projects)
document.querySelectorAll('a[href^="https://"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    // Allow normal navigation for external links
    // No preventDefault here
  });
});

function openModal(project) {
  modalContent.innerHTML = `
    <h2>${project.title}</h2>
    <p class="project-description">${project.description}</p>
    
    <div class="project-details">
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
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
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
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Contact form functionality with Formspree
const contactForm = document.querySelector("#contact form");
const formMessages = document.getElementById("form-messages");

contactForm.addEventListener("submit", function (e) {
  // Show loading state
  const submitBtn = document.querySelector('#fsubmit[type="submit"]');
  const originalText = submitBtn.value;
  submitBtn.value = "Sending...";
  submitBtn.disabled = true;

  // Clear previous messages
  formMessages.textContent = "";
  formMessages.className = "form-messages";

  // Formspree will handle the submission automatically
  // We'll check for success/error after a delay
  setTimeout(() => {
    submitBtn.value = originalText;
    submitBtn.disabled = false;

    // Check if form was submitted successfully
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
  .querySelectorAll(".fade-in, #about, #intern, #projects, #contact")
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
