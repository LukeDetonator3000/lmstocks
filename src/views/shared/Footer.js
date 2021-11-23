import React, { Component } from "react";

class Footer extends Component {

    render() {
        const p = {
            color: '#FFFFFF',
        }
        return <footer>
            {/* Esse componente é pra colocar informações sobre a gnt, se quiser colocar mais coisa fica a vontade */}
            <p style={p}>Project created by <a href="https://github.com/LukeDetonator3000">Lucas Gabriel</a>, <a href="https://github.com/luisaferreira">Maria Luisa</a> and <a href="https://github.com/MarinaThompson">Marina Leticia</a></p>
        </footer>
    }
}

export default Footer;