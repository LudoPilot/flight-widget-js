const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "06:11",
        destionation: "OMAN",
        flight: "0X 203",
        gate: "A 01",
        remarks: "ON TIME"
    },

    {
        time: "07:45",
        destionation: "LONDON",
        flight: "LF 256",
        gate: "B 05",
        remarks: "BREXITED"
    },

    {
        time: "09:20",
        destionation: "TOKYO",
        flight: "JP 320",
        gate: "C 03",
        remarks: "ON TIME"
    },

    {
        time: "10:30",
        destionation: "BERLIN",
        flight: "DX 390",
        gate: "D 03",
        remarks: "ON TIME"
    },

    {
        time: "15:32",
        destionation: "BARCELONA",
        flight: "FC 201",
        gate: "E 07",
        remarks: "ON TIME"
    }
]

const destinations = ["PARIS", "FRANKFURT", "DUBAI", "STOCKHOLM", "HELSINKI"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            
            for(const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)


            }
            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor( (Math.random() * alphabet.length) ))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor( (Math.random() * newNumbers.length) ))
    }
    return numbers.charAt(Math.floor( (Math.random() * numbers.length) ))
}

function generateTime() {
    let displayHour = hour
    
    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}
function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 5000)