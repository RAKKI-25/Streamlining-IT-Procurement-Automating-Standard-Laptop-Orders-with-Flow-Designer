# Milestone 1: Evidence & Screenshot Verification Guide

This directory contains the mentor review evidence requirements for **Milestone 1: Flow** of the project **“Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer”**.

---

### Required Evidence Checklist for Mentor Submission

Each screenshot must be unedited, authentic, and clearly display the ServiceNow instance header, record numbers, and relevant configuration properties:

| # | Evidence Name | Target File | What to Capture & Highlight |
|---|---|---|---|
| **1** | **Flow Designer Flow Overview** | `01_flow_designer_flow_standard_laptop_task.png` | Open Flow Designer canvas showing the flow header with Name: **Standard Laptop Task**, Application Scope: `Global`, and status. |
| **2** | **Trigger & Approval Condition** | `02_flow_trigger_and_approval_condition.png` | Expand the Trigger panel. Show Trigger configuration (Service Catalog trigger or Record Updated on `sc_req_item`) and the explicit approval condition ensuring execution only occurs **after** approval is satisfied. |
| **3** | **Create Catalog Task Action & Mappings** | `03_create_catalog_task_action_field_mappings.png` | Expand the **Create Catalog Task** action. Highlight: <br>• Dynamic Data Pill: `{{Trigger.current}}` / `Requested Item Record`<br>• Short Description: `Configure Standard Laptop`<br>• Description: Hardware team instructions<br>• Assignment group: **Hardware** |
| **4** | **Activated Flow** | `04_activated_flow.png` | Show the top-right header of Flow Designer with the green active dot and status **Active** / **Published** for `Standard Laptop Task`. |
| **5** | **Approved Standard Laptop RITM** | `05_approved_standard_laptop_ritm.png` | Navigate to the generated Requested Item (e.g., `RITM0010001`). Show Item = **Standard Laptop**, Stage = **Request Approved** / **Work in Progress**, and Approval = **Approved**. |
| **6** | **Generated Catalog Task (Hardware Assignment)** | `06_catalog_task_hardware_assignment.png` | Open the generated Catalog Task (e.g., `TASK0010001`) or the **Catalog Tasks** related list under the RITM. Clearly show:<br>• Parent Request Item = `RITM0010001`<br>• Assignment group = **Hardware**<br>• Short description = `Configure Standard Laptop`<br>• State = `Open` |

---

### End-to-End Verification Flow

```
[Standard Laptop Catalog Request Submitted]
                   │
                   ▼
  [Requested Item (RITM) Created - Approval: Requested]
                   │
                   ▼
      [Approval Record Marked 'Approved']
                   │
                   ▼
 [Flow Designer 'Standard Laptop Task' Executes Automatically]
                   │
                   ▼
[Catalog Task Generated Under Parent RITM & Assigned to 'Hardware']
```
