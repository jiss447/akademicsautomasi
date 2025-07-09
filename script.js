/* style.css */

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0e0e0e;
  color: #fff;
  line-height: 1.6;
}

.header {
  background: linear-gradient(135deg, #1f005c, #5b0060);
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
}

.logo-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.logo {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

.subtitle {
  font-size: 1rem;
  color: #ddd;
}

.cta {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.7rem 1.2rem;
  background: #8f00ff;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: background 0.3s;
}

.cta.discord {
  background: #5865F2;
}

.cta:hover {
  opacity: 0.9;
}

.section {
  padding: 2rem 1rem;
  text-align: center;
  max-width: 1000px;
  margin: auto;
}

.reasons ul,
.learning ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
}

.reasons li,
.learning li {
  margin: 0.5rem 0;
}

.workflow-img,
.crypto-img {
  width: 100%;
  max-width: 900px;
  margin-top: 1rem;
  border-radius: 12px;
}

.footer {
  background: #111;
  color: #aaa;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .logo-bar {
    flex-direction: column;
  }

  .title {
    font-size: 1.4rem;
  }

  .cta {
    width: 90%;
    display: block;
    margin: 0.5rem auto;
  }
}
