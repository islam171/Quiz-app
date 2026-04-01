export const tests = [{
  'id': 1,
  'name': 'Дроби. Базовый уровень',
  'level': 'Easy',
  'description': 'Тест проверяет умение сравнивать дроби, выполнять сложение и вычитание дробей с одинаковыми знаменателями, находить дробь от числа и преобразовывать неправильные дроби.',
  'questions': [
    {
    'id': 1,
    'title': 'Какая дробь больше?',
    'options': [{ 'title': '1/2', 'id': 1 }, { 'title': '1/3', 'id': 2 }, { 'title': 'Они равны', 'id': 3 }],
    'answers': 1,
    'img': 'img1.jpg'
  }, {
    'id': 2,
    'title': 'Сколько будет 1/4 + 1/4?',
    'options': [{ 'title': '1/8', 'id': 1 }, { 'title': '2/4', 'id': 2 }, { 'title': '1/2', 'id': 3 }],
    'answers': 3,
    'img': 'img2.jpg'
  }, {
    'id': 3,
    'title': 'Сколько будет 3/5 - 1/5?',
    'options': [{ 'title': '2/5', 'id': 1 }, { 'title': '1/5', 'id': 2 }, { 'title': '3/10', 'id': 3 }],
    'answers': 1,
    'img': 'img3.jpg'
  }, {
    'id': 4,
    'title': 'Какая дробь равна 2/4?',
    'options': [{ 'title': '1/2', 'id': 1 }, { 'title': '2/3', 'id': 2 }, { 'title': '3/4', 'id': 3 }],
    'answers': 1,
    'img': 'img4.jpg'
  }, {
    'id': 5,
    'title': 'Сколько будет 2/3 + 1/3?',
    'options': [{ 'title': '3/3', 'id': 1 }, { 'title': '1', 'id': 2 }, { 'title': 'Оба варианта верны', 'id': 3 }],
    'answers': 3,
    'img': 'img5.jpg'
  }, {
    'id': 6,
    'title': 'Найдите 1/5 от числа 20',
    'options': [{ 'title': '4', 'id': 1 }, { 'title': '5', 'id': 2 }, { 'title': '2', 'id': 3 }],
    'answers': 1,
    'img': 'img6.jpg'
  }, {
    'id': 7,
    'title': 'Сколько будет 5/6 - 2/6?',
    'options': [{ 'title': '3/6', 'id': 1 }, { 'title': '1/2', 'id': 2 }, { 'title': '3/6 и 1/2 одинаковы', 'id': 3 }],
    'answers': 3,
    'img': 'img7.jpg'
  }, {
    'id': 8,
    'title': 'Какая дробь меньше?',
    'options': [{ 'title': '3/4', 'id': 1 }, { 'title': '2/4', 'id': 2 }, { 'title': '5/4', 'id': 3 }],
    'answers': 2,
    'img': 'img8.jpg'
  }, {
    'id': 9,
    'title': 'Сколько будет 1/2 от 10?',
    'options': [{ 'title': '2', 'id': 1 }, { 'title': '5', 'id': 2 }, { 'title': '10', 'id': 3 }],
    'answers': 2,
    'img': 'img9.jpg'
  }, {
    'id': 10,
    'title': 'Преобразуйте 6/3',
    'options': [{ 'title': '2', 'id': 1 }, { 'title': '3', 'id': 2 }, { 'title': '1/2', 'id': 3 }],
    'answers': 1,
    'img': 'img10.jpg'
  }]
}, {
  'id': 2,
  'name': 'Проценты',
  'level': 'Medium',
  'description': 'Тест направлен на проверку знаний процентов: перевод процентов в дроби, нахождение процента от числа и понимание связи процентов с целым числом.',
  'questions': [
    {
    'id': 1,
    'title': 'Сколько будет 10% от 200?',
    'options': [{ 'title': '20', 'id': 1 }, { 'title': '10', 'id': 2 }, { 'title': '30', 'id': 3 }],
    'answers': 1,
    'img': 'img11.jpg'
  }, {
    'id': 2,
    'title': '50% это какая дробь?',
    'options': [{ 'title': '1/2', 'id': 1 }, { 'title': '1/4', 'id': 2 }, { 'title': '3/4', 'id': 3 }],
    'answers': 1,
    'img': 'img12.jpg'
  }, {
    'id': 3,
    'title': '25% это:',
    'options': [{ 'title': '1/2', 'id': 1 }, { 'title': '1/4', 'id': 2 }, { 'title': '1/5', 'id': 3 }],
    'answers': 2,
    'img': 'img13.jpg'
  }, {
    'id': 4,
    'title': 'Сколько будет 20% от 50?',
    'options': [{ 'title': '5', 'id': 1 }, { 'title': '10', 'id': 2 }, { 'title': '20', 'id': 3 }],
    'answers': 2,
    'img': 'img14.jpg'
  }, {
    'id': 5,
    'title': '100% это:',
    'options': [{ 'title': 'Половина', 'id': 1 }, { 'title': 'Целое', 'id': 2 }, { 'title': 'Четверть', 'id': 3 }],
    'answers': 2,
    'img': 'img15.jpg'
  }, {
    'id': 6,
    'title': '5% от 100 это:',
    'options': [{ 'title': '5', 'id': 1 }, { 'title': '10', 'id': 2 }, { 'title': '15', 'id': 3 }],
    'answers': 1,
    'img': 'img16.jpg'
  }, {
    'id': 7,
    'title': '75% это:',
    'options': [{ 'title': '3/4', 'id': 1 }, { 'title': '2/3', 'id': 2 }, { 'title': '1/3', 'id': 3 }],
    'answers': 1,
    'img': 'img17.jpg'
  }, {
    'id': 8,
    'title': '30% от 10 это:',
    'options': [{ 'title': '3', 'id': 1 }, { 'title': '5', 'id': 2 }, { 'title': '30', 'id': 3 }],
    'answers': 1,
    'img': 'img18.jpg'
  }, {
    'id': 9,
    'title': '1% от 1000 это:',
    'options': [{ 'title': '1', 'id': 1 }, { 'title': '10', 'id': 2 }, { 'title': '100', 'id': 3 }],
    'answers': 2,
    'img': 'img19.jpg'
  }, {
    'id': 10,
    'title': '15% от 200 это:',
    'options': [{ 'title': '30', 'id': 1 }, { 'title': '25', 'id': 2 }, { 'title': '20', 'id': 3 }],
    'answers': 1,
    'img': 'img20.jpg'
  }]
}, {
  'id': 3,
  'name': 'Десятичные дроби',
  'level': 'Easy',
  'description': 'Тест проверяет умение выполнять действия с десятичными дробями, сравнивать их и переводить десятичные дроби в обыкновенные.',
  'questions': [
    {
    'id': 1,
    'title': 'Сколько будет 0.5 + 0.5?',
    'options': [{ 'title': '1', 'id': 1 }, { 'title': '0.10', 'id': 2 }, { 'title': '0.1', 'id': 3 }],
    'answers': 1,
    'img': 'img21.jpg'
  }, {
    'id': 2,
    'title': 'Что больше?',
    'options': [{ 'title': '0.7', 'id': 1 }, { 'title': '0.07', 'id': 2 }],
    'answers': 1,
    'img': 'img22.jpg'
  }, {
    'id': 3,
    'title': '1.2 + 0.8 =',
    'options': [{ 'title': '2', 'id': 1 }, { 'title': '1', 'id': 2 }, { 'title': '1.10', 'id': 3 }],
    'answers': 1,
    'img': 'img23.jpg'
  }, {
    'id': 4,
    'title': '2.5 - 0.5 =',
    'options': [{ 'title': '2', 'id': 1 }, { 'title': '3', 'id': 2 }, { 'title': '1.5', 'id': 3 }],
    'answers': 1,
    'img': 'img24.jpg'
  }, {
    'id': 5,
    'title': '0.25 это какая дробь?',
    'options': [{ 'title': '1/4', 'id': 1 }, { 'title': '1/2', 'id': 2 }, { 'title': '1/3', 'id': 3 }],
    'answers': 1,
    'img': 'img25.jpg'
  }, {
    'id': 6,
    'title': '3.0 это:',
    'options': [{ 'title': '3', 'id': 1 }, { 'title': '0.3', 'id': 2 }],
    'answers': 1,
    'img': 'img26.jpg'
  }, {
    'id': 7,
    'title': '0.1 + 0.2 =',
    'options': [{ 'title': '0.3', 'id': 1 }, { 'title': '0.12', 'id': 2 }],
    'answers': 1,
    'img': 'img27.jpg'
  }, {
    'id': 8,
    'title': '1.5 + 1.5 =',
    'options': [{ 'title': '2', 'id': 1 }, { 'title': '3', 'id': 2 }],
    'answers': 2,
    'img': 'img28.jpg'
  }, {
    'id': 9,
    'title': '5.0 - 2.0 =',
    'options': [{ 'title': '3', 'id': 1 }, { 'title': '2', 'id': 2 }],
    'answers': 1,
    'img': 'img29.jpg'
  }, {
    'id': 10,
    'title': '0.75 это:',
    'options': [{ 'title': '3/4', 'id': 1 }, { 'title': '1/2', 'id': 2 }],
    'answers': 1,
    'img': 'img30.jpg'
  }]
}, {
  'id': 4,
  'name': 'Смешанный тест',
  'level': 'Hard',
  'description': 'Итоговый тест включает задания на дроби, проценты и десятичные дроби. Проверяет общее понимание темы и умение применять знания в задачах.',
  'questions': [
    {
    'id': 1,
    'title': 'Сколько будет 3/4 от 20?',
    'options': [{ 'title': '15', 'id': 1 }, { 'title': '10', 'id': 2 }],
    'answers': 1,
    'img': 'img31.jpg'
  }, {
    'id': 2,
    'title': '40% от 50 =',
    'options': [{ 'title': '20', 'id': 1 }, { 'title': '25', 'id': 2 }],
    'answers': 1,
    'img': 'img32.jpg'
  }, {
    'id': 3,
    'title': '1/2 + 1/4 =',
    'options': [{ 'title': '3/4', 'id': 1 }, { 'title': '2/4', 'id': 2 }],
    'answers': 1,
    'img': 'img33.jpg'
  }, {
    'id': 4,
    'title': '0.6 + 0.4 =',
    'options': [{ 'title': '1', 'id': 1 }, { 'title': '0.10', 'id': 2 }],
    'answers': 1,
    'img': 'img34.jpg'
  }, {
    'id': 5,
    'title': '25% от 80 =',
    'options': [{ 'title': '20', 'id': 1 }, { 'title': '25', 'id': 2 }],
    'answers': 1,
    'img': 'img35.jpg'
  }, {
    'id': 6,
    'title': '2/5 от 10 =',
    'options': [{ 'title': '4', 'id': 1 }, { 'title': '5', 'id': 2 }],
    'answers': 1,
    'img': 'img36.jpg'
  }, {
    'id': 7,
    'title': '0.2 это:',
    'options': [{ 'title': '1/5', 'id': 1 }, { 'title': '1/2', 'id': 2 }],
    'answers': 1,
    'img': 'img37.jpg'
  }, {
    'id': 8,
    'title': '75% от 100 =',
    'options': [{ 'title': '75', 'id': 1 }, { 'title': '50', 'id': 2 }],
    'answers': 1,
    'img': 'img38.jpg'
  }, {
    'id': 9,
    'title': '1/3 + 1/3 =',
    'options': [{ 'title': '2/3', 'id': 1 }, { 'title': '1/3', 'id': 2 }],
    'answers': 1,
    'img': 'img39.jpg'
  }, {
    'id': 10,
    'title': '10% от 300 =',
    'options': [{ 'title': '30', 'id': 1 }, { 'title': '20', 'id': 2 }],
    'answers': 1,
    'img': 'img40.jpg'
  }]
}]
