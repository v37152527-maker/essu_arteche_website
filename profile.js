document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value;

        let gender = "";
        const genders = document.getElementsByName("gender");

        genders.forEach(function (g) {
            if (g.checked) {
                gender = g.value;
            }
        });

        let interests = [];
        document.querySelectorAll('input[name="interest"]:checked').forEach(function (item) {
            interests.push(item.value);
        });

        alert(
`Form Submitted Successfully!

Name: ${name}
Email: ${email}
Course: ${course}
Gender: ${gender}
Interests: ${interests.join(", ")}
Message: ${message}`
        );

        form.reset();

    });

});