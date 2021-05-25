
 const DltBtn = document.getElementById('Delete_icon');
 const SideBtn = document.getElementById('Side-btn');
 const SideBar = document.querySelector('.SideBar');
 
 
 SideBtn.addEventListener('click', function() {
   if(SideBar.classList.contains('show-sidebar')) {
       SideBar.classList.remove('show-sidebar');
   }else {
       SideBar.classList.add('show-sidebar');
   }
 });

 DltBtn.addEventListener('click',function() {
    SideBar.classList.remove('show-sidebar');
 });