import styles from "./tabNavigation.module.css"; // Import the module.css file
import Uploder from "../uploader/uploader";
import { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Create");
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    background: "",
    candidates: [],
    startTime: new Date().toISOString(),
    endTime: "",
    voteMethod: "select1",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <section
          className={activeTab === "Create" ? styles.active : ""}
          onClick={() => handleTabClick("Create")}
        >
          Create
        </section>
        <section
          className={activeTab === "List" ? styles.active : ""}
          onClick={() => handleTabClick("List")}
        >
          List
        </section>
        <section
          className={activeTab === "Result" ? styles.active : ""}
          onClick={() => handleTabClick("Result")}
        >
          Result
        </section>
      </div>
      <div className={styles.tabContent}>
        {activeTab === "Create" && (
          <Uploder formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "List" && <div>Learn more About us here.</div>}
        {activeTab === "Result" && (
          <div>Contact us at example@example.com.</div>
        )}
      </div>
    </div>
  );
};

export default TabNavigation;
