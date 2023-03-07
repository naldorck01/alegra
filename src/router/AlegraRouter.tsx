import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DashboardPage, BillPage } from "@pages"
import Layout from '@components/Theme/Layout';

const AlegraRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bill" element={<BillPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default AlegraRouter;