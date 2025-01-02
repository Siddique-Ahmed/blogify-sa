import AsideBar from "../components/AsideBar";
import MainContent from "../components/MainContent";

const AdminDashboard = () => {
  return <div className="flex h-screen bg-gray-100 shadow-md">
    <div className="sm:w-1/4">
    <AsideBar/>
    </div>
    <div className="w-full sm:w-3/4">
    <MainContent/>
    </div>
  </div>;
};

export default AdminDashboard;
