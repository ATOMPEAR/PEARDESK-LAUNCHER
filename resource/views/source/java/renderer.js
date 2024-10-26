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
});
