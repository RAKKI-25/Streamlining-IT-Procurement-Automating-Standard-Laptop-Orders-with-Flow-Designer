# Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer

[![ServiceNow](https://img.shields.io/badge/ServiceNow-Flow%20Designer-green)](https://www.servicenow.com/)
[![Milestone 1 Status](https://img.shields.io/badge/Milestone%201-Design%20%26%20Artifacts%20Complete-blue)](#milestone-1-flow-designer-automation)
[![Live Verification](https://img.shields.io/badge/Live%20Verification-PENDING%20(Instance%20Required)-orange)](#status-breakdown)

An enterprise-grade ServiceNow Flow Designer solution designed to automate IT procurement and fulfillment for **Standard Laptop** catalog orders. By automating task generation and intelligent routing to the **Hardware** assignment group immediately upon request approval, this solution eliminates manual fulfillment bottlenecks, improves processing speed, and ensures consistency.

---

## 📌 Status Breakdown

| Phase / Component | Status | Details |
| :--- | :--- | :--- |
| **Flow Implementation Design** | ✅ **COMPLETED** | Native Flow Designer logic, trigger gating, and dynamic task creation fully specified. |
| **Step-by-Step UI Guide** | ✅ **COMPLETED** | Complete manual for configuring, activating, and testing the flow inside ServiceNow. |
| **Importable Update Set (XML)** | ✅ **COMPLETED** | Ready-to-import update set (`Standard_Laptop_Task_Flow_UpdateSet.xml`) prepared. |
| **Automated Test Script** | ✅ **COMPLETED** | ServiceNow background script (`verify_standard_laptop_flow.js`) ready to run. |
| **Evidence / Screenshot Checklist**| ✅ **COMPLETED** | Specifications for the 6 authentic mentor review captures structured. |
| **Live Instance Configuration** | ⏳ **PENDING** | *Awaiting access to a ServiceNow training instance or Personal Developer Instance (PDI).* |
| **Live End-to-End Verification** | ⏳ **PENDING** | *Live order submission, approval completion, and task generation pending instance access.* |

---

## 🚀 Workflow Architecture

The fulfillment workflow orchestrates the lifecycle of catalog requests, ensuring that fulfillment tasks are generated **strictly after** the governance/approval gate is cleared:

```mermaid
flowchart TD
    A["User submits 'Standard Laptop' Order"] --> B["sc_req_item Created (Approval: Requested)"]
    B --> C{"Manager Approval Status"}
    C -- "Pending / Rejected" --> D["Flow remains IDLE / No Task Created"]
    C -- "Approved" --> E["Flow Designer Trigger: 'Standard Laptop Task'"]
    E --> F["Evaluate Trigger: Item == 'Standard Laptop' & Approval == 'Approved'"]
    F --> G["Action: Create Catalog Task (sc_task)"]
    G --> H["Task Mapped to Parent RITM via Dynamic Data Pill {{Trigger.current}}"]
    H --> I["Set Short Description & Work Instructions"]
    I --> J["Assign to 'Hardware' Assignment Group"]
    J --> K["Hardware Team Receives Task for Imaging & Deployment"]
```

---

## 🛠️ Milestone 1: Flow Specification

### Core Technical Parameters

| Component | Technical Detail |
| :--- | :--- |
| **Flow Name** | `Standard Laptop Task` |
| **Scope** | `Global` |
| **Trigger Type** | `Service Catalog` (with Catalog Item Association) OR `Record > Updated` on `sc_req_item` |
| **Trigger Conditions** | `Item is Standard Laptop` AND `Approval is Approved` AND `Approval changes to Approved` |
| **Action** | `ServiceNow Core > Create Catalog Task` |
| **Requested Item Binding** | `{{Trigger.current}}` *(Dynamic Data Pill: Trigger > Requested Item Record)* |
| **Short Description** | `Configure Standard Laptop` |
| **Description** | `Hardware team: Please configure, image, and prepare the requested Standard Laptop for deployment to the user. Ensure standard corporate software packages are installed, verify hardware specs, and asset tag before dispatch.` |
| **Assignment Group** | `Hardware` *(Reference to existing `sys_user_group`)* |
| **Assigned To** | *(Unassigned - routes to group queue)* |

---

## 📂 Repository Structure

```text
.
├── README.md                                          # Project documentation and architecture
└── milestones/
    └── milestone-1-flow/
        ├── FLOW_DESIGNER_IMPLEMENTATION_STEPS.md     # Step-by-step UI configuration guide
        ├── docs/
        │   └── MILESTONE_1_COMPLETION_REPORT.md      # Implementation status and specification report
        ├── scripts/
        │   └── verify_standard_laptop_flow.js        # Automated verification script for ServiceNow
        ├── update_sets/
        │   └── Standard_Laptop_Task_Flow_UpdateSet.xml # Importable ServiceNow Update Set
        └── screenshots/
            └── README.md                             # Evidence guide and checklist for mentor submission
```

---

## 📋 Live Verification Checklist (To Complete in Instance)

When access to a ServiceNow instance is established, execute the following steps to finalize live verification:

1. **Deploy / Build Flow:**
   - Import `milestones/milestone-1-flow/update_sets/Standard_Laptop_Task_Flow_UpdateSet.xml` via **Retrieved Update Sets > Import XML**, OR build manually following `FLOW_DESIGNER_IMPLEMENTATION_STEPS.md`.
2. **Activate:**
   - Open Flow Designer and click **Activate** on **`Standard Laptop Task`**.
3. **Submit Order:**
   - Navigate to **Service Catalog > Hardware > Standard Laptop** and click **Order Now**.
   - Record the real **RITM number**.
4. **Approve:**
   - Open the RITM, locate the approval record, and set **State = Approved**.
5. **Verify Automation:**
   - Confirm Flow Designer context executes automatically.
   - Open the RITM and verify the automatically created Catalog Task in the **Catalog Tasks** related list.
   - Record the real **TASK number**.
   - Confirm **Assignment group** is **`Hardware`**.
6. **Capture Evidence:**
   - Capture the 6 unedited screenshots specified in `milestones/milestone-1-flow/screenshots/README.md` and save them into the `screenshots/` directory.
