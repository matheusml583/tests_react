function setColor(id){
    switch(id){
        case "Home":
            window.document.getElementById(id).style.color = "black"
            window.document.getElementById("Pendentes").style.color = "#6f98cc"
            window.document.getElementById("Finalizados").style.color = "#6f98cc"
            window.document.getElementById("Cancelados").style.color = "#6f98cc"
        break
        case "Pendentes":
            window.document.getElementById(id).style.color = "black"
            window.document.getElementById("Home").style.color = "#6f98cc"
            window.document.getElementById("Finalizados").style.color = "#6f98cc"
            window.document.getElementById("Cancelados").style.color = "#6f98cc"
        break
        case "Finalizados":
            window.document.getElementById(id).style.color = "black"
            window.document.getElementById("Pendentes").style.color = "#6f98cc"
            window.document.getElementById("Cancelados").style.color = "#6f98cc"
            window.document.getElementById("Home").style.color = "#6f98cc"
        break
        case "Cancelados":
            window.document.getElementById(id).style.color = "black"
            window.document.getElementById("Home").style.color = "#6f98cc"
            window.document.getElementById("Pendentes").style.color = "#6f98cc"
            window.document.getElementById("Finalizados").style.color = "#6f98cc"
        break
    }
}

export default setColor