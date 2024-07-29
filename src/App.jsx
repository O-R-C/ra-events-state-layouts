import Store from '../components/Store/Store'
import data from './js/data'

function App() {
  return (
    <div>
      <Store products={data} />
    </div>
  )
}

export default App
