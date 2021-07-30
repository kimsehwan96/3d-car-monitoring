import React from 'react'
import { Wrapper } from "./elements";

const MeterSvg = props => {
  const radius = 150
  const maskStrokeWidth = 10
  const indicatorStrokeWidth = 10
  const circumference = Math.round(2 * Math.PI * radius) + radius
  const semiCircumference = Math.round(circumference / 2) + radius

  const patch = semiCircumference / 3
  const filledOffset = Math.round((semiCircumference * props.offset) / 220)

  return (
    <Wrapper>
      <svg style={{
        width: '100%',
        height: '100%',
        transform: 'rotateX(200deg)'
      }}>
      {/* Meter Outline (Grey) */}
      <circle
        id="outline_curves"
        r={radius}
        cx="50%"
        cy="50%"
        stroke="#f6f6f6"
        strokeWidth={maskStrokeWidth}
        strokeDasharray={`${semiCircumference}, ${circumference}`}
        strokeDashoffset={filledOffset}
        fill="none"
      />

      {/*  Low Range Zone (Green) */}
      <circle
        id="low"
        r={radius}
        cx="50%"
        cy="50%"
        stroke="#6aee4f"
        strokeWidth={indicatorStrokeWidth}
        strokeDasharray={`${patch * 3}, ${circumference}`}
        fill="none"
      />

      {/*  Average Range Zone (Yellow) */}
      <circle
        id="avg"
        r={radius}
        cx="50%"
        cy="50%"
        stroke="#FDE47F"
        strokeWidth={indicatorStrokeWidth}
        strokeDasharray={`${patch * 2}, ${circumference}`}
        fill="none"
      />

      {/* High Range Zone (Red) */}
      <circle
        id="high"
        r={radius}
        cx="50%"
        cy="50%"
        stroke="#E04644"
        strokeWidth={indicatorStrokeWidth}
        strokeDasharray={`${patch}, ${circumference}`}
        fill="none"
      />

      {/* Mask */}
      <circle
        id="mask"
        r={radius}
        cx="50%"
        cy="50%"
        stroke="#f6f6f6"
        strokeWidth={maskStrokeWidth}
        strokeDasharray={`${semiCircumference}, ${circumference}`}
        strokeDashoffset={filledOffset}
        fill="none"
      />
    </svg>
    </Wrapper>
  )
}

export default MeterSvg