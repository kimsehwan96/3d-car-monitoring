import React from "react"
import {randInt} from "three/src/math/MathUtils";

let speed = 0;
let rpm = 0;
let tripDistance = 0;
let oil = 0;

// const updateValues = () => {
//     setInterval(() => {
//         speed = Math.floor(Math.random() * 120);
//         rpm = Math.floor(Math.random() * 7000);
//         tripDistance = tripDistance += 1
//         oil = 40
//     }, 1000)
// }

const HardCoding = () => {
    setInterval(() => {
        speed = Math.floor(Math.random() * 120);
        rpm = Math.floor(Math.random() * 7000);
        tripDistance = tripDistance += 1
        oil = 40
    }, 1000);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: "absolute",
          width: '120px',
          height: '40px',
          background: '#151515',
          left: '10em',
        }}
      >
        <div
          style={{
            color: 'whitesmoke',
            textAlign: "center",
            borderBottom: '1px solid #fff',
          }}
        >rpm</div>
        <div
          style={{
            color: 'whitesmoke',
            textAlign: 'center'
          }}
        >
            {rpm} rpm
            {/*TODO: attach mqtt data with this area*/}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: "absolute",
          width: '120px',
          height: '40px',
          background: '#151515',
          left: '-17em',
        }}
      >
        <div
          style={{
            color: 'whitesmoke',
            textAlign: "center",
            borderBottom: '1px solid #fff',
          }}
        >Speed</div>
        <div
          style={{
            color: 'whitesmoke',
            textAlign: 'center'
          }}
        >
            {speed} Km/h
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: "absolute",
          width: '120px',
          height: '40px',
          background: '#151515',
          left: '-15em',
          top: '-16em'
        }}
      >
        <div
          style={{
            color: 'whitesmoke',
            textAlign: "center",
            borderBottom: '1px solid #fff',
          }}
        >Oil Level</div>
        <div
          style={{
            color: 'whitesmoke',
            textAlign: 'center'
          }}
        >
            {oil}%
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: "absolute",
          width: '120px',
          height: '40px',
          background: '#151515',
          left: '6.5em',
          top: '-16em',
        }}
      >
        <div
          style={{
            color: 'whitesmoke',
            textAlign: "center",
            borderBottom: '1px solid #fff',
          }}
        >Trip distance</div>
        <div
          style={{
            color: 'whitesmoke',
            textAlign: 'center'
          }}
        >
            {tripDistance} km
        </div>
      </div>
    </>
  )
}

export default HardCoding