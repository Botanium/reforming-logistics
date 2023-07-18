
//third version
// frappe.ui.form.on('Loading Unloading Dispatch', {
//     autoname: function(frm) {
//         if (frm.doc.transaction_type === 'IN') {
//             frm.doc.name = `IN-${frm.doc.wb_id}-${frm.doc.loading_location}`;
//         } else if (frm.doc.transaction_type === 'OUT') {
//             frm.doc.name = `OUT-${frm.doc.wb_id}-${frm.doc.unloading_location}`;
//         } else if (frm.doc.transaction_type === 'TRANSFER') {
//             frm.doc.name = `Transfer-${frm.doc.wb_id}-${frm.doc.loading_location}-${frm.doc.unloading_location}`;
//         } else {
//             frappe.msgprint('Invalid transaction type selected.');
//             throw new Error('Invalid transaction type selected.');
//         }
//     },

//     truck_weight: function(frm) {
//         calculate_product_net_weight(frm);
//     },

//     total_weight_of_truck_and_product: function(frm) {
//         calculate_product_net_weight(frm);
//     }
// });

// function calculate_product_net_weight(frm) {
//     const truck_weight = frm.doc.truck_weight || 0;
//     const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
//     const product_net_weight = total_weight_of_truck_and_product - truck_weight;
    
//     frm.set_value('product_net_weight', product_net_weight);
//     frm.refresh_field('product_net_weight');
// }

//second version
// frappe.ui.form.on('Loading Unloading Dispatch', {
//     truck_weight(frm) {
//         calculate_product_net_weight(frm);
//     },
//     total_weight_of_truck_and_product(frm) {
//         calculate_product_net_weight(frm);
//     },
//     transaction_type(frm) {
//         set_naming_series(frm);
//     }
// });

// function calculate_product_net_weight(frm) {
//     const truck_weight = frm.doc.truck_weight || 0;
//     const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
//     const product_net_weight = total_weight_of_truck_and_product - truck_weight;
    
//     frm.set_value('product_net_weight', product_net_weight);
//     frm.refresh_field('product_net_weight');
// }

// function set_naming_series(frm) {
//     console.log('set_naming_series called');
//     const transactionType = frm.doc.transaction_type;
//     const wbId = frm.doc.wb_id;
//     const loadingLocation = frm.doc.loading_location;
//     const unloadingLocation = frm.doc.unloading_location;

//     console.log('transactionType:', transactionType);
//     console.log('wbId:', wbId);
//     console.log('loadingLocation:', loadingLocation);
//     console.log('unloadingLocation:', unloadingLocation);

//     let namingSeries = "";

//     if (transactionType === "IN") {
//         namingSeries = `IN-${wbId}-${loadingLocation}`;
//     } else if (transactionType === "OUT") {
//         namingSeries = `OUT-${wbId}-${unloadingLocation}`;
//     } else if (transactionType === "TRANSFER") {
//         namingSeries = `Transfer-${wbId}-${loadingLocation}-${unloadingLocation}`;
//     } else {
//         frappe.msgprint('Invalid transaction type selected.');
//         return;
//     }

//     console.log('namingSeries:', namingSeries);

//     frm.doc.docname = namingSeries;
// }



//first version
// frappe.ui.form.on('Loading Unloading Dispatch', {
//     truck_weight(frm) {
//         calculate_product_net_weight(frm);
//     },
//     total_weight_of_truck_and_product(frm) {
//         calculate_product_net_weight(frm);
//     },
    
// });

// function calculate_product_net_weight(frm) {
//     const truck_weight = frm.doc.truck_weight || 0;
//     const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
//     const product_net_weight = total_weight_of_truck_and_product - truck_weight;
//     const difference_weight = kirkuk_total_net_weight - product_net_weight;
    
//     frm.set_value('product_net_weight', product_net_weight);
//     frm.set_value('difference_weight', difference_weight);
//     frm.refresh_field('product_net_weight');
//     frm.refresh_field('difference_weight', difference_weight);
// }


//final version with difference 
frappe.ui.form.on('Loading Unloading Dispatch', {
    truck_weight: function(frm) {
        calculate_product_net_weight(frm);
    },
    total_weight_of_truck_and_product: function(frm) {
        calculate_product_net_weight(frm);
    },
    kirkuk_net_weight: function(frm) {
        calculate_difference_in_weight(frm);
    },
    transaction_type: function(frm) {
        toggle_difference_in_weight_visibility(frm);
    }
});

function calculate_product_net_weight(frm) {
    const truck_weight = frm.doc.truck_weight || 0;
    const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
    const product_net_weight = total_weight_of_truck_and_product - truck_weight;

    frm.set_value('product_net_weight', product_net_weight);
}

function calculate_difference_in_weight(frm) {
    const product_net_weight = frm.doc.product_net_weight || 0;
    const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;

    const difference_in_weight = product_net_weight - kirkuk_net_weight;

    frm.set_value('difference_in_weight', difference_in_weight);
}

function toggle_difference_in_weight_visibility(frm) {
    const transactionType = frm.doc.transaction_type;

    if (transactionType === 'IN') {
        cur_frm.toggle_display('difference_in_weight', true);
        cur_frm.toggle_display('kirkuk_net_weight', true);
        cur_frm.toggle_display('cmr', true);
    } else {
        cur_frm.toggle_display('difference_in_weight', false);
        cur_frm.toggle_display('kirkuk_net_weight', false);
        cur_frm.toggle_display('cmr', false);
        frm.set_value('difference_in_weight', null);
        frm.set_value('kirkuk_net_weight', null);
        frm.set_value('cmr', null);
    }
}