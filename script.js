const tbody = document.querySelector(".tbody");
let studentID = 1;

while (true) {
  let name = prompt("Digite o seu nome");

  let grade1 = parseInt(prompt("Digite a nota do 1° Semestre:"));
  let grade2 = parseInt(prompt("Digite a nota do 2° Semestre:"));
  let frequency = Number(prompt("Digite a frequência do aluno:"));

  let answer = prompt(
    `Você deseja continuar inserindo alunos (s/n):`
  ).toLowerCase();

  createRow(studentID, nameCapitalized(name), grade1, grade2, frequency);
  studentID++;

  if (answer !== "s") break;
}

function createRow(studentID, name, grade1, grade2, frequency) {
  const tr = document.createElement("tr");

  let IDStudent = document.createElement("td");
  IDStudent.innerHTML = studentID;

  let nameTd = document.createElement("td");
  nameTd.innerHTML = name;

  let grade1Td = document.createElement("td");
  grade1Td.innerHTML = grade1;

  let grade2Td = document.createElement("td");
  grade2Td.innerHTML = grade2;

  let averageTd = document.createElement("td");
  let avg = calcAvg(grade1, grade2);
  averageTd.innerHTML = avg;

  let frequencyTd = document.createElement("td");
  frequencyTd.innerHTML = `${frequency}%`;

  tr.appendChild(IDStudent);

  tr.appendChild(nameTd);

  tr.appendChild(grade1Td);
  tr.appendChild(grade2Td);
  tr.appendChild(averageTd);
  tr.appendChild(frequencyTd);

  if (frequency >= 75 && avg >= 7) {
    console.log(typeof avg);
    console.log(avg);
    tr.classList.add("green");
  } else {
    tr.classList.add("red");
  }

  tbody.appendChild(tr);
}

function calcAvg(grade1, grade2) {
  return ((grade1 + grade2) / 2).toFixed(2);
}

function nameCapitalized(name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const name of names) {
    namesUpper.push(name[0].toUpperCase() + name.slice(1));
  }

  return namesUpper.join(" ");
}
