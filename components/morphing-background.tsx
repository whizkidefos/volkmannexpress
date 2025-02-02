"use client"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export function MorphingBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const createBlob = (x: number, y: number, radius: number, time: number, distortionFactor: number = 1) => {
      ctx.beginPath()
      const points: [number, number][] = []
      
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        const xOffset = Math.cos(angle)
        const yOffset = Math.sin(angle)
        
        // Create more complex distortion
        const noise = Math.sin(angle * 3 + time) * 15 * distortionFactor +
                     Math.cos(angle * 5 - time * 0.5) * 10 * distortionFactor
        
        // Add mouse interaction
        const dx = x - mouseX
        const dy = y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const mouseFactor = Math.max(0, 1 - distance / 300)
        const r = radius + noise + mouseFactor * 30

        const px = x + xOffset * r
        const py = y + yOffset * r

        points.push([px, py])
      }

      // Create smooth curve through points
      ctx.moveTo(points[0][0], points[0][1])
      for (let i = 1; i < points.length; i++) {
        const xc = (points[i][0] + points[i - 1][0]) / 2
        const yc = (points[i][1] + points[i - 1][1]) / 2
        ctx.quadraticCurveTo(points[i - 1][0], points[i - 1][1], xc, yc)
      }
      // Close the curve
      const lastPoint = points[points.length - 1]
      const firstPoint = points[0]
      const xc = (firstPoint[0] + lastPoint[0]) / 2
      const yc = (firstPoint[1] + lastPoint[1]) / 2
      ctx.quadraticCurveTo(lastPoint[0], lastPoint[1], xc, yc)
      ctx.closePath()
    }

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      // Create multiple gradients for a more complex effect
      const gradients = [
        ctx.createLinearGradient(0, 0, width, height),
        ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.7)
      ]

      if (isDark) {
        gradients[0].addColorStop(0, 'rgba(30, 41, 59, 0.4)')
        gradients[0].addColorStop(1, 'rgba(51, 65, 85, 0.4)')
        gradients[1].addColorStop(0, 'rgba(51, 65, 85, 0.2)')
        gradients[1].addColorStop(1, 'rgba(30, 41, 59, 0.2)')
      } else {
        gradients[0].addColorStop(0, 'rgba(219, 234, 254, 0.4)')
        gradients[0].addColorStop(1, 'rgba(191, 219, 254, 0.4)')
        gradients[1].addColorStop(0, 'rgba(191, 219, 254, 0.2)')
        gradients[1].addColorStop(1, 'rgba(219, 234, 254, 0.2)')
      }

      // Create multiple layers of blobs with different properties
      const blobLayers = [
        {
          blobs: [
            { x: width * 0.3, y: height * 0.4, radius: 120, distortion: 1.2 },
            { x: width * 0.7, y: height * 0.6, radius: 150, distortion: 0.8 },
            { x: width * 0.5, y: height * 0.5, radius: 180, distortion: 1.0 }
          ],
          gradient: gradients[0]
        },
        {
          blobs: [
            { x: width * 0.4, y: height * 0.3, radius: 100, distortion: 1.5 },
            { x: width * 0.6, y: height * 0.7, radius: 130, distortion: 0.7 }
          ],
          gradient: gradients[1]
        }
      ]

      // Render each layer
      blobLayers.forEach(layer => {
        ctx.save()
        layer.blobs.forEach(blob => {
          createBlob(blob.x, blob.y, blob.radius, time, blob.distortion)
          ctx.fillStyle = layer.gradient
          ctx.fill()
        })
        ctx.restore()
      })

      time += 0.005 // Slower animation for smoother movement
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(40px)' }}
      />
    </motion.div>
  )
}