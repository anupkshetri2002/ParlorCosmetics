const bookingsModel = require("../../models/bookings")

const deleteBookingController = async(req,res)=>{
    try{
        const bookingId = req.body.bookingId 
        console.log("bookingId",req.body.bookingId)
        
        const deleteProduct = await bookingsModel.deleteOne({ _id : bookingId})

        res.json({
            message : "Booking was Deleted",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteBookingController;