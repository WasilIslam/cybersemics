export default function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="brand">Cybersemics</h1>
        <p className="subtitle">Digital meaning systems</p>
      </header>

      <main className="main">
        <section className="word-boxes">
          <div className="word-box cyber-box">
            <h2 className="word-title">Cyber</h2>
            <p className="word-meaning">Digital systems, computational processes, and virtual environments where information flows and interactions occur</p>
            <div className="word-origin">
              <small>From Greek "kybernētēs" - steersman</small>
            </div>
          </div>
          
          <div className="word-box semiotics-box">
            <h2 className="word-title">Semiotics</h2>
            <p className="word-meaning">Study of signs, symbols, and meaning-making processes in communication and cultural systems</p>
            <div className="word-origin">
              <small>From Greek "sēmeiotikos" - observant of signs</small>
            </div>
          </div>
        </section>



        <section className="purchase-box">
          <div className="purchase-content">
            <div className="domain-sale">
              <div className="domain-header">
                <h2 className="domain-title">cybersemics.com</h2>
                <div className="price-display">
                  <span className="price-label">For Sale</span>
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">5,000</span>
                  </div>
                </div>
              </div>
              
              <div className="urgency-banner">
                <p className="urgency-text">
                  ⚡ Act fast before <strong>Wasil</strong> builds something here
                </p>
              </div>
            </div>

            <div className="action-cards">
              <div className="action-card buy-card">
                <div className="card-icon">💰</div>
                <h3 className="card-title">Buy Domain</h3>
                <p className="card-description">
                  Secure this premium domain for your project, research, or business
                </p>
                <a href="mailto:wasilislam456@gmail.com?subject=Domain Purchase: cybersemics.com&body=Hi Wasil,%0A%0AI'm interested in purchasing cybersemics.com for $5,000 USD.%0A%0APlease let me know the next steps.%0A%0AThank you!" className="card-button primary">
                  Purchase Domain
                </a>
              </div>
              
              <div className="action-card hire-card">
                <div className="card-icon">🚀</div>
                <h3 className="card-title">Hire Wasil</h3>
                <p className="card-description">
                  Get a custom website or application built on this domain
                </p>
                <a href="mailto:wasilislam456@gmail.com?subject=Hire for Custom Development&body=Hi Wasil,%0A%0AI'd like to hire you to build something custom on cybersemics.com%0A%0AProject details:%0A%0APlease share your rates and timeline.%0A%0AThank you!" className="card-button secondary">
                  Hire Developer
                </a>
              </div>
            </div>

            <div className="contact-footer">
              <div className="contact-methods">
                <a href="mailto:wasilislam456@gmail.com" className="contact-method">
                  <span className="method-icon">📧</span>
                  <span className="method-text">wasilislam456@gmail.com</span>
                </a>
                
                <a href="tel:+923101457770" className="contact-method">
                  <span className="method-icon">📱</span>
                  <span className="method-text">+92 310 1457770</span>
                </a>
              </div>
              
              <div className="portfolio-links">
                <span className="portfolio-label">Check out Wasil's work:</span>
                <div className="portfolio-sites">
                  <a href="https://cuthours.com" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    cuthours.com
                  </a>
                  <a href="https://chotey.com" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    chotey.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
