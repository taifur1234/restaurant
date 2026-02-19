import React, { useState, useRef, useEffect } from "react";
import "./RestaurantBookTable.css";
import { Link } from "react-router-dom";

export default function Step1Booking() {

  const [step, setStep] = useState(1);

  const [date, setDate] = useState("");
  const [leadName, setLeadName] = useState("");
  const [guests, setGuests] = useState("2");
  const [type, setType] = useState("Lunch");
  const [loading, setLoading] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [showEndTime, setShowEndTime] = useState(false);

  const [selectedTable, setSelectedTable] = useState("");
  const [bookings, setBookings] = useState([]);

  const endRef = useRef(null);

  const times = [
    "12:00","12:15","12:30","12:45",
    "13:00","13:15","13:30","13:45",
    "14:00","14:15","14:30","14:45",
    "15:00","15:15","15:30","15:45",
    "16:00","16:15","16:30","16:45"
  ];

  const tables = ["T1","T2","T3","T4","T5","T6"];

  /* ---------- LOAD FROM LOCALSTORAGE ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("rbt_bookings");
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  /* ---------- SAVE TO LOCALSTORAGE ---------- */
  useEffect(() => {
    localStorage.setItem("rbt_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const toDate = (time) => new Date(`1970-01-01T${time}`);

  const isOverlapping = (start1, end1, start2, end2) => {
    return start1 < end2 && end1 > start2;
  };

  const isTableAvailable = (table, start, end) => {

    return !bookings.some((booking) => {

      if (booking.table !== table) return false;
      if (booking.date !== date) return false;

      const newStart = toDate(start);
      const newEnd = toDate(end);
      const bookedStart = toDate(booking.start);
      const bookedEnd = toDate(booking.end);

      return isOverlapping(newStart, newEnd, bookedStart, bookedEnd);
    });
  };

  const isStartDisabled = (time) => {

    if (!selectedTable || !date) return false;

    const start = toDate(time);

    return bookings.some((booking) => {

      if (booking.table !== selectedTable) return false;
      if (booking.date !== date) return false;

      const bookedStart = toDate(booking.start);
      const bookedEnd = toDate(booking.end);

      return start >= bookedStart && start < bookedEnd;
    });
  };

  const isEndDisabled = (endTime) => {

    if (!selectedTime) return false;

    const start = toDate(selectedTime);
    const end = toDate(endTime);

    return !isTableAvailable(selectedTable, selectedTime, endTime)
      || end <= start;
  };

  const handleCheck = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const generateEndTimes = (start) => {
    const [hour, minute] = start.split(":").map(Number);
    let startDate = new Date();
    startDate.setHours(hour, minute);

    let endTimes = [];

    for (let i = 30; i <= 180; i += 15) {
      let newTime = new Date(startDate.getTime() + i * 60000);
      let h = newTime.getHours().toString().padStart(2, "0");
      let m = newTime.getMinutes().toString().padStart(2, "0");
      endTimes.push(`${h}:${m}`);
    }

    return endTimes;
  };

  const handleStartSelect = (time) => {

    if (isStartDisabled(time)) return;

    setSelectedTime(time);
    setSelectedEndTime("");
    setShowEndTime(true);

    setTimeout(() => {
      endRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 200);
  };


  const handleCompleteBooking = () => {

  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1500);
};


  const handleReserve = () => {

    if (!selectedTable) {
      alert("Please select a table");
      return;
    }

    if (!selectedTime || !selectedEndTime) {
      alert("Please select start and end time");
      return;
    }

    if (!isTableAvailable(selectedTable, selectedTime, selectedEndTime)) {
      alert("This table is already booked for selected time!");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setBookings([
        ...bookings,
        {
          table: selectedTable,
          date,
          start: selectedTime,
          end: selectedEndTime
        }
      ]);

      setLoading(false);
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });

    }, 1200);
  };

  const endTimes = selectedTime ? generateEndTimes(selectedTime) : [];

  return (
    <div className="rbt1-wrapper">

        {step !== 4 && (
      <div className="rbt1-header">
        <h1>BOOK A TABLE</h1>
        <p>Enjoy a family friendly bite to eat</p>

        <div className="rbt1-steps">
          <span className={step === 1 ? "active" : ""}></span>
          <span className={step === 2 ? "active" : ""}></span>
          <span className={step === 3 ? "active" : ""}></span>
        </div>
      </div>
        )}

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <div className="rbt1-form">

            <div className="rbt1-field">
              <label>OCCASION</label>
              <select>
                <option>Casual Dining</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className="rbt1-field">
              <label>DATE</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="rbt1-field">
              <label>NO' GUESTS</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="rbt1-field">
              <label>BOOKING TYPE</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

          </div>

          <button className="rbt1-btn" onClick={handleCheck}>
            CHECK AVAILABILITY
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="rbt2-time-section">

          <h4 className="rbt2-subtitle">
            SELECT YOUR PREFERRED TIME
          </h4>

          <p className="rbt2-info">
            {type} on {date} for {guests} guests
          </p>

          <h3 className="rbt2-start">Select Table</h3>
          <div className="rbt2-time-grid">
            {tables.map((table) => (
              <button
                key={table}
                className={`rbt2-time-btn ${
                  selectedTable === table ? "rbt2-time-btn-active" : ""
                }`}
                onClick={() => setSelectedTable(table)}
              >
                {table}
              </button>
            ))}
          </div>

          <h3 className="rbt2-start">Start Time</h3>
          <div className="rbt2-time-grid">
            {times.map((time) => {
              const disabled = isStartDisabled(time);
              return (
                <button
                  key={time}
                  disabled={disabled}
                  className={`rbt2-time-btn ${
                    selectedTime === time ? "rbt2-time-btn-active" : ""
                  } ${disabled ? "rbt2-disabled" : ""}`}
                  onClick={() => handleStartSelect(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>

          {showEndTime && (
            <div className="rbt2-end-section" ref={endRef}>

              <h3 className="rbt2-start">End Time</h3>

              <div className="rbt2-time-grid">
                {endTimes.map((time) => {
                  const disabled = isEndDisabled(time);
                  return (
                    <button
                      key={time}
                      disabled={disabled}
                      className={`rbt2-time-btn ${
                        selectedEndTime === time ? "rbt2-time-btn-active" : ""
                      } ${disabled ? "rbt2-disabled" : ""}`}
                      onClick={() => setSelectedEndTime(time)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              <button
                className="rbt2-reserve-btn"
                onClick={handleReserve}
              >
                RESERVE SELECTED TIME
              </button>

            </div>
          )}

          <div className="rbt2-back">
            <button onClick={() => setStep(1)}>BACK</button>
          </div>

        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="rbt3-wrapper">

          <h4 className="rbt3-subtitle">
            COMPLETE YOUR RESERVATION
          </h4>

          <p className="rbt3-summary">
            {type} on {date} for {guests} guests at {selectedTime} - Table {selectedTable}
          </p>

          <div className="rbt3-form">
            <div className="rbt3-row">
              <input type="text" placeholder="FIRST NAME" required  onChange={(e)=>setLeadName(e.target.value)}/>
              <input type="text" placeholder="LAST NAME" required/>
            </div>

            <div className="rbt3-row">
              <input type="text" placeholder="PHONE NUMBER" required />
              <input type="email" placeholder="EMAIL ADDRESS" required/>
            </div>

            <textarea placeholder="Special Request."></textarea>

            <button 
             className="rbt3-complete-btn"
             onClick={handleCompleteBooking} >
             COMPLETE BOOKING
            </button>


            <div className="rbt3-back">
              <button onClick={() => setStep(2)}>BACK</button>
            </div>

          </div>

        </div>
      )}




      {/* STEP 4 - FINAL CONFIRMATION */}
{step === 4 && (
  <div className="rbt4-wrapper">

    <h1 className="rbt4-title">ALL DONE!</h1>

    <p className="rbt4-thankyou">
      THANK YOU {leadName}, RESERVATION CONFIRMED.
      <br />
      WE LOOK FORWARD TO HOSTING YOU.
    </p>

    <div className="rbt4-box">

      <h4 className="rbt4-res-title">YOUR RESERVATION</h4>

      <p><strong>Lead Name:</strong> {leadName}</p>

      <p><strong>Restaurant:</strong> Flavour Hub</p>

      <p>
        on <strong>{date}</strong> for{" "}
        <strong>{guests} guests</strong> at{" "}
        <strong>{selectedTime}</strong>
      </p>

      <p>
        <strong>Table Number:</strong> {selectedTable}
      </p>

    </div>

    <Link to='/menu'>
    <button className="rbt4-menu-btn">
      VIEW MENU
    </button>
    </Link>

  </div>
)}


      {loading && (
        <div className="rbt1-loader-overlay">
          <div className="rbt1-loader"></div>
        </div>
      )}

    </div>
  );
}
