   // Base de 30 preguntas
   const questions = [
    { question: "¿Quién pintó la Mona Lisa?", answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], correct: 0 },
    { question: "¿Cuál es el país más grande del mundo?", answers: ["Canadá", "China", "Rusia", "Estados Unidos"], correct: 2 },
    { question: "¿En qué año llegó el hombre a la luna?", answers: ["1965", "1969", "1972", "1981"], correct: 1 },
    { question: "¿Cuál es el océano más grande?", answers: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", answers: ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges", "Pablo Neruda"], correct: 1 },
    { question: "¿Cuál es el idioma oficial de Brasil?", answers: ["Español", "Portugués", "Inglés", "Francés"], correct: 1 },
    { question: "¿Qué órgano del cuerpo humano produce insulina?", answers: ["Corazón", "Hígado", "Páncreas", "Riñón"], correct: 2 },
    { question: "¿En qué continente se encuentra Egipto?", answers: ["Asia", "Europa", "África", "Oceanía"], correct: 2 },
    { question: "¿Cuál es el metal más precioso?", answers: ["Plata", "Oro", "Platino", "Diamante"], correct: 1 },
    { question: "¿Quién fue el primer presidente de los Estados Unidos?", answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correct: 0 },
    { question: "¿En qué ciudad se encuentra la Torre Eiffel?", answers: ["Madrid", "Roma", "París", "Londres"], correct: 2 },
    { question: "¿Cuál es el continente más pequeño?", answers: ["Asia", "Europa", "Antártida", "Oceanía"], correct: 3 },
    { question: "¿Qué animal es conocido por su capacidad de cambiar de color?", answers: ["Camaleón", "Serpiente", "Tigre", "Elefante"], correct: 0 },
    { question: "¿Qué instrumento musical tiene 88 teclas?", answers: ["Piano", "Guitarra", "Violín", "Acordeón"], correct: 0 },
    { question: "¿Cuál es el río más largo del mundo?", answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 0 },
    { question: "¿Qué día se celebra la independencia de México?", answers: ["16 de septiembre", "1 de mayo", "25 de diciembre", "14 de febrero"], correct: 0 },
    { question: "¿En qué año terminó la Segunda Guerra Mundial?", answers: ["1941", "1945", "1950", "1939"], correct: 1 },
    { question: "¿Cuál es el país con más habitantes?", answers: ["India", "China", "Estados Unidos", "Brasil"], correct: 1 },
    { question: "¿Quién escribió 'Cien años de soledad'?", answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Carlos Fuentes", "Julio Cortázar"], correct: 1 },
    { question: "¿Cuál es la capital de Japón?", answers: ["Seúl", "Beijing", "Tokio", "Bangkok"], correct: 2 },
    { question: "¿Cuál es el animal más rápido del mundo?", answers: ["León", "Guepardo", "Halcon peregrino", "Elefante"], correct: 1 },
    { question: "¿De qué color es el caballo blanco de Napoleón?", answers: ["Blanco", "Negro", "Marrón", "Gris"], correct: 0 },
    { question: "¿Cuál es la fórmula química del agua?", answers: ["H2O", "CO2", "O2", "H2SO4"], correct: 0 },
    { question: "¿Qué instrumento se utiliza para medir la temperatura?", answers: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"], correct: 1 },
    { question: "¿En qué país se originó el fútbol?", answers: ["España", "Brasil", "Argentina", "Reino Unido"], correct: 3 },
    { question: "¿Cómo se llama el presidente actual de Estados Unidos?", answers: ["Donald Trump", "Joe Biden", "Barack Obama", "George W. Bush"], correct: 1 },
    { question: "¿Cuál es el planeta más cercano al sol?", answers: ["Venus", "Marte", "Mercurio", "Júpiter"], correct: 2 },
    { question: "¿Qué continente tiene más países?", answers: ["Asia", "África", "Europa", "América"], correct: 1 },
    { question: "¿Quién fue Albert Einstein?", answers: ["Físico", "Escritor", "Artista", "Político"], correct: 0 },
    { question: "¿Qué país es conocido como la tierra del sol naciente?", answers: ["Corea del Sur", "China", "Japón", "India"], correct: 2 },
    { question: "¿Cuál es el gas más abundante en la atmósfera?", answers: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correct: 1 },
    { question: "¿Cómo se llama la ciudad más grande de México?", answers: ["Guadalajara", "Monterrey", "Cancún", "Ciudad de México"], correct: 3 },
    { question: "¿Cuál es el símbolo químico del oro?", answers: ["Ag", "Au", "Fe", "Hg"], correct: 1 },
    { question: "¿Qué famoso físico formuló la teoría de la relatividad?", answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], correct: 1 },
];

let currentQuestion = 0;
let correctAnswers = 0;
const totalQuestions = 10;

// Función para seleccionar 10 preguntas aleatorias de un total de 30
const getRandomQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, totalQuestions);
};

const quizQuestions = getRandomQuestions();

// Función para mostrar una pregunta
const showQuestion = () => {
    const question = quizQuestions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<label><input type="radio" name="answer" value="${index}"> ${answer}</label>`;
        answersList.appendChild(li);
    });
    document.getElementById("next-button").style.display = 'none'; // Escondemos el botón hasta que se elija una respuesta
};

// Función para validar la respuesta
const validateAnswer = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        if (answerIndex === quizQuestions[currentQuestion].correct) {
            correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            document.getElementById("next-button").style.display = 'block';
        } else {
            showResult();
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
};

const nextQuestion = () => {
    validateAnswer();
    showQuestion();
};

// Mostrar resultado al finalizar
const showResult = () => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    const resultDiv = document.getElementById("result");
    if (percentage >= 70) {
        resultDiv.textContent = `¡Felicidades! Has obtenido ${percentage}% de respuestas correctas.`;
        resultDiv.className = 'success';
    } else {
        resultDiv.textContent = `Lo siento, solo has obtenido ${percentage}% de respuestas correctas.`;
        resultDiv.className = 'fail';
    }
    document.getElementById("quiz-container").style.display = 'none'; // Ocultar las preguntas después de mostrar el resultado
};

// Iniciar el juego
showQuestion();
