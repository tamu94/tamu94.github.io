
const tbody = d3.select('tbody')
const input = d3.select("input")
const button = d3.select("button")

function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()

    let filterCond = input.property("value")

    
    tbody.html('')  // Clear existing data
    data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
        let row = tbody.append("tr")
        // row.append("td").text(dataRow.)
        row.append("td").text(dataRow.datetime)
        row.append("td").text(dataRow.city)
        row.append("td").text(dataRow.state)
        row.append("td").text(dataRow.country)
        row.append("td").text(dataRow.shape)
        row.append("td").text(dataRow.durationMinutes)
        row.append("td").text(dataRow.comments)
    })
}

button.on("click",handleClick)
input.on("change", handleClick)
// buildTable(tableData)

function playSound () {
    document.getElementById('play').play();
  }