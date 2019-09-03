const ajaxTxtBtn = document.getElementById('ajax-txt-btn')
const ajaxJsonBtn = document.getElementById('ajax-json-btn')
const ajaxPhpBtn = document.getElementById('ajax-php-btn')

const xhr = new XMLHttpRequest()

const loadTxt = () => {
    xhr.open('GET', 'loren.txt', true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
        } else if (xhr.status === 404) {
            console.log('Error, file not found')
        }
    }
    xhr.send()    
}

const loadJson = () => {
    console.log('Current state ', xhr.readyState)
    xhr.open('GET', 'person.json', true)
    console.log('Current state ', xhr.readyState)

    xhr.onprogress = () => {
        console.log('Current state ', xhr.readyState)        
    }

    xhr.onload = () => {
        if (xhr.status === 200)
        {
            console.log('Current state ', xhr.readyState)
            console.log(xhr.responseText)  
            const person = JSON.parse(xhr.responseText)
            console.log(person)
            person.forEach(p => {
                const {firstName, lastName} = p
                console.log(p.firstName)
                console.log(firstName)
                console.log(`First Name: ${firstName}, Last Name: ${lastName}`)                
            })
        } else if (xhr.status === 404) {
            console.log('Error, file not found')
        }
    }
    xhr.send()
}

const sendPHP = () => {
    const firstName = 'Anthony'
    const lastName = 'Mellon'
    const params = `firstName=${firstName}&lastName=${lastName}`
    xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php', true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
        } else if (xhr.status === 500) {
            console.log('Error, internal server error')
        }
    }
    xhr.send(params)
}

ajaxTxtBtn.addEventListener('click', loadTxt)
ajaxJsonBtn.addEventListener('click', loadJson)
ajaxPhpBtn.addEventListener('click', sendPHP)