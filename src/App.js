import routes from '@/router'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'

const loading_style = {
  position: 'absolute',
  left: 0,
  right: 0,
  color: '#1890ff',
  textAlign: 'center'
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div style={loading_style}>Loading...</div>}>
        <Routes>
          {routes.map(route => (<Route path={route.url} element={<route.component/>} key={route.url}/>))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;

