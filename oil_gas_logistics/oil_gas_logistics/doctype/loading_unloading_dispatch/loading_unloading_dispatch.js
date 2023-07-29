


// frappe.ui.form.on('Loading Unloading Dispatch', {
//     truck_weight: function(frm) {
//         calculate_product_net_weight(frm);
//     },
//     total_weight_of_truck_and_product: function(frm) {
//         calculate_product_net_weight(frm);
//     },
//     kirkuk_net_weight: function(frm) {
//         calculate_difference_in_weight(frm);
//         calculate_destination_weight_in_tonne(frm);    
//     },

//     kirkuk_standard_density: function(frm) {
//         calculate_destination_weight_in_meters(frm);
//     },

//     product_net_weight: function(frm) {
//         calculate_net_weight_in_tonne(frm);
//     },

//     weight_in_meters: function(frm){
//         calculate_weight_in_meters(frm);    
//     },

//     standard_weight_in_meters: function(frm) {
//         calculate_normal_weight_in_meters(frm);
//     },

//     transaction_type: function(frm) {
//         toggle_difference_in_weight_visibility(frm);
//     }
// });

// function calculate_product_net_weight(frm) {
//     const truck_weight = frm.doc.truck_weight || 0;
//     const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
//     const product_net_weight = total_weight_of_truck_and_product - truck_weight;

//     frm.set_value('product_net_weight', product_net_weight);
//     frm.refresh_field('product_net_weight');
// }

// function calculate_difference_in_weight(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;

//     const difference_in_weight = product_net_weight - kirkuk_net_weight;

//     frm.set_value('difference_in_weight', difference_in_weight);
//     frm.refresh_field('difference_in_weight');
// }

// function calculate_net_weight_in_tonne(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const net_weight_in_tonne = product_net_weight / 1000;
//     frm.set_value('net_weight_in_tonne', net_weight_in_tonne);
//     frm.refresh_field('net_weight_in_tonne');
// }

// function calculate_destination_weight_in_tonne(frm) {
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
//     const destination_weight_in_tonne = kirkuk_net_weight / 1000;
//     frm.set_value('destination_weight_in_tonne', destination_weight_in_tonne);
//     frm.refresh_field('destination_weight_in_tonne');
// }

// function calculate_destination_weight_in_meters(frm) {
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
//     const kirkuk_standard_density = frm.doc.kirkuk_standard_density || 0;
    
//     const destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density;
    
//     frm.set_value('destination_weight_in_meters', destination_weight_in_meters);
//     frm.refresh_field('destination_weight_in_meters');
// }

// function calculate_weight_in_meters(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const suli_standard_density = frm.doc.suli_standard_density || 0;
    
//     const weight_in_meters = (product_net_weight / 1000) / suli_standard_density;
    
//     frm.set_value('weight_in_meters', weight_in_meters);
//     frm.refresh_field('weight_in_meters');
// }

// function calculate_normal_weight_in_meters(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const density = frm.doc.density || 0;
    
//     const normal_weight_in_meters = (product_net_weight / 1000) / density;
    
//     frm.set_value('normal_weight_in_meters', normal_weight_in_meters);
//     frm.refresh_field('normal_weight_in_meters');
// }

// function toggle_difference_in_weight_visibility(frm) {
//     const transactionType = frm.doc.transaction_type;

//     if (transactionType === 'IN') {
//         cur_frm.toggle_display('difference_in_weight', true);
//         cur_frm.toggle_display('kirkuk_net_weight', true);
//         cur_frm.toggle_display('cmr', true);
//     } else {
//         cur_frm.toggle_display('difference_in_weight', false);
//         cur_frm.toggle_display('kirkuk_net_weight', false);
//         cur_frm.toggle_display('cmr', false);
//         frm.set_value('difference_in_weight', null);
//         frm.set_value('kirkuk_net_weight', null);
//         frm.set_value('cmr', null);
//     }
// }



// AFTER THE LAST ERROR


// frappe.ui.form.on('Loading Unloading Dispatch', {
//     truck_weight: function(frm) {
//         calculate_product_net_weight(frm);
//     },
//     total_weight_of_truck_and_product: function(frm) {
//         calculate_product_net_weight(frm);
//     },
//     kirkuk_net_weight: function(frm) {
//         calculate_difference_in_weight(frm);
//         calculate_destination_weight_in_tonne(frm);
//     },
//     kirkuk_standard_density: function(frm) {
//         calculate_destination_weight_in_meters(frm);
//     },
//     product_net_weight: function(frm) {
//         calculate_net_weight_in_tonne(frm);
//         calculate_difference_in_weight(frm); // Recalculate difference_in_weight
//         calculate_weight_in_meters(frm);
//         calculate_normal_weight_in_meters(frm);
//     },
//     weight_in_meters: function(frm) {
//         calculate_weight_in_meters(frm); // Recalculate weight_in_meters
//     },
//     standard_weight_in_meters: function(frm) {
//         calculate_normal_weight_in_meters(frm); // Recalculate normal_weight_in_meters
//     },
//     transaction_type: function(frm) {
//         toggle_difference_in_weight_visibility(frm);
//     }
// });

// function calculate_product_net_weight(frm) {
//     const truck_weight = frm.doc.truck_weight || 0;
//     const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
//     const product_net_weight = total_weight_of_truck_and_product - truck_weight;

//     frm.set_value('product_net_weight', product_net_weight);
//     frm.refresh_field('product_net_weight');
// }

// function calculate_difference_in_weight(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;

//     const difference_in_weight = product_net_weight - kirkuk_net_weight;

//     frm.set_value('difference_in_weight', difference_in_weight);
//     frm.refresh_field('difference_in_weight');
// }

