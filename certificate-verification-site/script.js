const students = [
  {
    id: "HSE202501",
    name: "Kaleem Ullah",
    course: "NEBOSH IGC",
    date: "2025-06-15",
    certificateImage: "https://via.placeholder.com/600x400?text=NEBOSH+Certificate"
  },
  {
    id: "HSE202502",
    name: "Ali Khan",
    course: "IOSH Managing Safely",
    date: "2025-07-10",
    certificateImage: "https://via.placeholder.com/600x400?text=IOSH+Certificate"
  },
  {
    id: "HSE202503",
    name: "Fatima Zahra",
    course: "OSHA 30-Hour Training",
    date: "2025-05-20",
    certificateImage: "https://via.placeholder.com/600x400?text=OSHA+Certificate"
  }
];

// Verify Certificate
function verifyCertificate() {
  const input = document.getElementById("certificateInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!input) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h2 style="color:orange;">Please enter a certificate number!</h2>`;
    return;
  }

  const student = students.find(s => s.id.toLowerCase() === input.toLowerCase());

  if (student) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <h2 style="color:green;">Certificate Verified ✅</h2>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Issue Date:</strong> ${student.date}</p>
      <p><strong>Certificate ID:</strong> ${student.id}</p>
      <img src="${student.certificateImage}" alt="Certificate Image" />
    `;
  } else {
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h2 style="color:red;">No matching certificate found ❌</h2>`;
  }
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
