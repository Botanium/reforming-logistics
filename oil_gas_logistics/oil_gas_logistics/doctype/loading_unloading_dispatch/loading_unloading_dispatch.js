// Define constants
const IN_TRANSACTION_TYPE = 'IN';

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
// function calculate_destination_weight_in_meters(frm) {
//     const kirkuk_net_weight = parseFloat(frm.doc.kirkuk_net_weight) || 0;
//     const kirkuk_standard_density = parseFloat(frm.doc.kirkuk_standard_density) || 0;
//     const destination_weight_in_meters = (kirkuk_net_weight / 1000) / kirkuk_standard_density;

//     //frm.set_value('destination_weight_in_meters', destination_weight_in_meters);
//     //frm.refresh_field('destination_weight_in_meters');
// }



// Function to calculate weight in meters
function calculate_weight_in_meters(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const suli_standard_density = parseFloat(frm.doc.suli_standard_density) || 0;

    let weight_in_meters;
    if (suli_standard_density !== 0) {
        weight_in_meters = (product_net_weight / 1000) / suli_standard_density;
    } else {
        weight_in_meters = 0; // or null, or an error message
    }

    frm.set_value('weight_in_meters', weight_in_meters.toString());
    frm.refresh_field('weight_in_meters');
}


// Function to calculate normal weight in meters
function calculate_normal_weight_in_meters(frm) {
    const product_net_weight = parseFloat(frm.doc.product_net_weight) || 0;
    const density = parseFloat(frm.doc.density) || 0;
    const normal_weight_in_meters = (product_net_weight / 1000) / density;

    // Convert the result to a string before setting the value
    frm.set_value('normal_weight_in_meters', normal_weight_in_meters.toString());
    frm.refresh_field('normal_weight_in_meters');
}



// Function to toggle Kirkuk detail section visibility, field read-only status, and mandatory status
function toggle_kirkuk_detail_section(frm) {
    const transactionType = frm.doc.transaction_type;
    const fieldsToDisable = [
        'destination_cmr',
        'kirkuk_net_weight',
        'kirkuk_standard_density',
        'destination_weight_in_tonne',
        'destination_weight_in_meters',
        'difference_in_weight',
        'kirkuk_exit_date',
        'kirkuk_plom_number'
    ];

    // Toggle the display of the section
    cur_frm.toggle_display('kirkuk_detail_section_section', transactionType === IN_TRANSACTION_TYPE);

    // Set the read_only property for each field in the section
    fieldsToDisable.forEach(field => {
        frm.set_df_property(field, 'read_only', transactionType !== IN_TRANSACTION_TYPE);
    });

    // Make 'destination_cmr' and 'kirkuk_net_weight' mandatory if transactionType is "IN"
    frm.set_df_property('destination_cmr', 'reqd', transactionType === IN_TRANSACTION_TYPE);
    frm.set_df_property('kirkuk_net_weight', 'reqd', transactionType === IN_TRANSACTION_TYPE);
}




// Event handlers for the Loading Unloading Dispatch form
frappe.ui.form.on('Loading Unloading Dispatch', {
    // truck_weight: function(frm) {
    //     calculate_product_net_weight(frm);
    // },
    total_weight_of_truck_and_product: function(frm) {
        calculate_difference_in_weight(frm);
        calculate_normal_weight_in_meters(frm);
    },
    kirkuk_net_weight: function(frm) {
        calculate_destination_weight_in_tonne(frm);
        calculate_difference_in_weight(frm);
        calculate_normal_weight_in_meters(frm);
    },
    kirkuk_standard_density: function(frm) {
        //calculate_destination_weight_in_meters(frm);
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
        calculate_weight_in_meters(frm); 
    },
    transaction_type: function(frm) {
        toggle_kirkuk_detail_section(frm);
    },

    onload: function(frm) {
        display_attached_images(frm);
    },

    refresh: function(frm) {
        toggle_kirkuk_detail_section(frm);
        //display_attached_images(frm);
        // Call the required functions here to update visibility or other fields
        //calculate_destination_weight_in_meters(frm);
        //toggle_kirkuk_detail_section(frm);
        //calculate_difference_in_weight(frm); // Calculate the difference whenever the form is refreshed
    },

    after_save: function(frm) {
        display_attached_images(frm);
    },


}
);


