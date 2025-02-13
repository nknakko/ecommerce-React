import Layout from "../../components/Layout"
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/Auth";
function Admindashboard() {
     
        const [auth] = useAuth();
  return (
    <Layout>
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row" style={{ paddingTop: "100px" }}>
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3> Admin Name : {auth?.user?.name}</h3>
            <h3> Admin Email : {auth?.user?.email}</h3>
            <h3> Admin Contact : {auth?.user?.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
    );
    
}
export default Admindashboard 