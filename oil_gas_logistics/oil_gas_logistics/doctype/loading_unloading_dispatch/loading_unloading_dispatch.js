// Define constants
const IN_TRANSACTION_TYPE = 'IN';

// Function to calculate net product weight
function calculate_product_net_weight(frm) {
    const truck_weight = parseFloat(frm.doc.truck_weight) || 0;
    const total_weight = parseFloat(frm.doc.total_weight_of_truck_and_product) || 0;
    const product_net_weight = total_weight - truck_weight;

    frm.set_value('product_net_weight', product_net_weight);
    frm.refresh_field('product_net_weight');
}

// Function to calculate the difference in weight
function calculate_difference_in_weight(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const kirkuk_net_weight = parseFloat(frm.doc.kirkuk_net_weight) || 0;
    const difference_in_weight = product_net_weight - kirkuk_net_weight;

    frm.set_value('difference_in_weight', difference_in_weight);
    frm.refresh_field('difference_in_weight');
}

// Function to calculate net weight in tonnes
function calculate_net_weight_in_tonne(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const net_weight_in_tonne = product_net_weight / 1000;

    frm.set_value('net_weight_in_tonne', net_weight_in_tonne);
    frm.refresh_field('net_weight_in_tonne');
}

// Function to calculate destination weight in tonnes
function calculate_destination_weight_in_tonne(frm) {
    const kirkuk_net_weight = parseFloat(frm.doc.kirkuk_net_weight) || 0;
    const destination_weight_in_tonne = kirkuk_net_weight / 1000;

    frm.set_value('destination_weight_in_tonne', destination_weight_in_tonne);
    frm.refresh_field('destination_weight_in_tonne');
}

// Function to calculate destination weight in meters
function calculate_destination_weight_in_meters(frm) {
    const kirkuk_net_weight = parseFloat(frm.doc.kirkuk_net_weight) || 0;
    const kirkuk_standard_density = parseFloat(frm.doc.kirkuk_standard_density) || 0;
    const destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density;

    frm.set_value('destination_weight_in_meters', destination_weight_in_meters);
    frm.refresh_field('destination_weight_in_meters');
}

// // Function to calculate weight in meters
// function calculate_weight_in_meters(frm) {
//     const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
//     const suli_standard_density = parseFloat(frm.doc.suli_standard_density) || 0;
//     const weight_in_meters = (product_net_weight / 1000) / suli_standard_density;

//     frm.set_value('weight_in_meters', weight_in_meters);
//     frm.refresh_field('weight_in_meters');
// }

// // Function to calculate normal weight in meters
// function calculate_normal_weight_in_meters(frm) {
//     const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
//     const density = parseFloat(frm.doc.density) || 0;
//     const normal_weight_in_meters = (product_net_weight / 1000) / density;

//     frm.set_value('normal_weight_in_meters', normal_weight_in_meters);
//     frm.refresh_field('normal_weight_in_meters');
// }

// Function to calculate weight in meters
function calculate_weight_in_meters(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const suli_standard_density = parseFloat(frm.doc.suli_standard_density) || 0;
    const weight_in_meters = (product_net_weight / 1000) / suli_standard_density;

    frm.set_value('weight_in_meters', weight_in_meters);
    frm.refresh_field('weight_in_meters');
}

// Function to calculate normal weight in meters
function calculate_normal_weight_in_meters(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const density = parseFloat(frm.doc.density) || 0;
    const normal_weight_in_meters = (product_net_weight / 1000) / density;

    frm.set_value('normal_weight_in_meters', normal_weight_in_meters);
    frm.refresh_field('normal_weight_in_meters');
}


// Function to toggle Kirkuk detail section visibility
function toggle_kirkuk_detail_section(frm) {
    const transactionType = frm.doc.transaction_type;

    if (transactionType === IN_TRANSACTION_TYPE) {
        cur_frm.toggle_display('kirkuk_detail_section_section', true);
    } else {
        cur_frm.toggle_display('kirkuk_detail_section_section', false);
    }
}

