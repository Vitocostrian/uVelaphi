document.addEventListener('DOMContentLoaded', () => {
    // Data for categories
    const categories = [
      { title: 'History', description: 'Discover African history.', image: './images/History.png' },
      { title: 'Geography', image: './images/Geography.png' },
      { title: 'Cultures', image: './images/Cultures.png' },
      { title: 'Languages', image: './images/Langauges.png' },
      { title: 'Beliefs', image: './images/Beliefs.png' },
      { title: 'Monarchies', image: './images/Clans and chiefdoms.png' },
    ];
  
    // Data for cultures
    const cultures = [
      { name: 'Zulu', image: './images/images/zulu_dance.jpg' , description: '12 Million Speakers', url: './cultures/zulu.html'},
      { name: 'Xhosa', image: './images/images/xhosa_wedding.jpg', description: '12 Million Speakers', url: './cultures/xhosa.html' },
      { name: 'Ndebele', image: './images/images/matebele_women3.jpg', description: '12 Million Speakers', url: './cultures/ndebele.html' },
      { name: 'Swati', image: './images/images/swati_girl.jpg', description: '12 Million Speakers', url: './cultures/swati.html' },
      { name: 'Matebele', image: './images/images/ndebele_gogos6.jpg', description: '12 Million Speakers', url: './cultures/ndebele.html' },
      { name: 'Ngoni', image: './images/images/abangoni8.jpg', description: '12 Million Speakers', url: './cultures/ngoni.html'},
      { name: 'Basotho', image: './images/images/sotho1.jpg', description: '12 Million Speakers', url: './cultures/sotho.html' },
      { name: 'VaTsonga', image: './images/images/tsonga2.jpg', description: '12 Million Speakers', url: './cultures/tsonga.html'},
      { name: 'Batswana', image: './images/images/tswana2.jpg', description: '12 Million Speakers', url: './cultures/tswana.html'},
      { name: 'VhaVenda', image: './images/images/venda8.jpg', description: '12 Million Speakers', url: './cultures/venda.html'},
      { name: 'Bapedi', image: './images/images/pedi4.jpg', description: '12 Million Speakers', url: './cultures/pedi.html'},
      { name: 'Baphuti', image: './images/images//new_pics/phuti3.jpg', description: '12 Million Speakers', url: './cultures/phuti.html'},
      { name: 'AmaBhaca', image: './images/images/bhaca.jpg', description: '12 Million Speakers', url: './cultures/bhaca.html'},
      { name: 'Khoisan', image: './images/images/new_pics/basarwa5.jpg', description: '12 Million Speakers', url: './cultures/khoisan.html'},
      { name: 'AmaMpondo', image: './images/images/new_pics/xhosa_ladies2.jpg', description: '12 Million Speakers', url: './cultures/mpondo.html'},
      { name: 'AmaHlubi', image: './images/images/new_pics/xhosa-couple.jpg', description: '12 Million Speakers', url: './cultures/hlubi.html'},
      { name: 'AmaMpondomise', image: './images/images/new_pics/xhosa6.jpg', description: '12 Million Speakers', url: './cultures/mpondomise.html'},
      { name: 'AmaMfengu', image: './images/images/new_pics/amafengu.jpeg', description: '12 Million Speakers', url: './cultures/fengu.html'}
      
    ];

    const proverbs = [
        { text: "Wisdom is like a baobab tree; no one individual can embrace it.", source: "African Proverb" },
        { text: "He who learns, teaches.", source: "African Proverb" },
        { text: "If you want to go fast, go alone. If you want to go far, go together.", source: "African Proverb" },
        { text: "When there is no enemy within, the enemies outside cannot hurt you.", source: "African Proverb" },
        { text: "The child who is not embraced by the village will burn it down to feel its warmth.", source: "African Proverb" }
    ];

    let currentIndex = 0;
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const searchBar = document.querySelector('.search-bar');

    // Toggle dropdown
    dropdownButton.addEventListener("click", function (e) {
      e.stopPropagation();
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      dropdownContent.style.display = expanded ? "none" : "block";
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest('.dropdown')) {
        dropdownContent.style.display = "none";
        dropdownButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle mobile menu and change hamburger icon
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
      this.classList.toggle("active");
      this.innerHTML = this.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      
      // Move search bar to mobile menu when it's opened
      if (navLinks.classList.contains("show")) {
        navLinks.insertBefore(searchBar, navLinks.firstChild);
      } else {
        document.querySelector('nav').insertBefore(searchBar, navLinks);
      }
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove("active");
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav').insertBefore(searchBar, navLinks);
      });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        hamburger.classList.remove("active");
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav').insertBefore(searchBar, navLinks);
      }
    });
    
    function showProverb() {
        const proverbText = document.getElementById('proverb-text');
        const proverbSource = document.getElementById('proverb-source');
        
        proverbText.textContent = proverbs[currentIndex].text;
        proverbSource.textContent = `- ${proverbs[currentIndex].source}`;
        
        currentIndex = (currentIndex + 1) % proverbs.length;
    }
    
    function startProverbRotation() {
        showProverb(); // Show the first proverb immediately
        setInterval(showProverb, 5000); // Change proverb every 5 seconds
    }
    
    window.onload = startProverbRotation;
    
  
    const categoryGrid = document.querySelector('.grid');
    const cultureGrid = document.getElementById('culture-grid');
  
    // Function to create category cards
    function createCategoryCards() {
      categories.forEach((category) => {
        const card = document.createElement('div');
        card.classList.add('category-card');
  
        card.innerHTML = `
          <img class="lazy-load" data-src="${category.image}" alt="${category.title}">
          <div class="overlay">
            <h3>${category.title}</h3>
            ${category.description ? `<p>${category.description}</p>` : ''}
            <button class="view-button">View your roots</button>
          </div>
        `;
  
        const imgElement = card.querySelector('img');
        imgElement.onload = () => imgElement.removeAttribute('data-src');
  
        categoryGrid.appendChild(card);
      });
    }
  
    function createCultureCards() {
        const cultureGrid = document.getElementById('culture-grid');
    
        cultures.forEach(culture => {
            // Create an anchor element
            const cardLink = document.createElement('a');
            cardLink.href = culture.url; // Make sure 'culture.url' contains the link to the destination page
            cardLink.classList.add('culture-link'); // Optional: add a class for styling
    
            const card = document.createElement('div');
            card.classList.add('culture-card');
    
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            imageContainer.style.backgroundImage = `url('${culture.image}')`;
    
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
    
            const title = document.createElement('h2');
            title.textContent = culture.name;
    
            const description = document.createElement('p');
            description.textContent = culture.description;
    
            overlay.appendChild(title);
            overlay.appendChild(description);
            card.appendChild(imageContainer);
            card.appendChild(overlay);
            
            // Append the card to the anchor element
            cardLink.appendChild(card);
            
            // Append the anchor (card link) to the culture grid
            cultureGrid.appendChild(cardLink);
        });
    }
    
  
    // Lazy loading function for images
    function lazyLoadImages() {
      const lazyImages = document.querySelectorAll('.lazy-load');
      lazyImages.forEach(image => {
        if (image.getAttribute('data-src')) {
          const src = image.getAttribute('data-src');
          image.src = src;
          image.removeAttribute('data-src');
        }
      });
    }
  
    // Call the functions to load the categories and cultures
    createCategoryCards();
    createCultureCards();
  
    // Lazy load images on scroll
    window.addEventListener('scroll', lazyLoadImages);
  
    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });
  
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  