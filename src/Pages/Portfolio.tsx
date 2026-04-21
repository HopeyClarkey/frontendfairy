import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Portfolio() {
  console.log(projects)
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeSlug, setActiveSlug] = useState<string | null>(slug ?? null)
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function slugify(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-')
  }

  function handleSelect(title: string) {
    const s = slugify(title)
    if (activeSlug === s) {
      setActiveSlug(null)
      navigate('/portfolio')
    } else {
      setActiveSlug(s)
      navigate(`/portfolio/${s}`)
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
    <div className= "portfolio background2">
      <h1>Blood, Sweat, & Tears</h1>
      <div className="carousel carousel-vertical w-full gap-4 p-4">
        {projects.map(project => {
          const s = project.slug
          const isActive = activeSlug === s
          const isReceded = activeSlug !== null && !isActive

          return (
            <div
              className="carousel-item"
              key={project.title}
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