(function() {
    const myQuestions = [
      {
        question: "Who is the father of Geometry?",
        answers: {
          a: "Aristotle",
          b: "Euclid",
          c: "Pythagoras"
        },
        correctAnswer: "b"
      },
      {
        question: "Grand Central Terminal, Park Avenue, New York is the world's?",
        answers: {
          a: "largest railway station",
          b: "highest railway station",
          c: "longest railway station"
        },
        correctAnswer: "a"
      },
      {
        question: "Who invented the BALLPOINT PEN??",
        answers: {
          a: "Biro Brothers",
          b: "Waterman Brothers",
          c: "Bicc Brothers",
          d: "Write Brothers"
        },
        correctAnswer: "a"
      },
// 2nd set
         {
           question: "Brass gets discoloured in air because of the presence of which of the following gases",
           answers: {
             a: "Oxygen",
             b: "Hydrogen sulphide",
             c: "Carbon dioxide"
           },
           correctAnswer: "b"
         }, {
           question: "Garampani santuary is located at",
           answers: {
             a: "Junagarh, Gujarat",
             b: "Diphu, Assam",
             c: "Gangtok, Sikkim"
           },
           correctAnswer: "b"
         }, {
           question: "B.C.Roy Award is given in the field of",
           answers: {
             a: "Music",
             b: "Journalism",
             c: "Medicine",
             d: "Environment"
           },
           correctAnswer: "c"
         },

          {
            question: "Nucleus of an atom consists of",
            answers: {
              a: "electrons and neutrons",
              b: "electrons and protons",
              c: "protons and neutrons"
            },
            correctAnswer: "c"
          }, {
            question: "In which decade was the American Institute of Electrical Engeneering founded?",
            answers: {
              a: "1850s",
              b: "1880s",
              c: "1930s"
            },
            correctAnswer: "b"
          }, {
            question: "Which of the following is not associated with UNO",
            answers: {
              a: "ILO",
              b: "WHO",
              c: "ASEAN",
              d: "All of the above"
            },
            correctAnswer: "c"
          },

           {
             question: "What is common between Kutty, Shankar, Laxman and Sudhir Dar?",
             answers: {
               a: "Film Direction",
               b: "Drawing Cartoons",
               c: "Instrumental Music"
             },
             correctAnswer: "b"
           }, {
             question: "the first death anniversary day of Sri Rajiv Gandhi was?",
             answers: {
               a: "National Integration Day",
               b: "Peace and Love Day",
               c: "Anti-Terrorism Day"
             },
             correctAnswer: "d"
           }, {
             question: "The fastest shorthand writer was",
             answers: {
               a: "Dr.G.D.Bist",
               b: "J.R.D.TAta",
               c: "J.M.Tagore",
               d: "Khudada Khan"
             },
             correctAnswer: "a"
           },

            {
              question: "Which of the following is a non metal that remains liquid at room temperature?",
              answers: {
                a: "Phosphorus",
                b: "Bromine",
                c: "Chlorise"
              },
              correctAnswer: "b"
            }, {
              question: "The number of moles of a solute present in 1kg of a solvent is called its?",
              answers: {
                a: "molality",
                b: "molarity",
                c: "normality"
              },
              correctAnswer: "a"
            }, {
              question: "Which year was the Pulitzer Price established?",
              answers: {
                a: "1917",
                b: "1918",
                c: "1922",
                d: "1928"
              },
              correctAnswer: "a"
            },

             {
               question: "The chairperson/ presidency of the UN Security Council rotates among the Council Members",
               answers: {
                 a: "every 6 months",
                 b: "every 3 months",
                 c: "every month"
               },
               correctAnswer: "c"
             }, {
               question: "Who was known as the iron man of india",
               answers: {
                 a: "Govind Ballabh Pant",
                 b: "Jawaharlal Nehru",
                 c: "Saedar Vallabhbhai"
               },
               correctAnswer: "c"
             }, {
               question: "The purpose of choke in tube light is",
               answers: {
                 a: "To decrease the current",
                 b: "To increase the current",
                 c: "To decrease the voltage momentarily",
                 d: "To increase the voltage momentarily"
               },
               correctAnswer: "d"
             },

              {
                question: "20th August is celebrated as",
                answers: {
                  a: "Earth Day",
                  b: "Sadbhavana Divas",
                  c: "No Tobacco Day"
                },
                correctAnswer: "b"
              }, {
                question: "Chlorophyll is a naturally occurring compound in?",
                answers: {
                  a: "copper",
                  b: "magnesium",
                  c: "iron"
                },
                correctAnswer: "b"
              }, {
                question: "Who is largely responsible for breaking the german Enigma codes?",
                answers: {
                  a: "Alan Turing",
                  b: "Jeff B",
                  c: "George Boole",
                  d: "Charles Baggage"
                },
                correctAnswer: "a"
              },

    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  