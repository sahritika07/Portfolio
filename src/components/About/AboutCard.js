"use client"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AboutCard() {
  // Physics-based animation for the boxes
  const boxRefs = useRef([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isInitialized, setIsInitialized] = useState(false)

  // Initial positions matching the screenshot layout
  const getInitialPositions = () => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const cardWidth = 280
    const cardHeight = 280
    const spacing = 200 // Distance from center

    return [
      { x: centerX - spacing - cardWidth, y: centerY - spacing - cardHeight }, // top-left
      { x: centerX + spacing, y: centerY - spacing - cardHeight }, // top-right
      { x: centerX - spacing - cardWidth, y: centerY + spacing }, // bottom-left
      { x: centerX + spacing, y: centerY + spacing }, // bottom-right
    ]
  }

  // Very slow constant velocities for each box
  const velocities = useRef([
    { x: 0.1, y: 0.08 },
    { x: -0.08, y: 0.1 },
    { x: 0.08, y: -0.1 },
    { x: -0.1, y: -0.08 },
  ])

  const positions = useRef([])

  // Initialize positions after component mounts
  useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      positions.current = getInitialPositions()
      setIsInitialized(true)
    }
  }, [isInitialized])

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (isDragging !== null) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y

        // Boundary constraints
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        const boxWidth = 280
        const boxHeight = 280

        positions.current[isDragging] = {
          x: Math.max(0, Math.min(screenWidth - boxWidth, newX)),
          y: Math.max(0, Math.min(screenHeight - boxHeight, newY)),
        }
      }
    }

    const handleMouseUp = () => {
      setIsDragging(null)
      setDragOffset({ x: 0, y: 0 })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  // Handle mouse down on boxes
  const handleMouseDown = (index, e) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    setIsDragging(index)
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  useEffect(() => {
    if (!isInitialized) return

    const boxes = boxRefs.current

    if (boxes.length === 0) return

    // Set initial positions
    boxes.forEach((box, i) => {
      if (box && positions.current[i]) {
        box.style.left = `${positions.current[i].x}px`
        box.style.top = `${positions.current[i].y}px`
      }
    })

    const updatePositions = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      boxes.forEach((box, i) => {
        if (!box || !positions.current[i]) return

        // Skip physics for dragged box
        if (isDragging === i) {
          box.style.left = `${positions.current[i].x}px`
          box.style.top = `${positions.current[i].y}px`
          return
        }

        const boxRect = box.getBoundingClientRect()
        const boxWidth = boxRect.width
        const boxHeight = boxRect.height

        // Mouse attraction force
        const dx = mousePosition.x - (positions.current[i].x + boxWidth / 2)
        const dy = mousePosition.y - (positions.current[i].y + boxHeight / 2)
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply attraction force when mouse is close
        if (distance < 200 && distance > 0) {
          const force = 0.002
          velocities.current[i].x += (dx / distance) * force
          velocities.current[i].y += (dy / distance) * force
        }

        // Update position based on velocity (very slow movement)
        positions.current[i].x += velocities.current[i].x * 0.05
        positions.current[i].y += velocities.current[i].y * 0.05

        // Boundary collision detection (screen edges)
        if (positions.current[i].x < 0) {
          positions.current[i].x = 0
          velocities.current[i].x *= -1
        }
        if (positions.current[i].x > screenWidth - boxWidth) {
          positions.current[i].x = screenWidth - boxWidth
          velocities.current[i].x *= -1
        }
        if (positions.current[i].y < 0) {
          positions.current[i].y = 0
          velocities.current[i].y *= -1
        }
        if (positions.current[i].y > screenHeight - boxHeight) {
          positions.current[i].y = screenHeight - boxHeight
          velocities.current[i].y *= -1
        }

        // Box collision detection
        for (let j = 0; j < boxes.length; j++) {
          if (i !== j && boxes[j] && isDragging !== j && positions.current[j]) {
            const dx = positions.current[i].x - positions.current[j].x
            const dy = positions.current[i].y - positions.current[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = 300 // Approximate box size

            if (distance < minDistance) {
              // Very gentle collision response
              const angle = Math.atan2(dy, dx)
              const force = 0.005

              velocities.current[i].x += Math.cos(angle) * force
              velocities.current[i].y += Math.sin(angle) * force
              velocities.current[j].x -= Math.cos(angle) * force
              velocities.current[j].y -= Math.sin(angle) * force
            }
          }
        }

        // Apply friction to slow down over time
        velocities.current[i].x *= 0.99
        velocities.current[i].y *= 0.99

        // Apply the new position to the box
        box.style.left = `${positions.current[i].x}px`
        box.style.top = `${positions.current[i].y}px`
      })

      requestAnimationFrame(updatePositions)
    }

    const animationFrame = requestAnimationFrame(updatePositions)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [mousePosition, isDragging, isInitialized])

  const activityVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  }

  if (!isInitialized) return null

  return (
    <>
      <style jsx>{`
        .physics-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 12;
        }

        .square-box {
          position: absolute;
          background: linear-gradient(135deg, rgba(162, 70, 187, 0.1) 0%, rgba(70, 130, 180, 0.1) 100%);
          border: 1px solid rgba(162, 70, 187, 0.3);
          border-radius: 15px;
          padding: 1.2rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 20px rgba(162, 70, 187, 0.1);
          transition: box-shadow 0.3s ease, transform 0.1s ease;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: auto;
          cursor: grab;
          user-select: none;
        }

        .square-box:hover {
          box-shadow: 0 10px 30px rgba(162, 70, 187, 0.2);
          border-color: rgba(162, 70, 187, 0.5);
          transform: scale(1.02);
        }

        .square-box:active {
          cursor: grabbing;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(162, 70, 187, 0.3);
        }

        .square-box.dragging {
          cursor: grabbing;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(162, 70, 187, 0.3);
          z-index: 1000;
        }

        .activity-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .activity-card {
          background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(69, 183, 209, 0.1) 100%);
          border: 1px solid rgba(78, 205, 196, 0.3);
          border-radius: 12px;
          padding: 0.8rem 1.2rem;
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 15px rgba(78, 205, 196, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .activity-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(78, 205, 196, 0.2);
          border-color: rgba(78, 205, 196, 0.5);
        }

        .about-activity {
          list-style: none;
          margin: 0;
          font-weight: 500;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .square-box {
            width: 220px;
            height: 220px;
            padding: 1rem;
            font-size: 0.9rem;
          }

          .activity-card {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .square-box {
            width: 180px;
            height: 180px;
            padding: 0.8rem;
            font-size: 0.8rem;
          }

          .activity-card {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="physics-container">
        <div
          className={`square-box ${isDragging === 0 ? "dragging" : ""}`}
          ref={(el) => (boxRefs.current[0] = el)}
          onMouseDown={(e) => handleMouseDown(0, e)}
        >
          <p style={{ margin: 0 }}>
            ➢ Hi Everyone, I am <span className="purple">Ritika Sah </span>
            from <span className="purple"> Ranchi,Jharkhand.</span> I am currently employed as a software developer at
            O2N Enterprises.
          </p>
        </div>

        <div
          className={`square-box ${isDragging === 1 ? "dragging" : ""}`}
          ref={(el) => (boxRefs.current[1] = el)}
          onMouseDown={(e) => handleMouseDown(1, e)}
        >
          <p style={{ margin: 0 }}>
            ➢ Armed with a Bachelor's in Computer Application (86%) and a curiosity that never sleeps, I blend logic
            with creativity to build digital experiences that not only work—but wow.
          </p>
        </div>

        

        <div
          className={`square-box ${isDragging === 2 ? "dragging" : ""}`}
          ref={(el) => (boxRefs.current[2] = el)}
          onMouseDown={(e) => handleMouseDown(2, e)}
        >
          <p style={{ margin: 0 }}>
            ➢ I am fluent in classics like Javascript, React js, Next js, Node js, Express js, MongoDB and Postgres sql
          </p>
        </div>

        <div
          className={`square-box ${isDragging === 3 ? "dragging" : ""}`}
          ref={(el) => (boxRefs.current[3] = el)}
          onMouseDown={(e) => handleMouseDown(3, e)}
        >
          <div>
            <p style={{ margin: 0, marginBottom: "1rem" }}>
              ➢ Apart from coding, some other activities that I love to do!
            </p>

            <div className="activity-section">
              {["Playing Sports", "Dancing", "Workout"].map((activity, index) => (
                <motion.div key={activity} custom={index} variants={activityVariants} className="about-activity">
                  <div className="activity-card">{activity}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
