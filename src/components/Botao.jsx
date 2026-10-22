function Botao({ children, onClick, ativo = false }) {
    return (
        <button
            type="button"
            aria-pressed={ativo}
            onClick={onClick}
            className={
                ativo
                    ? 'rounded-full border border-marca bg-marca px-4 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca'
                    : 'rounded-full border border-marca bg-white px-4 py-2 font-semibold text-marca hover:bg-marca/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca'
            }
        >
            {children}
        </button>
    )
}

export default Botao