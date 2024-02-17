console.log('main.js connected')

const deleteTarget = document.querySelectorAll('.trash')

Array.from(deleteTarget).forEach(element => {
    element.addEventListener('click', deleteEntry)
})

async function deleteEntry() {
    console.log('delete function enetered')
    const targetName = this.parentNode.childNodes[1].innerText
    const targetAge = this.parentNode.childNodes[3].innerText
    const targetBio = this.parentNode.childNodes[5].innerText
    //const targetPic = this.parentNode.parentNode.childNode[1].innerText
    try {
            const response = await fetch('deleteEntry', {
                method: 'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({
                    'petNameString': targetName,
                    'petAgeString': targetAge,
                    'petBioString': targetBio,
                    //'petPhotoString': targetPic
                })
            })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}