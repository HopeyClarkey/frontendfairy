import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Portfolio() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeSlug, setActiveSlug] = useState<string | null>(slug ?? null)
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleSelect(slug: string) {
    if (activeSlug === slug) {
      setActiveSlug(null)
      navigate('/portfolio')
    } else {
      setActiveSlug(slug)
      navigate(`/portfolio/${slug}`)
    }
  }

  function handleHoldStart(liveUrl: string) {
    holdTimer.current = setTimeout(() => {
      if (liveUrl !== '#') {
        window.open(liveUrl, '_blank', 'noreferrer')
      }
    }, 600)
  }

  function handleHoldEnd() {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current)
      holdTimer.current = null
    }
  }

  return (
    <div className="portfolio background2">
      <h1>Blood, Sweat, & Tears</h1>
      <div className="carousel carousel-vertical w-full gap-4 p-4">
        {projects.map(project => {
          const isActive = activeSlug === project.slug
          const isReceded = activeSlug !== null && !isActive

          return (
            <div
              className="carousel-item"
              key={project.slug}
              data-active={isActive}
              data-receded={isReceded}
              onClick={() => handleSelect(project.slug)}
              onMouseDown={() => handleHoldStart(project.liveUrl)}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={() => handleHoldStart(project.liveUrl)}
              onTouchEnd={handleHoldEnd}
            >
              <ProjectCard {...project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}