const items = document.querySelectorAll(".accordion-item");
items.forEach((item) => {
  const question = item.querySelector(".accordion-question");
  question.addEventListener("click", () => {
    const answer = item.querySelector(".accordion-answer");
    answer.classList.toggle("active");
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.querySelector(".accordion-answer");
        if (otherAnswer) otherAnswer.classList.remove("active");
      }
    });
  });
});
