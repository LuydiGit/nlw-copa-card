let IsIgnite = true
function changeCard(event){
    const card = event.currentTarget
    const bg = IsIgnite ? "explorer" : "ignite"

    IsIgnite = !IsIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}