import Card from './components/Card'
import escudoFlamengo from './assets/flamengo.png'
import escudoPalmeiras from './assets/palmeiras.png'

function App() {
  return (
    <main className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-2xl font-bold text-gray-900">Final da Libertadores — quem leva?</h1>

      <Card
        imagem={escudoFlamengo}
        alt="Escudo do Flamengo"
        titulo="Flamengo"
        descricao="Rubro-negro carioca. Clique em Votar se acha que o Mengão levanta a taça."
      />

      <Card
        imagem={escudoPalmeiras}
        alt="Escudo do Palmeiras"
        titulo="Palmeiras"
        descricao="Verdão paulista. Clique em Votar se acha que o Palmeiras fica com o título."
      />
    </main>
  )
}

export default App