// function calculate_net_weight_in_tonne(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const net_weight_in_tonne = product_net_weight / 1000;
//     frm.set_value('net_weight_in_tonne', net_weight_in_tonne);
//     frm.refresh_field('net_weight_in_tonne');
// }

// function calculate_destination_weight_in_tonne(frm) {
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
//     const destination_weight_in_tonne = kirkuk_net_weight / 1000;
//     frm.set_value('destination_weight_in_tonne', destination_weight_in_tonne);
//     frm.refresh_field('destination_weight_in_tonne');
// }

// function calculate_destination_weight_in_meters(frm) {
//     const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
//     const kirkuk_standard_density = frm.doc.kirkuk_standard_density || 0;
    
//     const destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density;
    
//     frm.set_value('destination_weight_in_meters', destination_weight_in_meters);
//     frm.refresh_field('destination_weight_in_meters');
// }

// function calculate_weight_in_meters(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const suli_standard_density = frm.doc.suli_standard_density || 0;
    
//     const weight_in_meters = (product_net_weight / 1000) / suli_standard_density;
    
//     frm.set_value('weight_in_meters', weight_in_meters);
//     frm.refresh_field('weight_in_meters');
// }

// function calculate_normal_weight_in_meters(frm) {
//     const product_net_weight = frm.doc.product_net_weight || 0;
//     const density = frm.doc.density || 0;
    
//     const normal_weight_in_meters = (product_net_weight / 1000) / density;
    
//     frm.set_value('normal_weight_in_meters', normal_weight_in_meters);
//     frm.refresh_field('normal_weight_in_meters');
// }

// function toggle_difference_in_weight_visibility(frm) {
//     const transactionType = frm.doc.transaction_type;

//     if (transactionType === 'IN') {
//         cur_frm.toggle_display('difference_in_weight', true);
//         cur_frm.toggle_display('kirkuk_net_weight', true);
//         cur_frm.toggle_display('cmr', true);
//     } else {
//         cur_frm.toggle_display('difference_in_weight', false);
//         cur_frm.toggle_display('kirkuk_net_weight', false);
//         cur_frm.toggle_display('cmr', false);
//         // Leave the difference_in_weight as it is
//     }
// }



frappe.ui.form.on('Loading Unloading Dispatch', {
    truck_weight: function(frm) {
        calculate_product_net_weight(frm);
    },
    total_weight_of_truck_and_product: function(frm) {
        calculate_product_net_weight(frm);
    },
    kirkuk_net_weight: function(frm) {
        calculate_difference_in_weight(frm);
        calculate_destination_weight_in_tonne(frm);
    },

    kirkuk_standard_density: function(frm) {
        calculate_destination_weight_in_meters(frm);
    },

    product_net_weight: function(frm) {
        calculate_net_weight_in_tonne(frm);
        calculate_weight_in_meters(frm);
        calculate_normal_weight_in_meters(frm);
    },

    weight_in_meters: function(frm){
        calculate_weight_in_meters(frm);    
    },

    standard_weight_in_meters: function(frm) {
        calculate_normal_weight_in_meters(frm);
    },

    transaction_type: function(frm) {
        toggle_difference_in_weight_visibility(frm);
    },

    refresh: function(frm) {
        // Call the required functions here to update visibility or other fields
        toggle_difference_in_weight_visibility(frm);
        calculate_destination_weight_in_meters(frm);
    }
});

function calculate_product_net_weight(frm) {
    const truck_weight = frm.doc.truck_weight || 0;
    const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
    const product_net_weight = total_weight_of_truck_and_product - truck_weight;

    frm.set_value('product_net_weight', product_net_weight);
    frm.refresh_field('product_net_weight');
}

function calculate_difference_in_weight(frm) {
    const product_net_weight = frm.doc.product_net_weight || 0;
    const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;

    const difference_in_weight = product_net_weight - kirkuk_net_weight;

    frm.set_value('difference_in_weight', difference_in_weight);
    frm.refresh_field('difference_in_weight');
}

function calculate_net_weight_in_tonne(frm) {
    const product_net_weight = frm.doc.product_net_weight || 0;
    const net_weight_in_tonne = product_net_weight / 1000;
    frm.set_value('net_weight_in_tonne', net_weight_in_tonne);
    frm.refresh_field('net_weight_in_tonne');
}

function calculate_destination_weight_in_tonne(frm) {
    const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
    const destination_weight_in_tonne = kirkuk_net_weight / 1000;
    frm.set_value('destination_weight_in_tonne', destination_weight_in_tonne);
    frm.refresh_field('destination_weight_in_tonne');
}

function calculate_destination_weight_in_meters(frm) {
    const kirkuk_net_weight = frm.doc.kirkuk_net_weight || 0;
    const kirkuk_standard_density = frm.doc.kirkuk_standard_density || 0;
    
    const destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density;
    
    frm.set_value('destination_weight_in_meters', destination_weight_in_meters);
    frm.refresh_field('destination_weight_in_meters');
}

function calculate_weight_in_meters(frm) {
    const product_net_weight = frm.doc.product_net_weight || 0;
    const suli_standard_density = frm.doc.suli_standard_density || 0;
    
    const weight_in_meters = (product_net_weight / 1000) / suli_standard_density;
    
    frm.set_value('weight_in_meters', weight_in_meters);
    frm.refresh_field('weight_in_meters');
}

function calculate_normal_weight_in_meters(frm) {
    const product_net_weight = frm.doc.product_net_weight || 0;
    const density = frm.doc.density || 0;
    
    const normal_weight_in_meters = (product_net_weight / 1000) / density;
    
    frm.set_value('normal_weight_in_meters', normal_weight_in_meters);
    frm.refresh_field('normal_weight_in_meters');
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
