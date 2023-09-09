frappe.ui.form.on('Sales Dispatch', {
  

    onload: function(frm) {
        frm.fields_dict['sales_dispatch_details'].grid.get_field('loading_unloading_dispatch').get_query = function(doc, cdt, cdn) {
            let row = locals[cdt][cdn];
            return {
                filters: {
                    'transaction_type': 'OUT',
                    'docstatus': 1,
                    'exit_date': row.date
                }
            };
        };
    },


    
        date: function(frm) {
            console.log("Date function triggered for Sales Dispatch");
    
            frappe.call({
                method: "frappe.client.get_list",
                args: {
                    doctype: "Loading Unloading Dispatch",
                    filters: {
                        'transaction_type': 'OUT',
                        'docstatus': 1,
                        'exit_date': frm.doc.date
                    },
                    fields: ["name"],
                },
                callback: function(r) {
                    console.log(r); // Log the response for debugging
    
                    if (r.message) {
                        frm.clear_table("sales_dispatch_details");
    
                        r.message.forEach(function(entry) {
                            let child_row = frm.add_child("sales_dispatch_details");
                            child_row.loading_unloading_dispatch = entry.name;
                        });
                        frm.refresh_field("sales_dispatch_details");
                    }
                }
            });
        },

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
    },

    refresh: function(frm) {
        // Recalculate totals on form load or refresh
        calculate_totals(frm);
    }
});

frappe.ui.form.on('Sales Dispatch Details', {
    density: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_liters(row);
    },

    qty: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_liters(row);
    },

    liters: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_amount(row);
        calculate_totals(frm);
    },

    price: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        calculate_amount(row);
        calculate_totals(frm);
    },

    transportation_price: function(frm, cdt, cdn) {
        calculate_totals(frm);
    },

    rows_added: function(frm) {
        calculate_totals(frm);
    },

    rows_deleted: function(frm) {
        calculate_totals(frm);
    }
});

function calculate_liters(row) {
    if(row.qty && row.density) {
        let liters = row.qty / row.density;
        frappe.model.set_value(row.doctype, row.name, 'liters', liters);
    }
}

function calculate_amount(row) {
    if(row.liters && row.price) {
        let amount = row.liters * row.price;
        frappe.model.set_value(row.doctype, row.name, 'amount', amount);
    }
}



function calculate_totals(frm) {
    let total_amount = 0;
    let total_qty = 0;
    let total_transportation_cost = 0;

    $.each(frm.doc.sales_dispatch_details || [], function(i, row) {
        if(row.amount) {
            total_amount += row.amount;
        }
        if(row.liters) {
            total_qty += row.liters;
        }
        if(row.transportation_price) {
            total_transportation_cost += row.transportation_price;
        }
    });

    frm.set_value('total_amount_for_sold_product', total_amount);
    frm.set_value('total_qty', total_qty);
    frm.set_value('transportation_cost', total_transportation_cost);
}
