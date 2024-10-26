// This file will contain frontend JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  // Your frontend JavaScript code here

  // Add any DOM manipulation or event listeners here when needed
  console.log('Renderer process started');

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
    } else {
      content2.classList.remove('active');
      content1.classList.add('active');
    }
    
    window.electronAPI.toggleStart();
  });

  // Handle search form toggle
  document.querySelector('.toggle-search').addEventListener('click', () => {
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('hidden');
  });
});
