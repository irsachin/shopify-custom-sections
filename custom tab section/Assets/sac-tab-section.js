window.addEventListener('scroll', function() {
    var contentSections = document.querySelectorAll('.cus_tab_content');
    var tabs = document.querySelectorAll('.cus-main-tab');
    var fromTop = window.scrollY;
    
    contentSections.forEach(function(content, index) {
      if (content.offsetTop <= fromTop + 51 && content.offsetTop + content.offsetHeight > fromTop + 51) {
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
        tabs[index].classList.add('active');
      }
    });
  });

function scrollToContent(contentId) {
  var contentElement = document.getElementById(contentId);
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: 'smooth' });
  }
}


// decription tab section script 


function tabs(header, tab, content){
  const headerItem = document.querySelector(header);
  const tabItem = document.querySelectorAll(tab);
  const contentItem = document.querySelectorAll(content);

  function hideTab(){
    contentItem.forEach(item => {
      item.style.display = 'none';
    });
  }

  function showTab(i = 0) {
    contentItem[i].style.display = 'block';
  }

  tabItem[0].classList.add('aactive');

  hideTab();
  showTab();

  headerItem.addEventListener('click', (e)=> {
    const target = e.target;
    if(target.classList.contains(tab.replace(/\./, ''))){
      tabItem.forEach((item, i) => {
        item.classList.remove('aactive');
        if(target === item) {
          console.log('ura');
          hideTab();
          showTab(i);
          item.classList.add('aactive');
        }
      });
    }
  });
}

tabs('.cats_header', '.cats_item', '.cats_img-item');
tabs('.dogs_header', '.dogs_item', '.dogs_img-item');

