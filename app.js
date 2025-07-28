
if (document.getElementById("happy-birthday")) {
  const wishMsg = "Happy Birthday, Booobbbooooooo! To the most amazing person in my life, may your smile shine brighter every year. Thank you for being you. Here’s to our adventures together! ❤️";
  let i = 0;
  (function typeWriter() {
    if (i < wishMsg.length) {
      document.getElementById("happy-birthday").innerHTML += wishMsg.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  })();
}

function cutCake() {
      const cake = document.getElementById('cake-img');
      // cake.style.transform = "scale(0.95) rotate(-6deg)";

      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        cake.src = "images/cut_cake.png"; 
        document.getElementById('nextBtn').style.display = 'inline-block';
      }, 10);
    }
// Quiz logic
if (document.getElementById('game')) {
  const questions = [
    { q: "Where did we go for our first trip together?", options: ["Rangpo", "Gangtok", "Singtam", "AlipurDuar"], a: 2 },
    { q: "What nickname did I give you?", options: ["Booobbooooo", "Adhikary", "Gai", "Suar"], a: 2 },
    { q: "What’s my favorite thing about you?", options: ["Your smile 😊", "Your Angryness ❤️", "Your laugh 😄", "Everything about you 😍"], a: 3 },
    { q: "What do I always do when I miss you?", options: [" Text or call you instantly", "Look at our photos", "Write something for you", "All of the above"], a: 0 },
    { q: "Where did we kissed for the first time?", options: [" Classroom", "Garden", "Library", "Lab"], a: 1 },
    { q: "When did we kiss eachother?", options: [" 2nd August", "18th August", "28th August", "2nd September"], a: 1 },
    { q: "What’s one thing I can never say no to?", options: [" Your hug", "Your puppy eyes", "Your calls/texts", "All of the above"], a: 3 },
    { q: "What’s my favorite time of the day?", options: [" Morning", "Night", "Anytime I'm with you ❤️", "Sunset"], a: 2 },
    { q: "What’s something I always notice about you first?", options: [" Your hair", "Your eyes", "Your smile", " Your staan"], a: 3 },
    { q: "What song reminds me of you?", options: [" Perfect – Ed Sheeran", " Until I Found You – Stephen Sanchez", "Tum Ho -Mohit chauhan", " All of Me – John Legend"], a: 2 },
    { q: "If I could spend a whole day with you, what would we do?", options: [" Eat and cuddle", " Go on a long drive", "Watch our favorite movies", " All of them and repeat forever 💖"], a: 3 },
  ];
  let current = 0;
  function showQuestion() {
    if (current >= questions.length) {
      document.getElementById("game").innerHTML = "<b>That’s all! Hope you enjoyed :)</b>";
      return;
    }
    const q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("feedback").innerText = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.onclick = function(){
        document.getElementById("feedback").innerText =
          (i === q.a ? "Correct! 🎉" : "Oops! Try the next one!");
        setTimeout(() => { current++; showQuestion(); }, 1000);
      };
      document.getElementById("answers").appendChild(btn);
    });
  }
  showQuestion();
}