const btnSend = document.getElementById("send-petition")

btnSend?.addEventListener("click", async () => {
    console.log("enviando petición....")
    const petitionInput = document.getElementById("petition")
    const questionInput = document.getElementById("question")

    if (petitionInput.value === "" || questionInput.value === "") {
        alert("Ambos campos tienen que estar llenos")
        return
    }

    // creamos el objeto a enviar
    const dataToSend = {
        answer: "",
        client: "web",
        language: "es",
        number: 1,
        petition: petitionInput.value,
        question: questionInput.value
    }

    console.log(dataToSend)

    // enviar la petición

    try {
        
        const response = await fetch("https://peter-answers.appspot.com/_ah/api/paApi/v1/questions?alt=json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( dataToSend )
        })

        const data = await response.json()

        const answerText = document.getElementById("answer")

        answerText.innerHTML = data.answer

    } catch (error) {
        alert(error)
    }

})




