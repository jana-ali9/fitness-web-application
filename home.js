function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

var sidebar = document.getElementById('sidebar');
var menuIcon = document.querySelector('.menu-icon');
var timeout;

sidebar.addEventListener('mouseover', function() {
    clearTimeout(timeout); // إيقاف المؤقت إذا كان موجودًا
    sidebar.style.display = 'block';
});

sidebar.addEventListener('mouseout', function() {
    timeout = setTimeout(function() {
        sidebar.style.display = 'none';
    }, 500); // إخفاء القائمة بعد 500 مللي ثانية
});

menuIcon.addEventListener('mouseover', function() {
    clearTimeout(timeout); // إيقاف المؤقت إذا كان موجودًا
    sidebar.style.display = 'block';
});

menuIcon.addEventListener('mouseout', function() {
    timeout = setTimeout(function() {
        sidebar.style.display = 'none';
    }, 500); // إخفاء القائمة بعد 500 مللي ثانية
});
