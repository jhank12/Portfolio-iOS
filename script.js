

const projectOptionsContainer = document.querySelector(".projectTypeOptions")
const projectOptions = document.querySelectorAll(".projectTypeOption");

const projectSections = document.querySelectorAll(".projectsContainer");

projectOptionsContainer.addEventListener("click", function(e) {

    const projectOption = e.target.closest(".projectTypeOption");

    if (projectOption === null) return

    resetChecked()
    projectOption.classList.add("projectTypeChecked");

    projectSections.forEach(section => {
        console.log(section)
        section.classList.add("hidden");

        if (section.dataset.projectstype === projectOption.dataset.btnoption) {
            section.classList.remove("hidden")
        } 
    })

})

function resetChecked() {
    projectOptions.forEach(option => {

        option.classList.remove("projectTypeChecked");
    })
}
