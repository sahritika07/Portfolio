"use client"

import { useRef, useEffect } from "react"

const CardAnimation = ({ children, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    let bounds
    let animationId
    const startTime = Date.now()

    // Different animation parameters for each card to create variation
    const animationOffset = index * 500
    const animationSpeed = 0.0005 + (index % 3) * 0.0001
    const animationAmplitude = 10 + (index % 4) * 2

    const animate = () => {
      const elapsed = Date.now() - startTime + animationOffset

      // Create gentle floating motion
      const translateY = Math.sin(elapsed * animationSpeed) * animationAmplitude
      const translateX = Math.sin(elapsed * animationSpeed * 0.8) * (animationAmplitude * 0.5)
      const rotateX = Math.sin(elapsed * animationSpeed * 1.2) * 1
      const rotateY = Math.cos(elapsed * animationSpeed * 1.5) * 1

      card.style.transform = `
        translate3d(${translateX}px, ${translateY}px, 0)
        rotate3d(${rotateX * 0.1}, ${rotateY * 0.1}, 0, ${rotateX + rotateY}deg)
      `

      animationId = requestAnimationFrame(animate)
    }

    const rotateToMouse = (e) => {
      // Stop the floating animation when hovering
      cancelAnimationFrame(animationId)

      const mouseX = e.clientX
      const mouseY = e.clientY
      const leftX = mouseX - bounds.x
      const topY = mouseY - bounds.y
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      }
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

      card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `

      const img = card.querySelector(".card-img-top")
      if (img) {
        img.style.transform = `
          translateX(${center.x / 10}px)
          translateY(${center.y / 10}px)
        `
      }
    }

    const removeRotation = () => {
      // Resume the floating animation when not hovering
      animationId = requestAnimationFrame(animate)
    }

    const setInitialState = () => {
      bounds = card.getBoundingClientRect()
    }

    // Start the floating animation
    animationId = requestAnimationFrame(animate)

    card.addEventListener("mouseenter", setInitialState)
    card.addEventListener("mousemove", rotateToMouse)
    card.addEventListener("mouseleave", removeRotation)

    return () => {
      cancelAnimationFrame(animationId)
      card.removeEventListener("mouseenter", setInitialState)
      card.removeEventListener("mousemove", rotateToMouse)
      card.removeEventListener("mouseleave", removeRotation)
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transition: "transform 0.05s ease-out",
      }}
    >
      {children}
    </div>
  )
}

export default CardAnimation
