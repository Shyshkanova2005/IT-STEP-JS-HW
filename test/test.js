QUnit.module('Тестирование математических функций', function() {
    QUnit.test('Тест функции square()', function(assert) {
        assert.equal(square(2), 4, '2 * 2 = 4');
        assert.equal(square(3), 9, '3 * 3 = 9');
        assert.equal(square(5), 25, '5 * 5 = 25');
        assert.equal(square(6), 36, '6 * 6 = 36');
    });

    QUnit.test('Тест функции rectangle()', function(assert) {
        assert.equal(rectangle(2, 3), 6, '2 * 3 = 6');
        assert.equal(rectangle(5, 3), 15, '5 * 3 = 15');
        assert.equal(rectangle(4, 5), 20, '4 * 5 = 20');
    });

    QUnit.test('Тест функции triange()', function(assert) {
        assert.equal(triange(2, 3), 3, '(2 * 3)/2 = 3');
        assert.equal(triange(5, 4),  10, '(5 * 4)/2 = 10');
        assert.equal(triange(4, 4), 8, '(4 * 4)/2 = 8');
    });
});