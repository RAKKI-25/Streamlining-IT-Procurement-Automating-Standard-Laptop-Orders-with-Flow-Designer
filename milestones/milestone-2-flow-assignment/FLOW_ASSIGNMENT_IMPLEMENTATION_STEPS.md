# Milestone 2: Flow Assignment Implementation Guide
## Project: Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer

---

### Activity 1: Flow Assignment to Standard Laptop service Catalog

### Overview
This guide provides the exact implementation steps for **Milestone 2: Flow Assignment**.
The objective is to bind the native Flow Designer flow **"Standard Laptop Task"** (built in Milestone 1) to the **Standard Laptop** Catalog Item using the **Process Engine** configuration in ServiceNow.

---

### Step-by-Step Implementation Procedure

1. **Open ServiceNow**:
   - Log into your ServiceNow instance as an Administrator or with the `catalog_admin` / `admin` role.

2. **Navigate to Maintain Items**:
   - Click on **All** in the primary navigation bar.
   - Search for:
     ```text
     Maintain Items
     ```
   - Select **Service Catalog > Catalog Definition > Maintain Items**.

3. **Locate Standard Laptop Catalog Item**:
   - In the Catalog Items list, use the search filter on the **Name** field.
   - Search for:
     ```text
     Standard Laptop
     ```
   - Click on the **Standard Laptop** record to open its form.

4. **Open Process Engine Section**:
   - Scroll down to the form tabs and select the **Process Engine** tab.

5. **Remove Remaining Process Automations**:
   - Verify and clear any existing entries in the **Workflow** field (ensure it is blank).
   - Verify and clear any existing entries in the **Execution Plan** field (ensure it is blank).
   - This ensures that only one process engine executes and prevents conflicting fulfillment routines.

6. **Select Flow**:
   - In the **Flow** field, click the lookup icon (magnifying glass) or type:
     ```text
     Standard Laptop task
     ```
   - Select the flow created in Milestone 1 (**Standard Laptop Task** / `Standard Laptop task`).

7. **Save and Update the Record**:
   - Click the **Update** or **Save** button in the form header to persist the changes.

---

### Verification Checklist

- [x] `Standard Laptop` Catalog Item record opened.
- [x] **Process Engine** tab selected.
- [x] **Flow** field set to `Standard Laptop task`.
- [x] **Workflow** field is blank.
- [x] **Execution Plan** field is blank.
- [x] Record updated and saved successfully.
