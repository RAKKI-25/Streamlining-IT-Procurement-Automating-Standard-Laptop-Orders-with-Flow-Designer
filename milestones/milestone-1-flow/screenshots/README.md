# Milestone 1: Evidence & Screenshot Verification Guide

> **Current Status**: ⏳ **PENDING – ServiceNow instance required**  
> *In accordance with academic and professional integrity requirements, no fake, mocked, or fabricated screenshots are stored in this repository. Real screenshots must be captured from an active ServiceNow instance once provisioned.*

---

### Required Evidence Checklist for Mentor Submission

When your ServiceNow training instance or Personal Developer Instance (PDI) is available, capture the following 6 screenshots from the live environment and save them into this directory (`milestones/milestone-1-flow/screenshots/`):

| # | Evidence Name | Target File Name | Exact Location & Content to Capture |
|---|---|---|---|
| **1** | **Flow Designer Flow Overview** | `01_flow_designer_flow_standard_laptop_task.png` | Open Flow Designer canvas showing the flow header with Name: **`Standard Laptop Task`**, Application Scope: `Global`, and status. |
| **2** | **Trigger & Approval Condition** | `02_flow_trigger_and_approval_condition.png` | Expand the Trigger panel. Show Trigger configuration (`Service Catalog` or `Record Updated` on `sc_req_item`) and the explicit approval condition ensuring execution only occurs **after** approval is satisfied. |
| **3** | **Create Catalog Task Action & Mappings** | `03_create_catalog_task_action_field_mappings.png` | Expand the **Create Catalog Task** action. Highlight:<br>• Dynamic Data Pill: `{{Trigger.current}}` / `Requested Item Record`<br>• Short Description: `Configure Standard Laptop`<br>• Description: Hardware team instructions<br>• Assignment group: **Hardware** |
| **4** | **Activated Flow** | `04_activated_flow.png` | Show the top-right header of Flow Designer with the green active dot and status **Active** / **Published** for `Standard Laptop Task`. |
| **5** | **Approved Standard Laptop RITM** | `05_approved_standard_laptop_ritm.png` | Navigate to the generated Requested Item (e.g. in `sc_req_item.list`). Show Item = **Standard Laptop**, Stage = **Request Approved** / **Work in Progress**, and Approval = **Approved**. |
| **6** | **Generated Catalog Task (Hardware Assignment)** | `06_catalog_task_hardware_assignment.png` | Open the generated Catalog Task (in `sc_task.list`) or the **Catalog Tasks** related list under the RITM. Clearly show:<br>• Parent Request Item matching test RITM<br>• Assignment group = **Hardware**<br>• Short description = `Configure Standard Laptop`<br>• State = `Open` |

---

### Execution Instructions Once Instance is Provisioned

1. Import the Update Set [`../update_sets/Standard_Laptop_Task_Flow_UpdateSet.xml`](../update_sets/Standard_Laptop_Task_Flow_UpdateSet.xml) into ServiceNow (**Retrieved Update Sets > Import XML**), preview and commit, or configure manually following [`../FLOW_DESIGNER_IMPLEMENTATION_STEPS.md`](../FLOW_DESIGNER_IMPLEMENTATION_STEPS.md).
2. Activate the flow.
3. Order **Standard Laptop** from the Service Catalog.
4. Approve the Requested Item.
5. Capture each of the 6 screenshots above directly from your browser.
6. Commit the image files to this folder.
