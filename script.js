document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("eligibilityForm");
  const resultsDiv = document.getElementById("results");
  const paidBox = document.getElementById("paidBox");

  if (!form) {
    alert("Form not found. Check form id.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const category = document.getElementById("category").value;
    const income = Number(document.getElementById("income").value);
    const education = document.getElementById("education").value;

    resultsDiv.innerHTML = "";
    paidBox.classList.add("hidden");

    let eligibleFound = false;

    if (typeof SCHEMES === "undefined") {
      alert("Schemes data not loaded. Check schemes.js file.");
      return;
    }

    SCHEMES.forEach(scheme => {
      const eligible =
        scheme.category.includes(category) &&
        income <= scheme.incomeMax &&
        scheme.education.includes(education);

      if (eligible) {
        eligibleFound = true;

        resultsDiv.innerHTML += `
          <div class="scheme">
            <h4>${scheme.name}</h4>
            <p><strong>Why eligible:</strong> ${scheme.reason}</p>
            <p><strong>Documents required:</strong></p>
            <ul>${scheme.documents.map(d => `<li>${d}</li>`).join("")}</ul>
            <a href="${scheme.link}" target="_blank">Apply on official portal →</a>
          </div>
        `;
      }
    });

    if (!eligibleFound) {
      resultsDiv.innerHTML = `
        <div class="not-eligible">
          ❌ Not eligible based on your category, income, or education.
        </div>
      `;
    } else {
      paidBox.classList.remove("hidden");
    }
  });

});

// Paid demo
function unlockChecklist() {
  alert("Demo only. Payment integration comes next.");
}
document.getElementById("upiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const utr = document.getElementById("utr").value;

  fetch("https://script.google.com/macros/s/AKfycbxaMgjsAAimRmM5JP1Dic_MZ_SayADLHjHpEM_CsbwxeBMaPREzC4TAbbcry_ZdFQwAxQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      whatsapp: whatsapp,
      utr: utr
    })
  })
  .then(res => res.json())
  .then(() => {
    alert(
      "Payment details submitted successfully.\n\n" +
      "Your checklist will be sent on WhatsApp after verification."
    );
  })
  .catch(() => {
    alert("Error saving payment details. Please contact support.");
  });
});
function chatOnWhatsApp() {
  const name = document.getElementById("name").value || "Student";
  const utr = document.getElementById("utr").value || "";

  const YOUR_WHATSAPP = "+917028261965"; // 🔴 REPLACE with your number

  let message =
    "Hi, I have paid ₹49 for the Apply-Ready Checklist.\n\n" +
    "Name: " + name + "\n" +
    (utr ? "UTR: " + utr + "\n" : "") +
    "\nPlease share the checklist PDF.";

  const url =
    "https://wa.me/" +
    YOUR_WHATSAPP +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
  // In real use:
  // - Save this to Google Sheet / backend
  // - Manually verify in UPI app
