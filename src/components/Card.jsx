import { useState } from 'react'
import Botao from './Botao'

function Card({ imagem, alt, titulo, descricao }) {
    const [votado, setVotado] = useState(false)

    return (
        <article className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row">
            <img
                src={imagem}
                alt={alt}
                className="h-32 w-32 shrink-0 rounded-xl bg-gray-100 object-contain p-2"
            />

            <div>
                <h2 className="text-lg font-bold text-gray-900">{titulo}</h2>
                <p className="mt-2 text-gray-700">{descricao}</p>

                <div className="mt-4">
                    <Botao ativo={votado} onClick={() => setVotado(!votado)}>
                        <span aria-hidden="true">{votado ? '✓' : '○'}</span> Votar
                    </Botao>
                </div>
            </div>
        </article>
    )
}

export default Card