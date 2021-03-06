const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  PharmName: { type: String, required: true },
  PharmAddress: { type: String, required: false },
  PharmPhone: {type: String, required:false},
  PharmDrugNum: {type: String, required:true},
  PharmFillDate: {type: String, require: false},
  DocName: {type: String, required: true},
  PatientName: {type: String, required:true},
  DrugInstruct: {type: String, required: true},
  DrugName: {type: String, required: true},
  DrugRefill: {type: String, required:false},
  DrugUseByDate: {type: String, required:false},
  date: { type: Date, default: Date.now }
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;