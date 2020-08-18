class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacaoView = new NegociacaoView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update('Negociação adiciona com sucesso!');
    }
}
