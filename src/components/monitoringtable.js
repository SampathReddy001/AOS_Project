import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "react-bootstrap";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { AuthContext } from "./AuthContext";

function MonitoringDataTable() {
  const [projectsExist, setProjectsExist] = useState(false);
  const [monitoringTable, setMonitoringTable] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    // Simulate mock monitoring data
    setTimeout(() => {
      setProjectsExist(true);
      setMonitoringTable([
        { id: 1, metric: "CPU Spike", severity: "High", date: "2025-04-08" },
        { id: 2, metric: "Memory Overuse", severity: "Medium", date: "2025-04-07" },
        { id: 3, metric: "Disk Usage", severity: "Low", date: "2025-04-06" },
      ]);
    }, 1000);
  }, []);

  const columns = [
    { dataField: "id", text: "Monitor ID" },
    { dataField: "metric", text: "Metric" },
    {
      dataField: "severity",
      text: "Severity",
      formatter: (cell) => {
        let severityClass = "";
        switch (cell) {
          case "High":
            severityClass = "text-danger";
            break;
          case "Medium":
            severityClass = "text-warning";
            break;
          case "Low":
            severityClass = "text-success";
            break;
          default:
            break;
        }
        return <span className={severityClass}>{cell}</span>;
      },
    },
    { dataField: "date", text: "Date" },
  ];

  return (
    <>
      <Sidebar activePage="monitoring" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Monitoring Table
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    {projectsExist && monitoringTable.length > 0 ? (
                      <Container>
                        <ToolkitProvider
                          keyField="id"
                          data={monitoringTable}
                          columns={columns}
                          search
                        >
                          {(props) => (
                            <div>
                              <BootstrapTable
                                {...props.baseProps}
                                striped
                                hover
                                pagination={paginationFactory()}
                              />
                            </div>
                          )}
                        </ToolkitProvider>
                      </Container>
                    ) : (
                      <p className="container">No monitoring alerts to display.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default MonitoringDataTable;
