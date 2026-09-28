# Milestone 1: Flow Implementation Guide
## Project: Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer

---

### Overview
This guide provides the exact configuration, activation, testing, and verification instructions for **Milestone 1: Flow**.
The objective is to automate the procurement and fulfillment of standard laptop hardware requests by designing a native ServiceNow Flow Designer flow named **"Standard Laptop Task"**. The flow ensures that catalog tasks are generated and assigned to the **Hardware** group **only after** the required approval is completed.

---

### Step 1: Open Flow Designer & Create New Flow
1. Log into your ServiceNow instance as an Administrator or with the `flow_designer` / `admin` role.
2. In the Filter Navigator (Application Navigator), type:
   ```text
   Flow Designer
   ```
3. Under **Process Automation**, click **Flow Designer** (or navigate to `All > Process Automation > Flow Designer`).
4. In the Flow Designer home screen, click the **+ Create** button (top right) and select **Flow**.
5. Configure the Flow Properties modal:
   - **Name**: `Standard Laptop Task` *(Must be exact)*
   - **Description**: `Automates catalog task creation and hardware team assignment for Standard Laptop requested items once approval is completed.`
   - **Application**: `Global`
   - **Protection**: `None`
   - **Run As**: `User who initiates session` or `System User` (Recommended: `System User` to ensure consistent execution regardless of catalog user permissions).
6. Click **Submit**.

---

### Step 2: Configure the Trigger & Approval Condition

Depending on the configuration in your ServiceNow training instance, select either **Approach A** (Service Catalog Trigger with Catalog Item Association) or **Approach B** (Record Trigger on `sc_req_item`):

#### Approach A: Service Catalog Trigger (Recommended by SkillWallet Instructions)
1. Click **Add a Trigger**.
2. Select **Service Catalog** (under ServiceNow Core).
3. Click **Done**.
4. In the canvas under **Actions**, click **Add an Action, Flow Logic, or Subflow** > **Action**.
5. Select **ServiceNow Core > Wait For Condition**:
   - **Record**: Drag data pill `Trigger - Service Catalog > Requested Item Record` (`{{Trigger.request_item}}`)
   - **Table**: `Requested Item [sc_req_item]`
   - **Conditions**: `[Approval]` `[is]` `Approved`
6. Click **Done**.

> *Note*: If your instance uses an explicit approval step inside Flow Designer, you can also add **ServiceNow Core > Ask For Approval** on `Trigger -> Requested Item Record`, requiring approval from the requested item's manager/approver before proceeding to the task creation.

#### Approach B: Record Trigger on `sc_req_item`
1. Click **Add a Trigger**.
2. Select **Record > Updated** (or **Created or Updated**).
3. Set the Trigger Fields:
   - **Table**: `Requested Item [sc_req_item]`
   - **Condition**:
     - `[Item]` `[is]` `Standard Laptop`
     - `AND`
     - `[Approval]` `[is]` `Approved`
     - `AND`
     - `[Approval]` `[changes to]` `Approved`
4. Set **Run Trigger**: `Once` (or `For each unique change`).
5. Click **Done**.

---

### Step 3: Add Action — Create Catalog Task
1. Under the Actions section of the canvas, click **Add an Action, Flow Logic, or Subflow** > **Action**.
2. In the Action search palette, select **ServiceNow Core** (or **Service Catalog**) > **Create Catalog Task**.
3. Configure the Action inputs using dynamic Data Pills:
   - **Requested Item Record**:
     - Drag and drop the **Requested Item Record** data pill from the Data Panel on the right:
       `Trigger > Requested Item Record` (`{{Trigger.current}}` or `{{Trigger.request_item}}`)
   - **Short Description**:
     ```text
     Configure Standard Laptop
     ```
   - **Description**:
     ```text
     Hardware team: Please configure, image, and prepare the requested Standard Laptop for deployment to the user. Ensure standard corporate software packages are installed, verify hardware specs, and asset tag before dispatch.
     ```
   - **Fields**:
     - Click **+ Add field value**
     - Field: `Assignment group` | Value: `Hardware` *(Select the existing "Hardware" group record)*
     - Field: `State` | Value: `Open` (or `1`)
4. Click **Done**.

---

### Step 4: Validate and Activate Flow
1. Click **Save** in the top navigation bar.
2. Verify that there are no syntax, mapping, or missing field warnings.
3. Click **Activate** (top right) to publish the flow to the instance.
4. Confirm activation modal prompt. Once activated, the status indicator will show a green dot and **Active**.
5. Confirm the flow name is exactly **Standard Laptop Task**.

---

### Step 5: Associate Flow with Standard Laptop Catalog Item
*(Required when using Approach A)*
1. In the Filter Navigator, navigate to **Service Catalog > Catalog Definitions > Maintain Items**.
2. Search for and open **Standard Laptop**.
3. In the form, scroll down to the **Process Engine** tab / section:
   - Set **Flow**: `Standard Laptop Task`
   - If there is an existing Workflow or Execution Plan populated, remove it so that Flow Designer controls the fulfillment.
4. Click **Update** or **Save**.

---

### Step 6: Test with a Real Catalog Request
1. In the Filter Navigator, navigate to **Self-Service > Service Catalog** (or the Service Portal at `/sp`).
2. Search for the catalog item **Standard Laptop**.
3. Select **Standard Laptop** and fill out any options.
4. Click **Order Now**.
5. A Request record (`REQ...`) and Requested Item record (`RITM...`) are generated.
6. Open the generated **Requested Item** (e.g., `RITM0010001`).
7. Inspect the **Approval** status:
   - If in `Requested`, locate the approval record under the **Approvers** related list.
   - Click the approver record or right-click the State and select **Approved**.
   - Save/Update the record.

---

### Step 7: Verify the Result
1. Re-open the Requested Item (`RITM...`).
2. Scroll down to the **Catalog Tasks** related list.
3. Verify the generated task:
   - **Number**: Generated Catalog Task (e.g., `TASK0010001`).
   - **Parent / Request Item**: Matches the test `RITM...`.
   - **Short Description**: `Configure Standard Laptop`
   - **Description**: Contains hardware team setup instructions.
   - **Assignment Group**: `Hardware`
   - **State**: `Open`
4. In Flow Designer, click **Executions** tab to view the execution context:
   - Context status: `Completed`
   - Execution trace shows Trigger evaluated to true, and Action `Create Catalog Task` executed successfully.
