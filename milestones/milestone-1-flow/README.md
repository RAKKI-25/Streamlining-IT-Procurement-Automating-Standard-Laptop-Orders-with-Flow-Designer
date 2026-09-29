# Milestone 1: Flow — Standard Laptop Orders Automation

## Overview
This milestone establishes the automated fulfillment flow for **Standard Laptop** catalog requests within ServiceNow using **Flow Designer**. The flow, titled **"Standard Laptop Task"**, triggers upon catalog item request and ensures that fulfillment tasks are routed to the **Hardware** assignment group when the request reaches the **Approved** state.

---

## Directory Structure

```text
milestones/milestone-1-flow/
├── docs/
│   └── MILESTONE_1_COMPLETION_REPORT.md
├── evidence/
│   └── Milestone_1_Flow_Screenshot_Evidence.docx
├── screenshots/
│   └── README.md
├── scripts/
│   └── verify_standard_laptop_flow.js
├── update_sets/
│   └── Standard_Laptop_Task_Flow_UpdateSet.xml
├── videos/
│   └── Milestone_1_Flow_Completion.mp4
├── FLOW_DESIGNER_IMPLEMENTATION_STEPS.md
└── README.md
```

---

## Artifacts & Components

| Component / Folder | Description |
| :--- | :--- |
| **`FLOW_DESIGNER_IMPLEMENTATION_STEPS.md`** | Step-by-step configuration manual for setting up the flow in ServiceNow Flow Designer. |
| **`docs/`** | Detailed completion report and technical specification ([`MILESTONE_1_COMPLETION_REPORT.md`](docs/MILESTONE_1_COMPLETION_REPORT.md)). |
| **`evidence/`** | Consolidated document evidence ([`Milestone_1_Flow_Screenshot_Evidence.docx`](evidence/Milestone_1_Flow_Screenshot_Evidence.docx)). |
| **`screenshots/`** | Screenshot capture checklist and verification guidelines ([`README.md`](screenshots/README.md)). |
| **`scripts/`** | Automated verification background script ([`verify_standard_laptop_flow.js`](scripts/verify_standard_laptop_flow.js)). |
| **`update_sets/`** | Pre-built, importable ServiceNow Update Set XML ([`Standard_Laptop_Task_Flow_UpdateSet.xml`](update_sets/Standard_Laptop_Task_Flow_UpdateSet.xml)). |
| **`videos/`** | Walkthrough and configuration video evidence ([`Milestone_1_Flow_Completion.mp4`](videos/Milestone_1_Flow_Completion.mp4)). |

---

## Video Evidence

The file [`videos/Milestone_1_Flow_Completion.mp4`](videos/Milestone_1_Flow_Completion.mp4) provides genuine video evidence of the Milestone 1 ServiceNow configuration, verifying:
- **Standard Laptop Task flow** configuration in Flow Designer
- **Service Catalog trigger** setup
- **Create Catalog Task action** definition
- **Requested Item dynamic mapping** (`{{Trigger.current}}`)
- **Short Description**: `Configure Standard Laptop`
- **Description**: Hardware fulfillment instructions
- **Assignment Group** = `Hardware`
- **Approval Condition** = `Approved`
- **Process Engine association**: Standard Laptop Catalog Item → Process Engine → Standard Laptop Task

> **Note on Verification Scope**: This video provides authentic verification of the ServiceNow flow design, actions, field mappings, and catalog item linkage. In accordance with data integrity guidelines, end-to-end test order submission, approval execution, and automatic Catalog Task generation remain pending live execution evidence.
