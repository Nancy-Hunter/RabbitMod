
const deleteTarget = document.querySelectorAll('.trash')
const editTarget = document.querySelectorAll('.edit')

Array.from(deleteTarget).forEach(element => {
    element.addEventListener('click', deleteEntry)
})

Array.from(editTarget).forEach(element => {
    element.addEventListener('click', openEditor)
})

async function deleteEntry() {
    var result = confirm("Are you sure you want to permanently delete?")
    if (result) {
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
}


async function editEntry(target) {
    //target holds name of bun that edit was clicked on before changes
    console.log('edit function entered') 
    var result = confirm("Do you want to edit?")
    if (result) {
        // const targetName = this.parentNode.childNodes[1].innerText
        // const targetAge = this.parentNode.childNodes[3].innerText
        // const targetBio = this.parentNode.childNodes[5].innerText
        //const targetPic = this.parentNode.parentNode.childNode[1].innerText
        try {
                const response = await fetch('putEntry', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        'petNameString': target,
                        //'petAgeString': targetAge,
                        //'petBioString': targetBio,
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
}

function openEditor (){
    const targetName = this.parentNode.childNodes[1].innerText
    const targetAge = this.parentNode.childNodes[3].innerText
    const targetBio = this.parentNode.childNodes[5].innerText
    document.getElementById('petName').value = targetName
    document.getElementById('petAge').value = targetAge
    document.getElementById('description').value = targetBio
    editEntry(targetName)
}