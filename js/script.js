const arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"

    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

// for (let key in arrayTeam) {
//     console.log(arrayTeam[key]);
//     document.getElementById("team").innerHTML += `<li>${arrayTeam}</li>`;
// }

const li = document.getElementById("team");
const image = document.createElement("img");

for (let i = 0; i < arrayTeam.length; i++) {
    const person = arrayTeam[i];
    console.log(person);
    console.log(person.nome);
    console.log(person.ruolo);
    console.log(person.foto);

   li.innerHTML += `<li>
    <div class="card mb-2" style="width: 20rem">
        <img src="img/${person.foto}" class="card-img-top" alt="person">
        <div class="card-body">
            <h3>${person.nome}</h3>
            <p class="card-text">${person.ruolo}</p>
        </div>
    </div>
</li>`;

}

