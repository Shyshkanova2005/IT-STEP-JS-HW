function highlightFruits(color) {
    document.querySelectorAll('.fruit-list li').forEach(function(fruit) {
        fruit.classList.remove('highlight');
    });

    document.querySelectorAll('.fruit-list .' + color).forEach(function(fruit) {
        fruit.classList.add('highlight');
    });
}