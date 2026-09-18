export function Footer({ profile }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <p className="footer-identity">{profile.name}<span aria-hidden="true"> · </span><span>{profile.role}</span></p>
        <nav className="footer-links" aria-label={profile.footer.links}>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${profile.contact.email}`}>{profile.footer.email}</a>
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
