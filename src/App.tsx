import { AppRouter } from './AppRouter'
import { Nav } from './components/Nav'

function App() {
    return (
        <>
            <Nav />
            <div className="mx-6 text-center text-slate-200 text-lg">
                <AppRouter />
            </div>
        </>
    )
}

export default App
