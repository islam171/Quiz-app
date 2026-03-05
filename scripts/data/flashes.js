export const flashes = [
  {
    id: 1,
    title: "Мат. анализ — производные и интегралы",
    desc: "Производные, интегралы, пределы.",
    count: 10,
    level: "Hard",
    questions: [
      { id: 1, title: "Производная x² ?", answers: "2x" },
      { id: 2, title: "Производная sin(x) ?", answers: "cos(x)" },
      { id: 3, title: "Производная cos(x) ?", answers: "-sin(x)" },
      { id: 4, title: "Интеграл ∫x dx ?", answers: "x²/2 + C" },
      { id: 5, title: "Интеграл ∫cos(x) dx ?", answers: "sin(x) + C" },
      { id: 6, title: "Предел lim(x→0) sin(x)/x ?", answers: "1" },
      { id: 7, title: "Производная e^x ?", answers: "e^x" },
      { id: 8, title: "Интеграл ∫1/x dx ?", answers: "ln|x| + C" },
      { id: 9, title: "Производная ln(x) ?", answers: "1/x" },
      { id: 10, title: "Формула производной произведения ?", answers: "(uv)' = u'v + uv'" }
    ]
  },

  {
    id: 2,
    title: "Алгебра — формулы и уравнения",
    desc: "Квадратные уравнения, формулы сокращённого умножения.",
    count: 10,
    level: "Easy",
    questions: [
      { id: 1, title: "Формула дискриминанта ?", answers: "D = b² - 4ac" },
      { id: 2, title: "Формула квадрата суммы ?", answers: "(a+b)² = a² + 2ab + b²" },
      { id: 3, title: "Формула квадрата разности ?", answers: "(a-b)² = a² - 2ab + b²" },
      { id: 4, title: "Разность квадратов ?", answers: "a² - b² = (a-b)(a+b)" },
      { id: 5, title: "Корни квадратного уравнения ?", answers: "x = (-b ± √D) / 2a" },
      { id: 6, title: "Степень a^0 ?", answers: "1" },
      { id: 7, title: "Формула куба суммы ?", answers: "(a+b)³ = a³ + 3a²b + 3ab² + b³" },
      { id: 8, title: "Логарифм logₐ(a) ?", answers: "1" },
      { id: 9, title: "Свойство степеней a^m * a^n ?", answers: "a^(m+n)" },
      { id: 10, title: "Свойство (a^m)^n ?", answers: "a^(mn)" }
    ]
  },

  {
    id: 3,
    title: "Геометрия — формулы и теоремы",
    desc: "Площади фигур и основные теоремы.",
    count: 10,
    level: "Medium",
    questions: [
      { id: 1, title: "Теорема Пифагора ?", answers: "a² + b² = c²" },
      { id: 2, title: "Площадь круга ?", answers: "S = πr²" },
      { id: 3, title: "Длина окружности ?", answers: "2πr" },
      { id: 4, title: "Площадь треугольника ?", answers: "S = 1/2 * a * h" },
      { id: 5, title: "Площадь прямоугольника ?", answers: "S = a * b" },
      { id: 6, title: "Сумма углов треугольника ?", answers: "180°" },
      { id: 7, title: "Площадь трапеции ?", answers: "S = (a+b)/2 * h" },
      { id: 8, title: "Формула Герона ?", answers: "S = √(p(p-a)(p-b)(p-c))" },
      { id: 9, title: "Объём куба ?", answers: "a³" },
      { id: 10, title: "Объём цилиндра ?", answers: "V = πr²h" }
    ]
  },

  {
    id: 4,
    title: "Тригонометрия — основные формулы",
    desc: "Тождества и формулы двойного угла.",
    count: 10,
    level: "Medium",
    questions: [
      { id: 1, title: "Основное триг. тождество ?", answers: "sin²x + cos²x = 1" },
      { id: 2, title: "tan(x) ?", answers: "sin(x)/cos(x)" },
      { id: 3, title: "Формула sin(2x) ?", answers: "2sin(x)cos(x)" },
      { id: 4, title: "Формула cos(2x) ?", answers: "cos²x - sin²x" },
      { id: 5, title: "sin(π/2) ?", answers: "1" },
      { id: 6, title: "cos(0) ?", answers: "1" },
      { id: 7, title: "tan(π/4) ?", answers: "1" },
      { id: 8, title: "Формула sin(a+b) ?", answers: "sin(a)cos(b)+cos(a)sin(b)" },
      { id: 9, title: "Формула cos(a+b) ?", answers: "cos(a)cos(b)-sin(a)sin(b)" },
      { id: 10, title: "Период sin(x) ?", answers: "2π" }
    ]
  },

  {
    id: 5,
    title: "Теория вероятностей",
    desc: "Основные формулы и правила.",
    count: 10,
    level: "Medium",
    questions: [
      { id: 1, title: "Классическая вероятность ?", answers: "P = m/n" },
      { id: 2, title: "Вероятность невозможного события ?", answers: "0" },
      { id: 3, title: "Вероятность достоверного события ?", answers: "1" },
      { id: 4, title: "Формула сложения несовместимых событий ?", answers: "P(A+B) = P(A) + P(B)" },
      { id: 5, title: "Формула умножения независимых событий ?", answers: "P(A∩B) = P(A)P(B)" },
      { id: 6, title: "Комбинации C(n,k) ?", answers: "n! / (k!(n-k)!)" },
      { id: 7, title: "Перестановки P(n) ?", answers: "n!" },
      { id: 8, title: "Размещения A(n,k) ?", answers: "n!/(n-k)!" },
      { id: 9, title: "Сумма вероятностей всех исходов ?", answers: "1" },
      { id: 10, title: "Вероятность противоположного события ?", answers: "1 - P(A)" }
    ]
  }
];