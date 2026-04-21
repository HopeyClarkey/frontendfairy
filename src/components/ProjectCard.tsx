import type { Project } from "../data/projects"

export default function ProjectCard({ title, subtitle, description, areas, liveUrl, repoUrl }: Project) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="screenshot-placeholder" />
        <h2 className="card-title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p>{description}</p>
        <ul>
          {areas.map(area => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <div className="card-actions">
          <a className="btn" href={liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a className="btn" href={repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}