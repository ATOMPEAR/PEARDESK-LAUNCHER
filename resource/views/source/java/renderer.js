// This file will contain frontend JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  // Your frontend JavaScript code here

  // Add any DOM manipulation or event listeners here when needed
  console.log('Renderer process started');

  const toggleSearchBtn = document.querySelector('.toggle-search');
  const toggleStartIcon = document.querySelector('.toggle-start i');

  // Handle close button
  document.querySelector('.window-close').addEventListener('click', () => {
    window.electronAPI.closeWindow();
  });

  // Handle minimize button
  document.querySelector('.window-minimize').addEventListener('click', () => {
    window.electronAPI.minimizeWindow();
  });

  // Handle start menu toggle and content switching
  document.querySelector('.toggle-start').addEventListener('click', () => {
    const content1 = document.querySelector('.main-content1');
    const content2 = document.querySelector('.main-content2');
    
    if (content1.classList.contains('active')) {
      content1.classList.remove('active');
      content2.classList.add('active');
      window.electronAPI.setWindowWidth(440);
      toggleSearchBtn.style.display = 'none'; // Hide search button
      toggleStartIcon.classList.remove('fa-bars');
      toggleStartIcon.classList.add('fa-chevron-right');
    } else {
      content2.classList.remove('active');
      content1.classList.add('active');
      window.electronAPI.setWindowWidth(400);
      toggleSearchBtn.style.display = 'flex'; // Show search button
      toggleStartIcon.classList.remove('fa-chevron-right');
      toggleStartIcon.classList.add('fa-bars');
    }
    
    window.electronAPI.toggleStart();
  });

  // Handle search form toggle
  toggleSearchBtn.addEventListener('click', () => {
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('hidden');
  });

  // Handle sidemenu button clicks
  const menuItems = document.querySelectorAll('.sidemenu-item');
  const contents = {
    'Start': document.querySelector('.start-content'),
    'Account': document.querySelector('.account-content'),
    'Assistant': document.querySelector('.assistant-content'),
    'Terminal': document.querySelector('.terminal-content'),
    'Calculator': document.querySelector('.calculator-content')
  };

  // Initially hide all contents
  Object.values(contents).forEach(content => {
    if (content) content.classList.add('hidden');
  });

  // Show start content by default
  const startContent = contents['Start'];
  if (startContent) startContent.classList.remove('hidden');
  menuItems[0].classList.add('active'); // Activate the first (Start) button

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const contentType = item.getAttribute('aria-label');
      
      // Hide all contents
      Object.values(contents).forEach(content => {
        if (content) content.classList.add('hidden');
      });

      // Show selected content
      const selectedContent = contents[contentType];
      if (selectedContent) selectedContent.classList.remove('hidden');

      // Update active state of menu items
      menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
});
