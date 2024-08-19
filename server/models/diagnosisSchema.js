import mongoose from "mongoose"

const diagnosisSchema=new mongoose.Schema({
   email:{
    type:String
   },
   diagnosis:{
    type:String
   },
   selectedOption: {
    type: String,
    required: false // Optional if not always needed
  },
   timeStamps:{
    type:Date
   }
})
// module.exports=mongoose.model("diagnosisSchema",diagnosisSchema)
// export default diagnosisSchemaconst Consultation = mongoose.model('Consultation', consultationSchema);
const diagnosis = mongoose.model('diagnosisSchema', diagnosisSchema);
export default diagnosis