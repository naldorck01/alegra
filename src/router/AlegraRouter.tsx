import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DashboardPage } from "@pages"
import Layout from '@components/Theme/Layout';

const AlegraRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bill" element={<><h1 style={{fontSize: "5rem"}}>Bill</h1></>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default AlegraRouter;