const counterDisplay = document.querySelector('h3');
let counter = 0;

//On peut créer une balise
const bubbleMaker = () => {

    const bubble = document.createElement('span');
    //On ajoute la classe 'bubble' au span
    bubble.classList.add("bubble");
    
    //Puis on l'inject dans le body
    document.body.appendChild(bubble);
    
    const size = Math.random() * 200 + 100+ "px";
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })

    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

setInterval(bubbleMaker, 1000);