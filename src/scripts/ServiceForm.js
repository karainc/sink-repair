import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription"><b>Description</b></label>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="serviceAddress"><b>Address</b></label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="serviceBudget"><b>Budget</b></label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <p>
        <div class="field">
            <label class="label" for="serviceDate"><b>Date Needed</b></label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})
