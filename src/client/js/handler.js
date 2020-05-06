var validUrl = require("valid-url");
function submitHandler(event) {
  event.preventDefault();

  console.log("::: Form Submitted :::");
  let formText = document.getElementById("name").value;
  if (validUrl.isUri(formText)) {
    _postData("http://localhost:8080/article", formText);
  } else {
    document.getElementById("error-message").innerHTML =
      "Sorry, this is not a valid URL.";
  }
}

const _postData = async (path, input_url) => {
  await fetch(path, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: input_url }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(function(res) {
      console.log(res);

      document.getElementById("polarity").innerHTML = JSON.stringify(
        res.polarity
      );
      document.getElementById("subjectivity").innerHTML = JSON.stringify(
        res.subjectivity
      );
      document.getElementById("polarity_confidence").innerHTML = JSON.stringify(
        res.polarity_confidence
      );
      document.getElementById(
        "subjectivity_confidence"
      ).innerHTML = JSON.stringify(res.subjectivity_confidence);
      document.getElementById("excerpt").innerHTML = JSON.stringify(res.text);
    });
};

export { submitHandler };