// Event handlers for the Loading Unloading Dispatch form
frappe.ui.form.on('Loading Unloading Dispatch', {
    truck_weight: function(frm) {
        calculate_product_net_weight(frm);
    },
    total_weight_of_truck_and_product: function(frm) {
        calculate_product_net_weight(frm);
        calculate_difference_in_weight(frm);
        calculate_normal_weight_in_meters(frm);
    },
    kirkuk_net_weight: function(frm) {
        calculate_destination_weight_in_tonne(frm);
        calculate_difference_in_weight(frm);
        calculate_normal_weight_in_meters(frm);
    },
    kirkuk_standard_density: function(frm) {
        calculate_destination_weight_in_meters(frm);
        calculate_difference_in_weight(frm);
        calculate_normal_weight_in_meters(frm);
    },
    product_net_weight: function(frm) {
        calculate_net_weight_in_tonne(frm);
        calculate_weight_in_meters(frm);
        calculate_normal_weight_in_meters(frm);
        calculate_difference_in_weight(frm);
    },
    weight_in_meters: function(frm){
        calculate_weight_in_meters(frm); 
        calculate_difference_in_weight(frm); 
        calculate_normal_weight_in_meters(frm);  
    },
    standard_weight_in_meters: function(frm) {
        calculate_normal_weight_in_meters(frm);
        calculate_difference_in_weight(frm);
    },
    transaction_type: function(frm) {
        toggle_kirkuk_detail_section(frm);
    },
    refresh: function(frm) {
        // Call the required functions here to update visibility or other fields
        calculate_destination_weight_in_meters(frm);
        toggle_kirkuk_detail_section(frm);
        calculate_difference_in_weight(frm); // Calculate the difference whenever the form is refreshed
        calculate_normal_weight_in_meters(frm);
    }
});




// frappe.ui.form.on('Loading Unloading Dispatch', {
//     truck_weight: function(frm) {
//         calculate_product_net_weight(frm);
//     },
//     total_weight_of_truck_and_product: function(frm) {
//         calculate_product_net_weight(frm);
//         calculate_difference_in_weight(frm);
//         calculate_normal_weight_in_meters(frm);
//     },
//     kirkuk_net_weight: function(frm) {
//         calculate_destination_weight_in_tonne(frm);
//         calculate_difference_in_weight(frm);
//         calculate_normal_weight_in_meters(frm);
//     },
//     kirkuk_standard_density: function(frm) {
//         calculate_destination_weight_in_meters(frm);
//         calculate_difference_in_weight(frm);
//         calculate_normal_weight_in_meters(frm);
//     },
//     product_net_weight: function(frm) {
//         calculate_net_weight_in_tonne(frm);
//         calculate_weight_in_meters(frm);
//         calculate_normal_weight_in_meters(frm);
//         calculate_difference_in_weight(frm);
//     },
//     weight_in_meters: function(frm){
//         calculate_weight_in_meters(frm); 
//         calculate_difference_in_weight(frm); 
//         calculate_normal_weight_in_meters(from);  
//     },
//     standard_weight_in_meters: function(frm) {
//         calculate_normal_weight_in_meters(frm);
//         calculate_difference_in_weight(frm);
//     },
//     transaction_type: function(frm) {
//         toggle_kirkuk_detail_section(frm);

//     },
//     refresh: function(frm) {
//         // Call the required functions here to update visibility or other fields
//         calculate_destination_weight_in_meters(frm);
//         toggle_kirkuk_detail_section(frm);
//         calculate_difference_in_weight(frm); // Calculate the difference whenever the form is refreshed
//         calculate_normal_weight_in_meters(frm);
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

// function toggle_kirkuk_detail_section(frm) {
//     const transactionType = frm.doc.transaction_type;

//     if (transactionType === 'IN') {
//         cur_frm.toggle_display('kirkuk_detail_section_section', true);
//     } else {
//         cur_frm.toggle_display('kirkuk_detail_section_section', false);
//     }
// }
