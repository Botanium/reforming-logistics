frappe.ui.form.on('Sales Dispatch', {
    onload: function(frm) {
        frm.fields_dict['sales_dispatch_details'].grid.get_field('loading_unloading_dispatch').get_query = function(doc, cdt, cdn) {
            return {
                filters: {
                    'transaction_type': 'OUT',
                    'docstatus': 1
                }
            };
        };
    },

    //... rest of your code
    density_type: function(frm) {
        // Loop through each row in the "Sales Dispatch Details" table
        $.each(frm.doc.sales_dispatch_details || [], function(i, row) {
            if(frm.doc.density_type == "Normal") {
                // Fetch the 'density' from the "Loading Unloading Dispatch" and set it in the 'Sales Dispatch Details'
                frappe.db.get_value('Loading Unloading Dispatch', row.loading_unloading_dispatch, 'density', (r) => {
                    frappe.model.set_value(row.doctype, row.name, 'density', r.density);
                    calculate_liters(row);
                });
            } else if(frm.doc.density_type == "Standard") {
                // Fetch the 'suli_standard_density' from the "Loading Unloading Dispatch" and set it in the 'Sales Dispatch Details'
                frappe.db.get_value('Loading Unloading Dispatch', row.loading_unloading_dispatch, 'suli_standard_density', (r) => {
                    frappe.model.set_value(row.doctype, row.name, 'density', r.suli_standard_density);
                    calculate_liters(row);
                });
            }
        });
    }
});
;


    

frappe.ui.form.on('Sales Dispatch Details', {
    density: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_liters(row);
    },

    qty: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_liters(row);
    }
});

function calculate_liters(row) {
    if(row.qty && row.density) {
        let liters = row.qty / row.density;
        frappe.model.set_value(row.doctype, row.name, 'liters', liters);
    }
}





//     qty: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     density: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     price: function(frm, cdt, cdn) {
//         calculate_quantity_and_amount(frm, cdt, cdn);
//     },
//     sales_dispatch_details_remove: function(frm, cdt, cdn) {
//         calculate_total(frm);
//     }
// });

// function calculate_quantity_and_amount(frm, cdt, cdn) {
//     var row = locals[cdt][cdn];
//     row.qty_in_liters = (row.qty * 1000) / row.density;
//     row.amount = row.qty_in_liters * row.price;

//     refresh_field("qty_in_liters", cdn, "sales_dispatch_details");
//     refresh_field("amount", cdn, "sales_dispatch_details");

//     calculate_total(frm);
// }

// function calculate_total(frm) {
    
//     let total_qty = 0;
//     let total_sales_price = 0;

//     frm.doc.sales_dispatch_details.forEach((d) => {
        
//         total_qty += parseFloat(d.quantity_in_liters);
//         total_sales_price += parseFloat(d.amount);
//     });
    
//     frm.set_value('total_qty', total_qty);
//     //frm.set_value('total_sales_price',total_sales_price);
    
//     frm.refresh_field('total_qty');
//     //frm.refresh_field('total_sales_price');
// }
