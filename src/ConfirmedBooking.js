export default function ConfirmedBooking ({ bookingData }) {
  let date = bookingData.date

console.log(date)
  return (
    <>
      <h1>hello</h1>
      <h1>guests Count :{bookingData.guests} </h1>
      {/* <h1>date : {month} </h1> */}
      <h1>occasion :{bookingData.occasion} </h1>
      <h1>time :{bookingData.time} </h1>
    </>
  )
}
