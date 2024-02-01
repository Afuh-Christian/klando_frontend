import StepperBoodRideComponent from "../Components/StepperBoodRideComponent"

function BookRide() {
  return (
    <div className="h-full grid grid-rows-2">
        <div className="img-color grid  booking-image">
            <div className="font-bold text-6xl text-white mt-auto m-10">Book a ride</div>
        </div>
        <div className="m-8">
         <StepperBoodRideComponent/>
        </div>

    </div>
  )
}

export default BookRide