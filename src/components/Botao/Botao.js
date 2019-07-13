import React from 'react'

import './Botao.css'

class Botao extends React.Component {
    render() {
        return(
            <button className={this.props.className} onClick={this.props.clickBotao}>{this.props.conteudoBotao}</button>
        )
    }
}

export default Botao