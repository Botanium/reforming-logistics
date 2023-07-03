// Copyright (c) 2023, botan.b.abdullah@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Loading Unloading Dispatch', {
    truck_weight(frm) {
        calculate_product_net_weight(frm);
    },
    total_weight_of_truck_and_product(frm) {
        calculate_product_net_weight(frm);
    }
});

function calculate_product_net_weight(frm) {
    const truck_weight = frm.doc.truck_weight || 0;
    const total_weight_of_truck_and_product = frm.doc.total_weight_of_truck_and_product || 0;
    
    const product_net_weight = total_weight_of_truck_and_product - truck_weight;
    
    frm.set_value('product_net_weight', product_net_weight);
    frm.refresh_field('product_net_weight');
}
