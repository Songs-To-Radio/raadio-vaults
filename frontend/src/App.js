import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Preview from "./components/preview_vault";
import CreateVault from "./components/createVault";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider, { UserContext } from "./contexts/user.contexts";
import Whitelist from "./components/whitelist";
import VaultNFTS from "./components/vault_nfts";
import Services from "./components/services";

function App() {

  return (
    <>
      <UserContextProvider>
        <UserContext.Consumer>
          {({account, handleConnect, handleDisonnect, section, setSection})=> <div className="relative flex flex-col h-[100vh]">
            <Header connect={handleConnect} disconnect={handleDisonnect} account={account} setSection={setSection}/>
            {account && <div className="flex relative flex-1">
              <Sidebar setSection={setSection} />
              <main className="flex-1 p-10 pr-[10vw]">
                {section == 0 && <Dashboard setSection={setSection} account={account} />}
                {section == 1 && <Preview />}
                {section == 2 && <CreateVault setSection={setSection} />}
                {section == 3 && <Whitelist />}
                {section == 4 && <VaultNFTS />}
                {section == 5 && <Services />}
              </main>
            </div>}
            {!account && <div className={"flex-1 flex justify-center items-center"}>
              <p>
                Connect Wallet
              </p>
            </div>}
            <Footer />
          </div>}
        </UserContext.Consumer>
      </UserContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
