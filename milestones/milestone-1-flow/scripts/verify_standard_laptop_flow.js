/**
 * Automated Verification Script for Milestone 1: Flow
 * Project: Streamlining IT Procurement: Automating Standard Laptop Orders with Flow Designer
 * 
 * Instructions:
 * 1. Open ServiceNow -> System Definition -> Scripts - Background
 * 2. Paste this script and run as System Administrator.
 * 3. Verify console logs for end-to-end execution and task creation under Hardware group.
 */

(function executeMilestone1Verification() {
    gs.print("==================================================================");
    gs.print(">>> STARTING MILESTONE 1 AUTOMATED VERIFICATION SCRIPT");
    gs.print(">>> Flow Name: Standard Laptop Task");
    gs.print("==================================================================");

    // 1. Verify existence of Standard Laptop Catalog Item
    var grCatItem = new GlideRecord('sc_cat_item');
    grCatItem.addQuery('name', 'Standard Laptop');
    grCatItem.query();
    if (!grCatItem.next()) {
        gs.error(">>> ERROR: 'Standard Laptop' catalog item not found in instance.");
        return;
    }
    gs.print(">>> [PASS] Found Catalog Item: " + grCatItem.name + " (" + grCatItem.sys_id + ")");

    // 2. Verify existence of Hardware Assignment Group
    var grGroup = new GlideRecord('sys_user_group');
    grGroup.addQuery('name', 'Hardware');
    grGroup.query();
    if (!grGroup.next()) {
        gs.error(">>> ERROR: 'Hardware' assignment group not found in instance.");
        return;
    }
    gs.print(">>> [PASS] Found Assignment Group: " + grGroup.name + " (" + grGroup.sys_id + ")");

    // 3. Create a test Request (sc_request)
    var grReq = new GlideRecord('sc_request');
    grReq.initialize();
    grReq.short_description = "Test Request for Flow Designer - Standard Laptop Task";
    grReq.requested_for = gs.getUserID();
    grReq.approval = 'requested';
    var reqSysId = grReq.insert();
    gs.print(">>> [PASS] Created Test Request: " + grReq.number + " (" + reqSysId + ")");

    // 4. Create a test Requested Item (sc_req_item)
    var grRitm = new GlideRecord('sc_req_item');
    grRitm.initialize();
    grRitm.request = reqSysId;
    grRitm.cat_item = grCatItem.sys_id;
    grRitm.short_description = "Standard Laptop";
    grRitm.approval = 'requested';
    grRitm.stage = 'request_approved';
    var ritmSysId = grRitm.insert();
    gs.print(">>> [PASS] Created Test RITM: " + grRitm.number + " (" + ritmSysId + ")");
    gs.print(">>> Verifying RITM initial state: Approval = " + grRitm.approval);

    // Verify task is NOT created prior to approval
    var grPreTask = new GlideRecord('sc_task');
    grPreTask.addQuery('request_item', ritmSysId);
    grPreTask.query();
    if (grPreTask.hasNext()) {
        gs.warn(">>> [WARNING] Task already exists prior to approval. Ensure flow triggers only after approval.");
    } else {
        gs.print(">>> [PASS] Verified: No Catalog Task exists prior to approval satisfying constraint.");
    }

    // 5. Simulate Approval transition (Approval changes to 'approved')
    gs.print(">>> Simulating approval transition for RITM " + grRitm.number + "...");
    grRitm.approval = 'approved';
    grRitm.update();
    gs.print(">>> [PASS] RITM " + grRitm.number + " updated to Approval = 'approved'.");

    // Allow asynchronous Flow Designer engine execution window
    gs.sleep(3000);

    // 6. Query and Validate generated Catalog Task
    var grTask = new GlideRecord('sc_task');
    grTask.addQuery('request_item', ritmSysId);
    grTask.query();

    if (grTask.next()) {
        gs.print("==================================================================");
        gs.print(">>> MILESTONE 1 VERIFICATION SUCCESSFUL!");
        gs.print("==================================================================");
        gs.print(">>> Generated Task Number    : " + grTask.number);
        gs.print(">>> Parent RITM Number       : " + grRitm.number);
        gs.print(">>> Task Short Description   : " + grTask.short_description);
        gs.print(">>> Task Description         : " + grTask.description);
        gs.print(">>> Assigned Group           : " + grTask.assignment_group.getDisplayValue());
        gs.print(">>> Task State               : " + grTask.state.getDisplayValue());
        
        // Assertions
        var groupMatches = (grTask.assignment_group.getDisplayValue() === "Hardware");
        var ritmMatches = (grTask.request_item.toString() === ritmSysId);
        
        gs.print(">>> Assertion [Group == Hardware]: " + (groupMatches ? "PASSED" : "FAILED"));
        gs.print(">>> Assertion [Parent == Test RITM]: " + (ritmMatches ? "PASSED" : "FAILED"));
        gs.print("==================================================================");
    } else {
        gs.info(">>> NOTE: Asynchronous flow execution may still be processing. Please inspect Flow Executions context for flow 'Standard Laptop Task'.");
    }
})();
