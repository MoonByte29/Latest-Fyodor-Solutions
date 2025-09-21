import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AIAutomation from "./pages/services/AIAutomation";
import OpportunityDiscovery from "./pages/services/OpportunityDiscovery";
import CybersecurityCompliance from "./pages/services/CybersecurityCompliance";
import ManagedDelivery from "./pages/services/ManagedDelivery";
import Banking from "./pages/industry/Banking";
import Automotive from "./pages/industry/Automotive";
import Insurance from "./pages/industry/Insurance";
import Finance from "./pages/industry/Finance";
import ImplementationServices from "./pages/services/ImplementationServices";
import EnterpriseAppDevelopment from "./pages/services/EnterpriseAppDevelopment";
import CustomSolutions from "./pages/services/CustomSolutions";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-black text-white relative flex flex-col items-center">
        <div
          className="fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* SERVICES PAGE */}
              <Route
                path="/services/ai-&-automation-consulting"
                element={<AIAutomation />}
              />
              <Route
                path="/services/opportunity-discovery"
                element={<OpportunityDiscovery />}
              />
              <Route
                path="/services/cybersecurity-&-compliance-compilance"
                element={<CybersecurityCompliance />}
              />
              <Route
                path="/services/managed-delivery"
                element={<ManagedDelivery />}
              />
              <Route
                path="/services/implementation-services"
                element={<ImplementationServices />}
              />
              <Route
                path="/services/enterprise-app-development"
                element={<EnterpriseAppDevelopment />}
              />
              <Route
                path="/services/custom-solutions"
                element={<CustomSolutions />}
              />

              {/* INDUSTRY  */}
              <Route path="/banking" element={<Banking />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/finance" element={<Finance />} />

              <Route path="/automotive" element={<Automotive />} />

              <Route path="/contact" element={<Contact />} />
              {/* Fallback 404 */}
              <Route
                path="*"
                element={
                  <div className="text-center py-20 text-gray-400">
                    404 | Page Not Found
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
