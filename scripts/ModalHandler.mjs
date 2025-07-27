export const courses = {
    cse: {
        title: "CSE",
        credit: 60,
        description:
            "This course provides a comprehensive foundation in computer science, software engineering, and artificial intelligence. Students will gain strong theoretical knowledge combined with practical skills in software development, algorithms, data structures, databases, operating systems, and cybersecurity.",
        certificat: "Bachelor of Science in Computer Science",
        technology:
            "Python, Java, SQL, C++, Linux, Git, Machine Learning, Artificial Intelligence"
    },
    wdd: {
        title: "Web Dev Basics",
        credit: 15,
        description: "Introduction à HTML, CSS, JS",
        certificat: "Certificat Web Dev",
        technology: "HTML, CSS, JavaScript"
    }
}

export function Showdescription(data) {
    const modal = document.querySelector("#mymodal");
    const title = modal.querySelector('h2');

    title.innerHTML = data.title;

    // Supprime ancien contenu s’il existe
    const oldBox = modal.querySelector('#Box');
    if (oldBox) oldBox.remove();
    const oldClose = modal.querySelector('#Closebt');
    if (oldClose) oldClose.remove();

    // Crée le bloc de contenu
    const div = document.createElement('div');
    div.id = 'Box';
    div.innerHTML = `
        <div>
            <p><strong>Crédit:</strong> ${data.credit}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Certificat:</strong> ${data.certificat}</p>
            <p><strong>Technologie:</strong> ${data.technology}</p>
        </div>`;

    // Crée bouton de fermeture
    const close = document.createElement('button');
    close.id = 'Closebt';
    close.type = 'button'; // ✅ Ajouté
    close.innerText = 'Close';

    close.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
        modal.close();
    });

    modal.appendChild(div);
    modal.appendChild(close);
    modal.showModal();
}
